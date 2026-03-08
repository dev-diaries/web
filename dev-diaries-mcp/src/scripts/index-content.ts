#!/usr/bin/env node

import { ContentIndexer } from '../content-indexer.js';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const devDiariesPath = process.argv[2];
  
  if (!devDiariesPath) {
    console.error('Usage: npm run index-content <path-to-dev-diaries-repo>');
    console.error('Example: npm run index-content /Users/username/Projects/dev-diaries');
    process.exit(1);
  }

  const indexer = new ContentIndexer();
  
  try {
    console.log(`Indexing content from: ${devDiariesPath}`);
    await indexer.indexAllContent(devDiariesPath);
    console.log('✅ Content indexing completed successfully!');
  } catch (error) {
    console.error('❌ Error indexing content:', error);
    process.exit(1);
  } finally {
    await indexer.close();
  }
}

main().catch(console.error);
