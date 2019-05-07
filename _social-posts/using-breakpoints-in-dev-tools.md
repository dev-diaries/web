---
layout: social-post
type: "SocialPosts"
title: "Using Breakpoints In Dev Tools"
cover-image: /assets/images/breakpoints-cover.png
image: /assets/images/.gif
excerpt: "Using breakpoints in the GoogleChrome or Firefox devtools is one of the best ways to debug applications in javascript."
date: 2019-05-07
categories: [advanced, javascript, dev-tools, chrome-dev-tools, firefox-dev-tools, debugging]
instagram-id: 
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
Using breakpoints in the GoogleChrome or Firefox devtools is one of the best ways to debug applications in javascript.
A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution. 
Breakpoints can give you deeper insight into objects, and allow you to have deeper insight into a 
bug because you can examine current variables, execute commands in the console and whatever 
else you want to do to debug your application. How do we set breakpoints in dev tools?

{:.post-content}
Check this Firefox Gif to see it in action:

{:.image .center}
![firefox-gif](/assets/images/firefox-breakpoints.gif)

{:.post-content}
Check this Chrome Gif to see it in action:

{:.image .center}
![chrome-gif](/assets/images/chrome-breakpoints.gif)

{:.post-content}
As seen we can set a line for the code breakpoint and see the objects before
the breakpoint. We can also watch certain variables using the "Watch" area
which is very useful to track variables.

{:.post-content}
See the <a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint" target="_blank">Firefox Docs for breakpoints</a>
and see the <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints" target="_blank">Chrome Docs for breakpoints</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
