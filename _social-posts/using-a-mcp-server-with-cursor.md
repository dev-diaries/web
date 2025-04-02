---
layout: social-post
type: "SocialPosts"
title: "Using A MCP Server With Cursor"
cover-image: /assets/images/mcp-server-docs.png
image: /assets/images/mcp-server-docs.png
excerpt: "Cursor can leverage a Model Context Protocol (MCP) server which can greatly aid development."
date: 2025-04-02
tags: [ai, cursor, agent, vibe-coding]
categories: [intermediate, beginner, cursor, ai]
instagram-id:
docs: https://docs.cursor.com/context/model-context-protocol
---
{:.center}
# {{ page.title }}

{:.post-content}
Cursor can leverage a Model Context Protocol (MCP) server which can greatly aid development. You can use a MCP server
that is local to the project by adding it to `.cursor/mcp.json` or global for all
projects you work with in cursor a `\~/.cursor/mcp.json` in your home directory. You can read
more about what Model Context Protocol is on the official [site](https://modelcontextprotocol.io/introduction)

{:.post-content}
A very large collection of MCP servers is available at [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers).
Let's say you want to leverage a MCP server to help with programming language
documentation. We can find a MCP server that provides documentation with [mcp-package-docs](https://github.com/sammcj/mcp-package-docs)

{:.post-content}
Let's first install the mcp server:

{% highlight bash %}
npx -y mcp-package-docs
{% endhighlight %}

{:.post-content}
Now that it is installed, let's add it to our cursor mcp.json file, either locally for a project or globally:

{% highlight json %}
{
  "mcpServers": {
    "mcp-package-docs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-package-docs"
      ]
    }
  }
}
{% endhighlight %}

{:.post-content}
Et voilà!

{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
