---
layout: social-post
type: "SocialPosts"
title: "CSS Filters For Nice Effects"
cover-image: /assets/images/filter-cover.png
image: /assets/images/dog-pic-original.jpg
excerpt: "Using css filters can add some nice image effects without using Sketch or Photoshop."
date: 2019-05-19
categories: [advanced, css, images]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
---
{:.center}
# {{ page.title }}

{:.post-content}
Using css filters can add some nice image effects without using Sketch or Photoshop.
You can use several filter types and can even combine them for different
effects:

{% highlight css %}
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);
{% endhighlight %}

{:.post-content}
Here is the original image:

{:.image .center}
![sepia]({{page.image}})

{:.post-content}
Let's apply this filter:

{% highlight css %}
.sepia {
    filter: sepia(90%);
}
{% endhighlight %}
<style>
.sepia {
    filter: sepia(90%);
}
</style>

{:.image .center .sepia}
![sepia]({{page.image}})

{:.post-content}
Let's get a bit more creative:

{% highlight css %}
.blur-sat-cont {
    filter: contrast(170%) saturate(80%) blur(1px);
}
{% endhighlight %}
<style>
.blur-sat-cont {
    filter: contrast(170%) saturate(80%) blur(1px);
}
</style>

{:.image .center .blur-sat-cont}
![sepia]({{page.image}})

{:.post-content}
Finally, let's check out the hue-rotate:

{% highlight css %}
.hue-rotate {
    filter: hue-rotate(-40deg);
}
{% endhighlight %}
<style>
.hue-rotate {
    filter: hue-rotate(-40deg);
}
</style>

{:.image .center .hue-rotate}
![sepia]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
