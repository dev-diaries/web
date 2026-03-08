#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import { ContentIndexer } from './content-indexer.js';
import { ContentSearcher } from './content-searcher.js';

const SearchContentSchema = z.object({
  query: z.string().describe('Search query for content'),
  limit: z.number().optional().default(5).describe('Maximum number of results to return'),
  category: z.string().optional().describe('Filter by content category'),
});

const GetContentSchema = z.object({
  slug: z.string().describe('Content slug to retrieve'),
});

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

  private setupHandlers() {
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
          {
            name: 'get_content',
            description: 'Get specific content by slug',
            inputSchema: {
              type: 'object',
              properties: {
                slug: {
                  type: 'string',
                  description: 'Content slug to retrieve',
                },
              },
              required: ['slug'],
            },
          },
          {
            name: 'get_categories',
            description: 'Get all available content categories',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'get_recent_content',
            description: 'Get recently published content',
            inputSchema: {
              type: 'object',
              properties: {
                limit: {
                  type: 'number',
                  description: 'Maximum number of results to return (default: 10)',
                  default: 10,
                },
              },
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'search_content': {
            const { query, limit, category } = SearchContentSchema.parse(args);
            const results = await this.contentSearcher.search(query, { limit, category });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(results, null, 2),
                },
              ],
            };
          }

          case 'get_content': {
            const { slug } = GetContentSchema.parse(args);
            const content = await this.contentSearcher.getBySlug(slug);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(content, null, 2),
                },
              ],
            };
          }

          case 'get_categories': {
            const categories = await this.contentSearcher.getCategories();
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(categories, null, 2),
                },
              ],
            };
          }

          case 'get_recent_content': {
            const { limit = 10 } = args as { limit?: number };
            const recent = await this.contentSearcher.getRecent(limit);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(recent, null, 2),
                },
              ],
            };
          }

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
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
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Dev Diaries MCP server running on stdio');
  }
}

const server = new DevDiariesMCPServer();
server.run().catch(console.error);
