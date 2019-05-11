---
layout: social-post
type: "SocialPosts"
title: "Use a Placeholder Background Color for a Background Image"
cover-image: /assets/images/background-color-cover.png
image: /assets/images/image-loading.gif
excerpt: "Using CSS you can protect against slow loading background images especially if you have text on top of the image."
date: 2019-04-26
categories: [intermediate, css, usability, images]
instagram-id: BwuDshoh3VI
docs: https://css-tricks.com/css-basics-using-fallback-colors/
---
{:.center}
# {{ page.title }}

{:.post-content}
Using CSS you can protect against slow loading background images especially if 
you have text on top of the image. If the image hasn’t load and you have white 
text over it for instance the user wouldn’t be able to read the text until it loads. 
Using a background color fallback the text will always be visible.

{% highlight html %}
<section>
    This image is amazing!
</section>
{% endhighlight %}

{% highlight css %}
section {
    background-color: darkgreen;
    background-image: url(/assets/images/dark-bg-image.jpg);
    background-size: cover;
    height: 500px;
    color: white;
}
{% endhighlight %}

{:.post-content}
<section>
    <span class="text">
        This image is amazing!
    </span>
</section>

<style>
section {
    background-color: darkgreen;
    background-image: url(/assets/images/dark-bg-image.jpg);
    background-size: cover;
    height: 500px;
    color: white;
}

.text {
    top: 440px;
    position: relative;
}
</style>

{:.post-content}
See this gif to see how the green background is in place to allow us to see the 
text while the background starry image loads in. We used darkgreen in this case
to better illustrate this example, but it is better practice to use a color
that is more similar to the background image, something like #1F323C would
be a better match.

{:.image .center}
![image-loading]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{:.post-content}
In addition to this strategy it might be avisable to use a progressive jpeg.
We write about it [here](social-posts/progressive-jpeg-images/)

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
