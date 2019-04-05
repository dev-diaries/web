---
layout: social-post
type: "SocialPosts"
title: "Using Console.trace In Javascript"
cover-image: /assets/images/console-trace-cover.png
image: /assets/images/console-trace-code.png
excerpt: "Output the stack trace in #javascript using the console.trace method."
date: 2019-04-05
categories: [intermediate, javascript, debugging]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces
---
{:.center}
# {{ page.title }}

{:.post-content}
Output the stack trace in javascript using the console.trace method. 
This can be lifesaver of a debugging tool to output the call path taken to 
reach the point at which you called the console.trace method. Add this to your 
javascript debugging tool belt! 

{:.image .center}
![console.trace]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>. Other stack trace debugging tips via <a href="https://alligator.io/js/stack-trace/" target="_blank">alligator.io</a>

{:.post-content}
Additionally some robust logging libraries we recommend are:
* <a href="https://github.com/loggly/node-loggly-bulk" target="_blank">Node-Loggly</a>
* <a href="https://github.com/trentm/node-bunyan" target="_blank">Bunyan</a>
* <a href="https://github.com/winstonjs/winston" target="_blank">Winston</a>
* <a href="https://www.npmjs.com/package/morgan" target="_blank">Morgan</a>

{:.post-content}
Read more about each in the <a href="https://www.loggly.com/blog/node-js-libraries-make-sophisticated-logging-simpler/" target="_blank">loggly blog post</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
