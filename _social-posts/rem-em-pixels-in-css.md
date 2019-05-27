---
layout: social-post
type: "SocialPosts"
title: "Using rem or em or pixels"
image: /assets/images/rem-em-pixel-cover.png
excerpt: "Unsure what unit to use when specifying a size measurement in CSS?"
date: 2019-05-26
categories: [intermediate, css]
instagram-id: Bx7EDZbiiji
docs: https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
---
{:.center}
# {{ page.title }}

{:.post-content}
Rem bases its size upon the root html element. This is advantageous for ends users because in most browsers a user can set their default browser font-size. If the user sets their default size to 24px, for example, all font-sizes should scale accordingly.

{:.image .center}
![overview]({{page.image}})

{:.post-content}
Curious why em's are preferred to pixels? If a user changes their browser's
default font size pixels won't be reactive to this change and this could throw
off the webpages widths.

{:.post-content}
Here is a quick video showing the result when using em vs pixel based media
queries to determine the size of an element:

{:.image .center}
![video](/assets/images/browser-width.gif)

{:.post-content}
If the user changes their browser font-size the media query should change along with
it to maintain perspective. Pixels do not make this adjustment.

{:.post-content}
Check out this <a href="https://codepen.io/nwalton3/pen/xvnHy/" target="_blank">codepen</a>
to see the code behind it.

{:.post-content}
Read more about the reasoning behind it <a href="{{page.docs}}" target="_blank">here</a>
This <a href="https://stackoverflow.com/questions/22228568/switching-to-em-based-media-queries" target="_blank">Stackoverflow</a>
answer has some nice info as well.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
