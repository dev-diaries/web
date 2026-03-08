# Dev Diaries MCP Server

A Model Context Protocol (MCP) server that provides access to the Dev Diaries knowledge base, including blog posts and social media tips.

## Features

- **Content Search**: Search through all blog posts and social media content
- **Category Filtering**: Filter content by categories (terminal, kubernetes, productivity, etc.)
- **Content Retrieval**: Get specific content by slug
- **Recent Content**: Access recently published content
- **Category Listing**: Get all available content categories

## Installation

### Option 1: NPM Package (Recommended)

Install from NPM:
```bash
npm install -g @dev-diaries/mcp
```

Or use with npx (no installation required):
```bash
npx @dev-diaries/mcp
```

### Option 2: Docker Container

Run with Docker:
```bash
# Clone the repository
git clone <repository-url>
cd dev-diaries-mcp

# Build and run with Docker Compose
docker-compose up -d
```

### Option 3: From Source

1. Clone this repository:
```bash
git clone <repository-url>
cd dev-diaries-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

### Option 4: Pre-built Content

Download pre-indexed content:
```bash
# Download from GitHub repository
npm run download-content github khaliqgant/dev-diaries

# Or download from a URL
npm run download-content url https://api.dev-diaries.com/content
```

## Setup

1. **Index Content**: First, you need to index your Dev Diaries content:

**If installed via NPM:**
```bash
dev-diaries-index /path/to/your/dev-diaries/repo
```

**If installed from source:**
```bash
npm run index-content /path/to/your/dev-diaries/repo
```

2. **Configure Cursor**: Add the MCP server to your Cursor configuration:

**Global configuration** (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "dev-diaries": {
      "command": "npx",
      "args": ["@dev-diaries/mcp"]
    }
  }
}
```

**Project-specific configuration** (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "dev-diaries": {
      "command": "npx",
      "args": ["@dev-diaries/mcp"]
    }
  }
}
```

**If installed globally:**
```json
{
  "mcpServers": {
    "dev-diaries": {
      "command": "@dev-diaries/mcp"
    }
  }
}
```

## Usage

Once configured, you can use the following tools in Cursor:

### Search Content
Search through all Dev Diaries content:
```
Search for "kubernetes tips" in Dev Diaries content
```

### Get Specific Content
Retrieve a specific post by slug:
```
Get the "using-cursor-effectively" post from Dev Diaries
```

### Get Categories
List all available content categories:
```
Show me all categories available in Dev Diaries
```

### Get Recent Content
Get recently published content:
```
Show me the 5 most recent Dev Diaries posts
```

## Available Tools

- `search_content`: Search through all content with optional category filtering
- `get_content`: Get specific content by slug
- `get_categories`: Get all available content categories
- `get_recent_content`: Get recently published content

## Development

### Running in Development Mode
```bash
npm run dev
```

### Rebuilding After Changes
```bash
npm run build
```

### Re-indexing Content
```bash
npm run index-content /path/to/your/dev-diaries/repo
```

## Data Structure

The MCP server creates a SQLite database (`data/content.db`) with the following structure:

- **content**: Main table storing all indexed content
- **Indexes**: Optimized for searching by type, date, tags, and categories

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
