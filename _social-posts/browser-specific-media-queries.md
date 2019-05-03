---
layout: social-post
type: "SocialPosts"
title: "Browser Specific Media Queries"
cover-image: /assets/images/browser-css-queries-cover.png
image: /assets/images/.gif
excerpt: "Firefox or IE behaving oddly? You can target specific browsers via explicit media queries for different broswers."
date: 2019-05-03
categories: [advanced, css, media-queries, firefox, internet-explorer]
instagram-id: 
docs: http://browserhacks.com/
---
{:.center}
# {{ page.title }}

{:.post-content}
Firefox or IE behaving oddly? You can target specific browsers via explicit media queries for different broswers:

{% highlight css %}
@media all and (min--moz-device-pixel-ratio) {
  // target firefox
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { 
  // target internet explorer only (11)
}

@supports (-ms-ime-align: auto) {
  // target microsoft edge
}
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
