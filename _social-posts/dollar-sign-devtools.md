---
layout: social-post
type: "SocialPosts"
title: "Dollar Sign In Devtools"
cover-image: /assets/images/dollar-sign-devtools-cover.png
image: /assets/images/dollar-sign-debugging.gif
excerpt: "The dollar sign in the devtools can come in handy as a debugging tool."
date: 2019-04-08
categories: [intermediate, debugging, chrome-dev-tools, dev-tools]
instagram-id: BwAZenqBF92
docs: https://developers.google.com/web/tools/chrome-devtools/console/utilities
---
{:.center}
# {{ page.title }}

{:.post-content}
These handy shortcuts can save you some time

{:.post-content}

* &#36;&#95; returns the most recently evaluated expression
* &#36;0 - &#36;4 return the most recently stored DOM element inspect in the Elements panel. &#36;0 returns the most recent, &#36;1 returns the second most recent, etc.

{% highlight javascript %}
> 10 * 10
100

> $_
100

> { "first": "foo", "middle": "bar", "last": "baz" }
{first: "foo", middle: "bar", last: "baz"}

> keys($_)
(3) ["first", "middle", "last"]
{% endhighlight %}

{:.image .center}
![]({{page.image}})


{:.post-content}
Check the docs <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
