import Database from 'sqlite3';
import { promisify } from 'util';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SearchResult {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  categories: string[];
  type: 'blog' | 'social';
  url: string;
  coverImage?: string;
  relevanceScore?: number;
}

interface SearchOptions {
  limit?: number;
  category?: string;
  type?: 'blog' | 'social';
}

export class ContentSearcher {
  private db: Database.Database;
  private dbPath: string;

  constructor() {
    this.dbPath = path.join(__dirname, '..', 'data', 'content.db');
    this.db = new Database.Database(this.dbPath);
  }

  async search(query: string, options: SearchOptions = {}): Promise<SearchResult[]> {
    const { limit = 5, category, type } = options;
    
    let sql = `
      SELECT id, title, slug, excerpt, date, tags, categories, type, url, cover_image
      FROM content
      WHERE (
        title LIKE ? OR 
        content LIKE ? OR 
        excerpt LIKE ? OR
        tags LIKE ? OR
        categories LIKE ?
      )
    `;
    
    const params: any[] = [
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      `%${query}%`
    ];

    if (category) {
      sql += ' AND categories LIKE ?';
      params.push(`%${category}%`);
    }

    if (type) {
      sql += ' AND type = ?';
      params.push(type);
    }

    sql += ' ORDER BY date DESC LIMIT ?';
    params.push(limit);

    const all = promisify(this.db.all.bind(this.db));
    const results = await all(sql, params);

    return results.map((row: any) => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      date: row.date,
      tags: JSON.parse(row.tags || '[]'),
      categories: JSON.parse(row.categories || '[]'),
      type: row.type,
      url: row.url,
      coverImage: row.cover_image,
    }));
  }

  async getBySlug(slug: string): Promise<SearchResult | null> {
    const get = promisify(this.db.get.bind(this.db));
    
    const row = await get(`
      SELECT id, title, slug, excerpt, date, tags, categories, type, url, cover_image
      FROM content
      WHERE slug = ?
    `, [slug]);

    if (!row) return null;

    return {
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      date: row.date,
      tags: JSON.parse(row.tags || '[]'),
      categories: JSON.parse(row.categories || '[]'),
      type: row.type,
      url: row.url,
      coverImage: row.cover_image,
    };
  }

  async getCategories(): Promise<string[]> {
    const all = promisify(this.db.all.bind(this.db));
    
    const results = await all(`
      SELECT DISTINCT categories
      FROM content
      WHERE categories IS NOT NULL AND categories != '[]'
    `);

    const categories = new Set<string>();
    
    results.forEach((row: any) => {
      const parsed = JSON.parse(row.categories || '[]');
      parsed.forEach((cat: string) => categories.add(cat));
    });

    return Array.from(categories).sort();
  }

  async getRecent(limit: number = 10): Promise<SearchResult[]> {
    const all = promisify(this.db.all.bind(this.db));
    
    const results = await all(`
      SELECT id, title, slug, excerpt, date, tags, categories, type, url, cover_image
      FROM content
      ORDER BY date DESC
      LIMIT ?
    `, [limit]);

    return results.map((row: any) => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      date: row.date,
      tags: JSON.parse(row.tags || '[]'),
      categories: JSON.parse(row.categories || '[]'),
      type: row.type,
      url: row.url,
      coverImage: row.cover_image,
    }));
  }

  async getStats(): Promise<{ total: number; byType: Record<string, number>; byCategory: Record<string, number> }> {
    const get = promisify(this.db.get.bind(this.db));
    const all = promisify(this.db.all.bind(this.db));

    // Total count
    const totalResult = await get('SELECT COUNT(*) as count FROM content');
    const total = totalResult?.count || 0;

    // By type
    const typeResults = await all(`
      SELECT type, COUNT(*) as count
      FROM content
      GROUP BY type
    `);
    
    const byType: Record<string, number> = {};
    typeResults.forEach((row: any) => {
      byType[row.type] = row.count;
    });

    // By category
    const categoryResults = await all(`
      SELECT categories
      FROM content
      WHERE categories IS NOT NULL AND categories != '[]'
    `);
    
    const byCategory: Record<string, number> = {};
    categoryResults.forEach((row: any) => {
      const categories = JSON.parse(row.categories || '[]');
      categories.forEach((cat: string) => {
        byCategory[cat] = (byCategory[cat] || 0) + 1;
      });
    });

    return { total, byType, byCategory };
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
