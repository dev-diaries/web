---
layout: social-post
type: "SocialPosts"
title: "Back To The Basics: Anchor Links For Page Linking"
cover-image: /assets/images/anchor-link-cover.png
image: /assets/images/.gif
excerpt: "One usage of anchor links in HTML can allow a user to jump to a specific part of the page. This could be used for a table of contents, or an arrow that a user can click on to scroll them to a certain section of your webpage."
date: 2019-06-18
tags: [html]
categories: [beginner, html, back-to-the-basics]
instagram-id: By3Hp8uAgsg
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
---
{:.center}
# {{ page.title }}

{:.post-content}
One usage of anchor links in HTML can allow a user to jump to a specific part 
of the page. This could be used for a table of contents, or an arrow that a 
user can click on to scroll them to a certain section of your webpage.

{:.post-content}
If you create a HTML element with an id, you can then reference that ID
with an anchor link and clicking on link will direct the user to the element:

{% highlight html %}
<!-- 
    We are creating a table of contents with anchor links  
    that reference ID's. We use a hash (#) which specifies an internal
    target location
-->
<a href="#my-section">My Great Section Link</a>
<a href="#my-section-2">My Second Great Section Link</a>

<!-- 
    When clicking on the anchor link it will take the user to the 
    specified element with that ID
-->
<div id="my-section">My Great Section</div>
<div id="my-section-2">My Second Great Section</div>
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
