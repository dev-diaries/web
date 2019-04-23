---
layout: social-post
type: "SocialPosts"
title: ""
cover-image: /assets/images/unused-css-cover.png
image: /assets/images/unused-css.gif
excerpt: "Using the Chrome Dev tools you can see what CSS isn't used for that page."
date: 2019-04-23
categories: [advanced, css, chrome-dev-tools, optimizations]
instagram-id: 
docs: https://developers.google.com/web/tools/chrome-devtools/css/reference#coverage
---
{:.center}
# {{ page.title }}

{:.post-content}
Using the Chrome Dev Tools you can see what CSS isn't used for that page. 
Unused CSS adds weight to your applications and contributes to the web page size. 
Using Google Chrome you can use the coverage tool to generate an output of the 
CSS files and what CSS declarations are unused. You could then use a tool like 
<a href="https://unused-css.com/" target="_blank">UnusedCSS</a> or <a href="https://github.com/purifycss/purifycss" target="_blank">PurifyCSS </a>
to clean out the unused CSS in your code.

{:.image .center}
![gif]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
