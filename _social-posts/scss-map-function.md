---
layout: social-post
type: "SocialPosts"
title: "SCSS Map Function"
cover-image: /assets/images/scss-map-get.png
image: /assets/images/.gif
excerpt: "Using SCSS you can specify a a set of values in a map for easier access. Declare your map as a variable and reference it with the map-get SCSS function."
date: 2020-10-19
tags: [css]
categories: [beginner, scss, frontend]
instagram-id:
docs: https://sass-lang.com/documentation/modules/map
---
{:.center}
# {{ page.title }}

{:.post-content}
Using [#SCSS](/tags/scss) you can specify a a set of values in a map for
easier access. Declare your map as a variable and reference it with the map-get SCSS function.

{% highlight scss %}
$colors: (
  "green": #008000,
  "red": #FF4136,
  "blue": #0074D9,
);
{% endhighlight %}

{:.post-content}
Reference that variable with the <a href="https://sass-lang.com/documentation/modules/map" target="_blank">map-get</a> function.

{% highlight scss %}
.bg-lg {
  background-color: map-get($colors, "green");
}
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
