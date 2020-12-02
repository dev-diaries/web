---
layout: social-post
type: "SocialPosts"
title: "Javascript: array inclusion check"
image: /assets/images/js-array-check.png
cover-image: /assets/images/javascript-array-check.png
excerpt: "Looking for a quick way to see if an item is an array? Use the..."
date: 2019-03-16
tags: [javascript]
categories: [intermediate, javascript, arrays]
instagram-id: BvEBEhRg3Ou
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
---
{:.center}
# {{ page.title }}

{:.post-content}
Looking for a quick way to see if an item is an array? Use the ES7 introduced 
Array.includes for a boolean return. The other way pre-ES7 is to convert the 
return into a boolean using a bitwise NOT operator which casts the result into 
a boolean. Finally, you can just use the more verbose conditional check for the array test.
Read the docs for Array.includes <a href="{{page.docs}}" target="_blank">here</a>.
Want to read even more? Check out the <a href="https://github.com/tc39/Array.prototype.includes" target="_blank">Array.prototype.includes proposal.</a>

{:.image .center}
![array-check]({{page.image}})

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}





