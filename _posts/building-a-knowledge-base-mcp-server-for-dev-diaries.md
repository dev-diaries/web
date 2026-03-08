---
layout: post
title: "Building a Knowledge Base MCP Server for Dev Diaries"
cover-image: /assets/images/mcp-server-architecture.png
image: /assets/images/mcp-server-architecture.png
excerpt: "Learn how we built a Model Context Protocol (MCP) server to make the entire Dev Diaries knowledge base searchable and accessible through Cursor's AI features."
date: 2025-04-06
tags: [mcp, cursor, ai, knowledge-base, typescript, sqlite]
categories: [advanced, ai, development, tools]
---

{:.center}
# {{ page.title }}

{:.post-content}
The Model Context Protocol (MCP) is revolutionizing how AI assistants interact with external data sources. In this comprehensive guide, we'll walk through building a complete MCP server that transforms the Dev Diaries knowledge base into an intelligent, searchable assistant accessible directly from Cursor.

## What We're Building

Our MCP server will provide:
- **Semantic search** across all blog posts and social media content
- **Category-based filtering** for targeted content discovery
- **Content retrieval** by slug for specific posts
- **Recent content access** for staying up-to-date
- **Category listing** for exploring available topics

## Architecture Overview

The server consists of three main components:

1. **Content Indexer**: Processes and stores all content in a SQLite database
2. **Content Searcher**: Provides search and retrieval functionality
3. **MCP Server**: Exposes tools through the Model Context Protocol

{:.image .center}
![MCP Server Architecture]({{page.image}})

## Project Setup

Let's start by creating our project structure:

```bash
mkdir dev-diaries-mcp
cd dev-diaries-mcp
npm init -y
```

### Dependencies

We'll need several key packages:

```json
{
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.4.0",
    "cheerio": "^1.0.0-rc.12",
    "gray-matter": "^4.0.3",
    "sqlite3": "^5.1.6",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "tsx": "^4.6.0",
    "typescript": "^5.3.0"
  }
}
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

## Content Indexing System

The heart of our MCP server is the content indexing system. We'll create a robust system that can process both blog posts and social media content.

### Database Schema

```sql
CREATE TABLE content (
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
);
```

### Content Indexer Implementation

```typescript
export class ContentIndexer {
  private db: Database.Database;
  private dbPath: string;

  constructor() {
    this.dbPath = path.join(__dirname, '..', 'data', 'content.db');
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
  }
}
```

## Search Functionality

Our search system provides multiple ways to discover content:

### Basic Search Implementation

```typescript
export class ContentSearcher {
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
}
```

## MCP Server Implementation

The MCP server exposes our functionality through standardized tools:

### Server Setup

```typescript
class DevDiariesMCPServer {
  private server: Server;
  private contentIndexer: ContentIndexer;
  private contentSearcher: ContentSearcher;

  constructor() {
    this.server = new Server(
      {
        name: 'dev-diaries-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.contentIndexer = new ContentIndexer();
    this.contentSearcher = new ContentSearcher();
    this.setupHandlers();
  }
}
```

### Tool Definitions

```typescript
this.server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search_content',
        description: 'Search through Dev Diaries content including blog posts and social media tips',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query for content',
            },
            limit: {
              type: 'number',
              description: 'Maximum number of results to return (default: 5)',
              default: 5,
            },
            category: {
              type: 'string',
              description: 'Filter by content category (e.g., terminal, kubernetes, productivity)',
            },
          },
          required: ['query'],
        },
      },
      // ... other tools
    ],
  };
});
```

## Content Processing Pipeline

### Frontmatter Parsing

We use `gray-matter` to parse Jekyll frontmatter:

```typescript
const { data: frontmatter, content: markdownContent } = matter(content);

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
```

### Database Operations

We use SQLite with proper indexing for performance:

```sql
CREATE INDEX IF NOT EXISTS idx_content_type ON content(type);
CREATE INDEX IF NOT EXISTS idx_content_date ON content(date);
CREATE INDEX IF NOT EXISTS idx_content_tags ON content(tags);
CREATE INDEX IF NOT EXISTS idx_content_categories ON content(categories);
```

## Deployment and Configuration

### Building the Server

```bash
npm run build
```

### Cursor Configuration

Add to your `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "dev-diaries": {
      "command": "node",
      "args": ["/path/to/dev-diaries-mcp/dist/index.js"]
    }
  }
}
```

### Content Indexing

```bash
npm run index-content /path/to/your/dev-diaries/repo
```

## Usage Examples

Once configured, developers can use natural language queries:

### Search Queries
```
"Show me all kubernetes tips from Dev Diaries"
"Find productivity shortcuts for terminal usage"
"Search for Cursor IDE tips and tricks"
```

### Specific Content Retrieval
```
"Get the 'using-cursor-effectively' post"
"Show me the latest social media tips"
"Find content about TypeScript best practices"
```

### Category Exploration
```
"What categories are available in Dev Diaries?"
"Show me all terminal-related content"
"List recent blog posts about AI tools"
```

## Performance Optimizations

### Database Indexing
- Indexed on type, date, tags, and categories
- Optimized queries for common search patterns
- Efficient JSON storage for metadata

### Memory Management
- Lazy loading of content
- Connection pooling for database operations
- Efficient search result pagination

### Caching Strategy
- SQLite provides built-in caching
- Query result caching for repeated searches
- Content metadata caching

## Error Handling and Validation

### Input Validation
```typescript
const SearchContentSchema = z.object({
  query: z.string().describe('Search query for content'),
  limit: z.number().optional().default(5).describe('Maximum number of results to return'),
  category: z.string().optional().describe('Filter by content category'),
});
```

### Error Responses
```typescript
try {
  // Tool execution
} catch (error) {
  return {
    content: [
      {
        type: 'text',
        text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      },
    ],
    isError: true,
  };
}
```

## Testing and Quality Assurance

### Unit Testing
- Test content indexing with sample data
- Validate search functionality
- Test MCP tool responses

### Integration Testing
- End-to-end MCP server testing
- Cursor integration testing
- Performance benchmarking

## Future Enhancements

### Advanced Search Features
- **Semantic search** using embeddings
- **Fuzzy matching** for typos
- **Relevance scoring** based on content analysis
- **Auto-complete** for search suggestions

### Content Analysis
- **Topic modeling** for better categorization
- **Content similarity** detection
- **Trending topics** identification
- **Content recommendations**

### Performance Improvements
- **Full-text search** with FTS5
- **Caching layer** with Redis
- **Background indexing** for real-time updates
- **Distributed search** for large datasets

## Conclusion

Building an MCP server for Dev Diaries transforms a static knowledge base into an intelligent, searchable assistant. This approach demonstrates how MCP can bridge the gap between AI assistants and domain-specific knowledge, making expert content easily accessible through natural language queries.

The key benefits of this implementation:

1. **Seamless Integration**: Works directly within Cursor's AI features
2. **Comprehensive Search**: Covers all content types and categories
3. **Performance Optimized**: Fast queries with proper indexing
4. **Extensible Architecture**: Easy to add new features and content types
5. **Developer Friendly**: Simple configuration and maintenance

This MCP server serves as a template for other knowledge bases, demonstrating how to make any curated content collection accessible to AI assistants. The combination of structured data, efficient search, and natural language interfaces creates a powerful tool for developers seeking quick access to expert knowledge.

## Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Cursor MCP Integration Guide](https://docs.cursor.com/context/model-context-protocol)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)

---

*This post demonstrates the complete process of building a production-ready MCP server. The code is available in the [dev-diaries-mcp repository](https://github.com/your-username/dev-diaries-mcp) and can be adapted for other knowledge bases.*
