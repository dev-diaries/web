---
layout: social-post
type: "SocialPosts"
title: "Markdown Basics"
cover-image: /assets/images/markdown-syntax-cover.png
image: /assets/images/.gif
excerpt: "Markdown is one of the most popular markup languages and is ubiquitous with web development."
date: 2019-06-10
categories: [beginner, markdown, web-dev-tools]
instagram-id: ByinQVEHIVH
docs: https://www.markdownguide.org/
---
{:.center}
# {{ page.title }}

{:.post-content}
Markdown is one of the most popular markup languages and is ubiquitous with web development.
Once embraced, it is a powerful and easy to use language to write text. Its syntax
is relatively straight forward and a markdown document is fairly easy to convert
to any other format. Let's get familiar with the syntax:

{% highlight markdown %}
H1              # Header 1
...
H6              ###### Header 6
Italics         *word* or _word_
Bold            **word**
Strikethrough   ~~word~~

Links           [link name](http://the-link.com)
Images          ![alt text][logo]
Code            `my code`
Code Block      ```my code block```

Block quote     > my quote
{% endhighlight %}

{:.post-content}
There are some great tools to convert markdown to other formats.
<a href="http://dillinger.io" target="_blank">dillinger.io</a> is a great online
tool to take some markdown and convert it to multiple formats. <a href="https://www.npmjs.com/package/markdown-pdf" target="_blank">markdown-pdf</a>
is another great tool on npm to take a markdown file and quickly convert it to a
PDF. There are a number of other tools and ways to convert markdown. The sooner
you embrace markdown as a web developer, the better!

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">in the markdown guide</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
