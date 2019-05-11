---
layout: social-post
type: "SocialPosts"
title: "Box Shadows & Animation"
image: /assets/images/box-shadow-animation.gif
excerpt: "Get a smooth animation with a 3D card effect using box shadow using just CSS animations and a pseudo element."
date: 2019-05-11
categories: [advanced, tutorials, css, animations]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
---
{:.center}
# {{ page.title }}

{:.post-content}
Get a smooth animation with a 3D card effect using box shadow using just CSS animations and a pseudo element.
Let's see the final product, hover over the box below to see it:

<div class="box"></div>
<style>
.box {
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: all 0.7s ease-in-out;
}

.box::after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: opacity 0.7s ease-in-out;
}

.box:hover {
  transform: scale(1.2, 1.2);
}

/* Fade in the pseudo-element with the bigger shadow */
.box:hover::after {
  opacity: 1;
}
</style>

{:.post-content}
Ok, let's break that down. We can apply a box shadow using the `box-shadow`
css property with the following settings:

{% highlight css %}
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
{% endhighlight %}

{:.post-content}
So in our case, we first make a `.box` with rounded corners which is achieved
with border-radius: 5px with a box-shadow of 0 offset-x, 1px offset-y,
and 2px blur-radius, with a color of gray or rgba(0,0,0,0.15).

{% highlight css %}
.box {
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: all 0.7s ease-in-out;
}
{% endhighlight %}

{:.post-content}
Next we create a pseudo element that is invisible at the beginning but when 
animated will receive the change. We animate the opacity because that causes
the browser to do the least amount of repaints. A repaint is performed by the browser 
occurs when changes are made to an elements skin that changes visibility, but do not affect its layout. 
You can see which css elements cause the least amount of browser adjustments <a href="https://csstriggers.com/" target="_blank">here</a>
In the pseduo element we increase the box shadow and make it invisible by
giving it an opacity of 0.

{% highlight css %}
.box::after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: opacity 0.7s ease-in-out;
}
{% endhighlight %}

{:.post-content}
Next we need to animate the box on hover, increase the size, and make the pseudo
element by changing the opacity from 0 to 1:

{% highlight css %}
/* On hover, make it bigger*/
.box:hover {
  transform: scale(1.2, 1.2);
}

/* Fade in the pseudo-element with the bigger shadow */
.box:hover::after {
  opacity: 1;
}
{% endhighlight %}

{:.post-content}
Let's see again for good measure 😌.
<div class="box"></div>

{:.post-content}
Check this <a href="{{page.docs}}" target="_blank">box-shadow guide</a> to read more.
This was largely adapted from this <a href="https://tobiasahlin.com/blog/how-to-animate-box-shadow/" target="_blank">guide.</a>
Check out our <a href="https://codepen.io/the_dev_diaries/pen/BezjZv" target="_blank">Codepen</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
