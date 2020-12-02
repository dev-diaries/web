---
layout: social-post
type: "SocialPosts"
title: "Javascript Cloning"
image: /assets/images/html-autofocus.gif
cover-image: /assets/images/shallow-clone-cover.png
excerpt: "Cloning in javascript can mean either a deep clone or a shallow clone of an object."
date: 2019-03-22
tags: [javascript]
categories: [advanced, javascript]
instagram-id: BvUaA8tnJOG
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
---
{:.center}
# {{ page.title }}

{:.post-content}
Cloning in javascript can mean either a deep clone or a shallow clone of an object.
Cloning an object means just that, we create an exact copy that does not refer
back to the original object at all. A shallow clone means that the top level
properties are copied, and any nested object is shared from the original object.
Said another one, if you shallow clone Mary and Mary has a child named Peter
(we’re considering peter a nested object here), Peter will not be fully copied
but rather we’re just going to refer to Peter by setting his location in the copy,
so there will just be 3 people.

{:.image .center}
![shallow clone]( /assets/images/shallow-clone.png)

{:.post-content}
However, a deep clone means that we duplicate every
single object including nested objects. This means that if we deep clone Mary, we’re
going to make a clone of Mary AND also a clone of Peter as well, aka there will be 4 people now.

{:.image .center}
![deep clone]( /assets/images/deep-clone.png)

{:.post-content}
Read our post about the [spread syntax](/social-posts/passing-arguments-using-spread).

{:.post-content}
* <a href="https://lodash.com/docs/4.17.11#cloneDeep" target="_blank">Lodash deep clone docs</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread syntax Mozilla docs</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from Mozilla docs</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}




