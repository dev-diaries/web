---
layout: social-post
type: "SocialPosts"
title: "Setting Files to Ignore with Cursor Ignore"
cover-image: /assets/images/cursor-ignore-cover.png
image: /assets/images/cursor-ignore-cover.png
excerpt: "Learn how to control which files Cursor's AI features and indexing can access using .cursorignore and .cursorindexingignore files."
date: 2025-04-06
tags: [cursor, ide, productivity, configuration, security]
categories: [intermediate, cursor, configuration]
instagram-id:
docs: https://docs.cursor.com/context/ignore-files
---
{:.center}
# {{ page.title }}

{:.post-content}
Cursor provides two ignore files to control how your files are handled:

1. `.cursorignore`: Excludes files from both AI features and indexing
2. `.cursorindexingignore`: Controls only which files are indexed for search

{:.post-content}
## When to Use Each File

### `.cursorignore` - Use for:
- Sensitive files and secrets
- Proprietary code
- Files you don't want AI to access

### `.cursorindexingignore` - Use for:
- Large generated files
- Binary files
- Performance optimization

{:.post-content}
## Key Points

- `.cursorignore` is best-effort (may not guarantee complete exclusion)
- `.cursorindexingignore` inherits patterns from `.gitignore`
- Files in `.cursorindexingignore` can still be manually included
- Default ignore patterns apply for common file types

{:.post-content}
Read more about Cursor's ignore files <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
