#!/usr/bin/env node

import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContentDownloadOptions {
  source: 'github' | 'url';
  repo?: string;
  url?: string;
  branch?: string;
}

async function downloadContent(options: ContentDownloadOptions) {
  const { source, repo, url, branch = 'main' } = options;
  
  if (source === 'github' && repo) {
    console.log(`Downloading content from GitHub repository: ${repo}`);
    // Implementation for downloading from GitHub
    // This would use the GitHub API to fetch the latest content
  } else if (source === 'url' && url) {
    console.log(`Downloading content from URL: ${url}`);
    // Implementation for downloading from a URL
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: npm run download-content <source> [options]');
    console.log('Sources:');
    console.log('  github <repo> [branch] - Download from GitHub repository');
    console.log('  url <url> - Download from URL');
    console.log('');
    console.log('Examples:');
    console.log('  npm run download-content github khaliqgant/dev-diaries');
    console.log('  npm run download-content url https://api.dev-diaries.com/content');
    process.exit(1);
  }

  const source = args[0] as 'github' | 'url';
  
  if (source === 'github') {
    const repo = args[1];
    const branch = args[2] || 'main';
    
    if (!repo) {
      console.error('GitHub repository is required');
      process.exit(1);
    }
    
    await downloadContent({ source, repo, branch });
  } else if (source === 'url') {
    const url = args[1];
    
    if (!url) {
      console.error('URL is required');
      process.exit(1);
    }
    
    await downloadContent({ source, url });
  } else {
    console.error('Invalid source. Use "github" or "url"');
    process.exit(1);
  }
}

main().catch(console.error);
