---
layout: social-post
type: "SocialPosts"
title: "Throttling In Dev Tools To Simulate Slow Connections"
cover-image: /assets/images/throttle-network-connection-cover.png
image: /assets/images/.gif
excerpt: "If you need to test how users who have slow connections experience your website, you can throttle your network connection."
date: 2019-04-30
categories: [advanced, testing, network, dev-tools, chrome-dev-tools, firefox-dev-tools]
instagram-id: 
docs: https://developers.google.com/web/tools/chrome-devtools/network/reference#throttling
---
{:.center}
# {{ page.title }}

{:.post-content}
If you need to test how users who have slow connections experience your website, you can throttle your network connection
using dev tools in Chrome or Firefox. This is useful if you’re testing how your website will be experienced in the wild.

{:.post-content}
This is how to do it in Chrome:

{:.image .center}
![chrome-throttling](/assets/images/chrome-throttling.gif)

{:.post-content}
This is how to do it in Firefox:

{:.image .center}
![chrome-throttling](/assets/images/firefox-throttling.gif)

{:.post-content}
You can also set custom profiles to set the upload, download, and latency settings:

{:.image .center}
![chrome-custom-throttling](/assets/images/custom-chrome-throttling-profile.gif)

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
