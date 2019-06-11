---
layout: social-post
type: "SocialPosts"
title: "Understanding Viewport Units"
cover-image: /assets/images/vw-cover.png
image: /assets/images/.gif
excerpt: "Viewport units are very useful to base the measurement unit upon the user's browser viewport."
date: 2019-06-11
categories: [beginner, css, viewport]
instagram-id: 
docs: https://css-tricks.com/fun-viewport-units/
---
{:.center}
# {{ page.title }}

{:.post-content}
There are a few units that work like px or em but are based upon a percentage
of the current browser viewport. The main difference between a viewport measurement
and a percentage measurement is that a viewport measurement will always resolve to the browser width
while a regular percentage measurement will resolve to the containing element.

{:.post-content}
Viewport Width (vw) – A percentage of the full viewport width. 
10vw will resolve to 10% of the current viewport width, or 48px on a phone 
that is 480px wide. 

{:.post-content}
Viewport Height (vh) – A percentage of the full viewport height. 
10vh will resolve to 10% of the current viewport height.

{:.post-content}
Viewport Minimum (vmin) – A percentage of the viewport width or height, 
whichever is smaller. 10vmin will resolve to 10% of the current viewport width 
in portrait orientations, and 10% of the viewport height on landscape orientations.

{:.post-content}
Viewport Maximum (vmax) – A percentage of the viewport width or height, whichever 
is larger. 10vmax will resolve to 10% of the current viewport height in portrait 
orientations, and 10% of the viewport width on landscape orientation.

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
