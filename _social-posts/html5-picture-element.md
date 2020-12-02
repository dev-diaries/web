---
layout: social-post
type: "SocialPosts"
title: "Picture Element In HTML"
cover-image: /assets/images/picture-element-cover.png
image: /assets/images/.gif
excerpt: "The HTML picture element can come in handy if you want fine grained control over the art direction or to offer different image formats when maybe certain formats are not supported by all browsers."
date: 2019-08-01
tags: [html]
categories: [intermediate, html, pictures, images]
instagram-id: B0oXOXqnAyF
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
---
{:.center}
# {{ page.title }}

{:.post-content}
The HTML picture element can come in handy if you want fine grained control
over the art direction or to offer different image formats when maybe certain
formats are not supported by all browsers.

{% highlight html %}
  <picture>
    <source srcset="small.jpg, small2x.jpg 2x"
            media="(max-width: 639px)">
    <source srcset="medium.jpg, medium2x.jpg 2x"
            media="(min-width: 640px) and (max-width: 1023px)">
    <source srcset="large.jpg, large2x.jpg 2x"
            media="(min-width: 1024px)">
    <img src="my-image.jpg" alt="My image"
         srcset="my-image2x.jpg 2x">
  </picture>
{% endhighlight %}

{:.post-content}
If you're looking to handle responsive images you probably want to use
[srcset](/social-posts/responsive-images-with-src-set/). Read more about
why <a href="https://cloudfour.com/thinks/dont-use-picture-most-of-the-time/" target="_blank">here</a>.


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
