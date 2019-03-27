---
layout: social-post
type: "SocialPosts"
title: "Style broken images"
cover-image: /assets/images/broken-image-cover-1.png
image: /assets/images/style-broken-image-code.png
excerpt: "No one likes broken images on their site, right? With this CSS tip you make a more aesthetically pleasing display if you happen to have a broken image on your website with a few lines of code"
date: 2019-03-27
categories: [intermediate, css]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/::after
---
{:.center}
# {{ page.title }}

{:.post-content}
No one likes broken images on their site, right? With this #CSS tip you make a 
more aesthetically pleasing display if you happen to have a broken image on your website with a few lines of code.
This works because normally since an image is an external resource the :before
and :after pseudo-elements shouldn't work, but when the image is broken, it
is actually not an external resource and the pseudo elements appear. So we can apply
styles to only broken images and not an image that shows up.

{:.image .center}
![broken-image-css]({{page.image}})

{:.image .center}
![broken-image-html](/assets/images/broken-image-cover-2.png)

{:.post-content}
* Read more the ::after selector <a href="{{page.docs}}" target="_blank">here</a>
* Read more about other styling options <a href="https://bitsofco.de/styling-broken-images/" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
