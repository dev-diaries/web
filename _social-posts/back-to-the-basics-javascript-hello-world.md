---
layout: social-post
type: "SocialPosts"
title: "Back To The Basics: JavaScript On A Webpage"
cover-image: /assets/images/js-hello-world-cover.png
image: /assets/images/.gif
excerpt: "JavaScript on your webpage adds a whole world of interactiveness, flexibility, and potential. As a web developer knowing some javascript will make you a stronger developer and allow you to make single page applications, mac or windows applications, and server applications as well."
date: 2019-06-30
tags: [javascript]
categories: [beginner, javascript, back-to-the-basics]
instagram-id: BzWQ-HDiDRh
docs: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
---
{:.center}
# {{ page.title }}

{:.post-content}
Javascript on your webpage adds a whole world of interactiveness, flexibility, 
and potential. As a web developer knowing some javascript will make you a stronger 
developer and allow you to make single page applications, mac or windows 
applications, and server applications as well. As they say, “anything that can be 
written in JavaScript, will eventually be written in JavaScript”. Let’s start 
from the top and include a javascript script and add in some javascript to a webpage.

{:.post-content}
First in our index.html, let's include a reference to a javascript file:

{% highlight html %}
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My Javascript Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1></h1>
        <script src="scripts/app.js"></script>
    </body>
</html>
{% endhighlight %}

{:.post-content}
We add the reference to our javascript file which is called app.js and is in the 
directory (folder) called scripts. We put the javascript near the bottom of the body
so that the HTML will load first and then the javascript since we want the javascript
to interact with the HTML.

{:.post-content}
Now let's create a folder called scripts and make a file called app.js. We'll then
make our javascript file, find our empty h1 tag, and insert some content into it:

{% highlight js %}
const heading = document.querySelector('h1');
heading.textContent = 'Hello world!';
{% endhighlight %}

{:.post-content}
If we open our webpage, our h1 will be changed very quickly (basically imperceptibly)
from being blank to saying "Hello world".


{:.post-content}
Getting started with javascript? Read more about js <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
