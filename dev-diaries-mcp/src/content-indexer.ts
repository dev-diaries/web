import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import Database from 'sqlite3';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  tags: string[];
  categories: string[];
  type: 'blog' | 'social';
  url: string;
  coverImage?: string;
}

export class ContentIndexer {
  private db: Database.Database;
  private dbPath: string;

  constructor() {
    this.dbPath = path.join(__dirname, '..', 'data', 'content.db');
  }

  async initialize() {
    // Ensure data directory exists
    const dataDir = path.dirname(this.dbPath);
    await fs.mkdir(dataDir, { recursive: true });

    // Initialize database
    this.db = new Database.Database(this.dbPath);
    await this.createTables();
  }

  private async createTables() {
    const run = promisify(this.db.run.bind(this.db));

    await run(`
      CREATE TABLE IF NOT EXISTS content (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        date TEXT NOT NULL,
        tags TEXT,
        categories TEXT,
        type TEXT NOT NULL,
        url TEXT NOT NULL,
        cover_image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await run(`
      CREATE INDEX IF NOT EXISTS idx_content_type ON content(type);
      CREATE INDEX IF NOT EXISTS idx_content_date ON content(date);
      CREATE INDEX IF NOT EXISTS idx_content_tags ON content(tags);
      CREATE INDEX IF NOT EXISTS idx_content_categories ON content(categories);
    `);
  }

  async indexAllContent(devDiariesPath: string) {
    await this.initialize();
    
    console.log('Indexing blog posts...');
    await this.indexBlogPosts(path.join(devDiariesPath, '_posts'));
    
    console.log('Indexing social posts...');
    await this.indexSocialPosts(path.join(devDiariesPath, '_social-posts'));
    
    console.log('Content indexing complete!');
  }

  private async indexBlogPosts(postsPath: string) {
    try {
      const files = await fs.readdir(postsPath);
      const markdownFiles = files.filter(file => file.endsWith('.md'));

      for (const file of markdownFiles) {
        const filePath = path.join(postsPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data: frontmatter, content: markdownContent } = matter(content);
        
        const slug = file.replace('.md', '');
        const contentItem: ContentItem = {
          id: `blog-${slug}`,
          title: frontmatter.title || 'Untitled',
          slug,
          content: markdownContent,
          excerpt: frontmatter.excerpt || '',
          date: frontmatter.date || new Date().toISOString(),
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
          categories: Array.isArray(frontmatter.categories) ? frontmatter.categories : [],
          type: 'blog',
          url: `https://www.dev-diaries.com/blog/${slug}`,
          coverImage: frontmatter.cover_image || frontmatter.image,
        };

        await this.insertContent(contentItem);
      }
    } catch (error) {
      console.error('Error indexing blog posts:', error);
    }
  }

  private async indexSocialPosts(socialPath: string) {
    try {
      const files = await fs.readdir(socialPath);
      const markdownFiles = files.filter(file => file.endsWith('.md'));

      for (const file of markdownFiles) {
        const filePath = path.join(socialPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data: frontmatter, content: markdownContent } = matter(content);
        
        const slug = file.replace('.md', '');
        const contentItem: ContentItem = {
          id: `social-${slug}`,
          title: frontmatter.title || 'Untitled',
          slug,
          content: markdownContent,
          excerpt: frontmatter.excerpt || '',
          date: frontmatter.date || new Date().toISOString(),
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
          categories: Array.isArray(frontmatter.categories) ? frontmatter.categories : [],
          type: 'social',
          url: `https://www.dev-diaries.com/social/${slug}`,
          coverImage: frontmatter.cover_image || frontmatter.image,
        };

        await this.insertContent(contentItem);
      }
    } catch (error) {
      console.error('Error indexing social posts:', error);
    }
  }

  private async insertContent(item: ContentItem) {
    const run = promisify(this.db.run.bind(this.db));
    
    await run(`
      INSERT OR REPLACE INTO content 
      (id, title, slug, content, excerpt, date, tags, categories, type, url, cover_image, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `, [
      item.id,
      item.title,
      item.slug,
      item.content,
      item.excerpt,
      item.date,
      JSON.stringify(item.tags),
      JSON.stringify(item.categories),
      item.type,
      item.url,
      item.coverImage || null,
    ]);
  }

  async close() {
    if (this.db) {
      await new Promise<void>((resolve, reject) => {
        this.db.close((err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }
  }
}
