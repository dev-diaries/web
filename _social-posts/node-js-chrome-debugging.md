---
layout: social-post
type: "SocialPosts"
title: "Node.js debugging with Google Chrome"
cover-image: /assets/images/node-inspect.png
image: /assets/images/node-debugging.png
excerpt: "In node.js and Google Chrome you can debug applications directly from the dev tools."
date: 2019-04-01
categories: [intermediate, node.js, javascript, debugging, chrome]
instagram-id: 
docs: https://nodejs.org/en/docs/guides/debugging-getting-started/
---
{:.center}
# {{ page.title }}

{:.post-content}
In node.js and Google Chrome you can debug applications directly from the dev tools.

{% highlight javascript %}
node --inspect app.js
{% endhighlight %}

{:.post-content}
After running this, you'll something like this in your terminal:

{% highlight javascript %}
Debugger listening on ws://127.0.0.1:9229/cd59fbe7-7c0d-4d77-8ffa-6e3d77576bb2
For help see https://nodejs.org/en/docs/inspector
Debugger attached.
{% endhighlight %}

{:.post-content}
Now navigation to about:inspect in Chrome and that will redirect you to chrome://inspect
and you'll see a list of devices and a remote target.

{:.image .center}
![node]({{page.image}})

{:.post-content}
Click on inspect and that will take you to the dev tools which will allow you
to create breakpoints, see source maps, console evaluation, heap snapshot inspect,
and async stacks for promises. 

{:.post-content}
If you're using <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
(one of our favorites) you can use <a href="https://github.com/TypeStrong/ts-node" target="_blank">ts-node</a>
to be able to inspect your typescript applications. You would use it so:

{% highlight javascript %}
node --inspect --require ts-node/register app.ts
{% endhighlight %}

{:.post-content}
In your file sources, you'll now see the typescript file and the compiled javascript file.
Edit the typescript file to see any changes, as usual.

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
