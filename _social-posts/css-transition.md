---
layout: social-post
type: "SocialPosts"
title: "CSS Transitions"
cover-image: /assets/images/css-transition-cover.png
image: /assets/images/.gif
excerpt: "CSS transitions allow you change a property value over a given duration."
date: 2019-10-27
tags: [css]
categories: [intermediate, css, transition, animation]
instagram-id: B4IQ1_kFTl-
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
---
{:.center}
# {{ page.title }}

{:.post-content}
CSS transitions allow you change a property value over a given duration. This
can create a nice effect of changing something in CSS over a slower period of
time instead of immediately. This can help make your webpage feel alive and can
make it a bit more interesting to interact with

{:.post-content}
With a CSS transition you can chose
1) Which property to animate
2) When it will start
3) How long it will last
4) How long the animation will run for

{:.post-content}
Not all CSS properties can be animated. Check the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank">full list</a>
to know which properties you can make come alive.

{:.post-content}
There is a [shorthand css](/social-posts/css-shorthand-properties/) transition property
which is written as:

{% highlight css %}
.my-element {
  transition: transition: <property> <duration> <timing-function> <delay>;
}
{% endhighlight %}

{:.post-content}
The long form versions are:

{:.post-content}
- transition-property: name of the css property to which the transition will apply
- transition-duration: how long the transition will occur, e.g. 0.5s or 1s
- transition-timing-function: specifies the speed over time an object is transitioned
from one value to another. Some examples are linear, ease, ease-in, ease-out
- transition-delay: how long the wait between the time a property is changed
and when the transition begins


{:.post-content}
A simple transition can be seen with a color change on hover. Hover over the
rectangle to see:

{% highlight css %}
.rectangle {
  height: 20rem;
  width: 30rem;
  color: white;
  background-color: blue;
  transition: all 0.3s ease;
}

.rectangle:hover {
  background-color: purple;
}
{% endhighlight %}


<style>
.rectangle {
  height: 20rem;
  width: 30rem;
  color: white;
  background-color: blue;
  transition: all 0.3s ease;
}

.rectangle:hover {
  background-color: purple;
}
</style>
<div class="rectangle">Hover me!</div>

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
