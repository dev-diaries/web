---
layout: social-post
type: "SocialPosts"
title: "Using rem or em or pixels"
image: /assets/images/rem-em-pixel-cover.png
excerpt: "Unsure what unit to use when specifying a size measurement in CSS?"
date: 2019-05-26
categories: [intermediate, css]
instagram-id: 
docs: https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
---
{:.center}
# {{ page.title }}

{:.post-content}
Rem bases its size upon the root html element. This is advantageous for ends users because in most browsers a user can set their default browser font-size. If the user sets their default size to 24px, for example, all font-sizes should scale accordingly.

{:.image .center}
![overview]({{page.image}})

{:.post-content}
Check out our <a href="https://codepen.io/the_dev_diaries/pen/BMOWoM" target="_blank">codepen</a>.

{:.post-content}
Read more about the reasoning behind it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
