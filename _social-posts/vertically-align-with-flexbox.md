---
layout: social-post
type: "SocialPosts"
title: "Vertically Align With Flexbox"
cover-image: /assets/images/vertically-align-cover.png
image: /assets/images/.gif
excerpt: "Using flexbox allows you to make flexible responsive layouts without floats or positioning..."
date: 2019-09-13
categories: [intermediate, css, flexbox, alignment]
instagram-id: B2YoJHBAQI9
docs: https://webdevblog.com/css-vertical-align/
---
{:.center}
# {{ page.title }}

{:.post-content}
Using flexbox allows you to make flexible responsive layouts without floats or
positioning. Note that Flexbox isn’t supported by IE9 or earlier.

{% highlight html %}
<div class="align-vertically">
  Vertically centered
</div>
{% endhighlight %}

{:.post-content}
The corresponding CSS:

{% highlight css %}
.align-vertically {
  background: #13b5ea;
  color: #fff;
  display: flex;
  align-items: center;
  height: 200px;
}
{% endhighlight %}


{:.post-content}
Read more about align-items on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank">Mozilla</a>.
Read more about using flexbox with vertically align items <a href="{{page.docs}}" target="_blank">here</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
