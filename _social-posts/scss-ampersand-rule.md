---
layout: social-post
type: "SocialPosts"
title: "SCSS: ampersand rules"
image: /assets/images/ampersand-code.png
cover-image: /assets/images/ampersand-cover.png
excerpt: "Using the & after a declaration you can set a css rule to apply given that the selector that has the & after actually applies when it is the parent of the element it is nested under 🤔..."
date: 2019-03-17
categories: [intermediate, scss, css, frontend]
instagram-id: 
docs: https://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-script
---
{:.center}
# {{ page.title }}

{:.post-content}
Using the & after a declaration you can set a css rule to apply given that the 
selector that has the & after actually applies when it is the parent of the element it is nested under. 🤔?
So basically, you read the rule inside out. So in the first example you read if 
.parent-in-this-case & is the parent of .some-class, then apply this rule. 

{:.post-content}
Why would you do this? One example is to affect a style for only ie-9 for 
example and if you apply a class when a browser is ie-9 or below you can set 
specific styles within a block that only apply when ie-9 is the parent class on the html tag.
Check the docs <a href="{{page.docs}}" target="_blank">here</a>.
The & in css offers a lot of power, but can also be a bit confusing so be mindful
of your usage!

{:.image .center}
![&-example]({{page.image}})

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}






