---
layout: social-post
type: "SocialPosts"
title: "Keyframes Animation Sequence Rule"
cover-image: /assets/images/keyframes-cover.png
image: /assets/images/.gif
excerpt: "Using the @keyframes CSS rule you can specify the steps in a CSS animation sequence by defining styles and how the element should render at a given time during the sequence."
date: 2019-06-20
tags: [css]
categories: [advanced, css, animations]
instagram-id: By8PNPvCh7H
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
---
{:.center}
# {{ page.title }}

{:.post-content}
Using the @keyframes CSS rule you can specify the steps in a CSS animation sequence by defining styles and how the element should render at a given time during the sequence.
This is extremely powerful and allows you to define your own animations and make for some really cool effects. 
Let's jump right in!

{:.post-content}
A keyframe definition needs a few things:

{:.post-content}
1) A Name - to describe the animation, example "bounceOut"

{:.post-content}
2) Stages of the animation - specified as from (0%) and to (100%) or in percentages at the stages
of the animation. You can get very granular and describe and various percentages
what the CSS properties should be for the animation. For example:

{% highlight css %}
@keyframes slideAcross {
    from {
        top: 0em;
    }
    to {
        top: 100em;
    }
}

// or define it in percentages, these two things are equivalent
@keyframes mySweetAnimation {
    0% {
        top: 0em;
    }
    100% {
        top: 100em;
    }
}
{% endhighlight %}

{:.post-content}
3) CSS properties - the properties that you want the animation to take on at the defined stage

{:.post-content}
Let's make a simple custom animation using keyframes:

{% highlight css %}
@keyframes slideAcross {
    from {
        left: 0em;
    }
    to {
        right: 10em;
    }
}
.movable {
    position: absolute;
    animation: slideAcross 3s infinite;
}
.container {
    position: relative;
}
{% endhighlight %}

{:.post-content}
And our HTML to correspond:

{% highlight html %}
<div class="container">
    <div class="movable">Electric Slide</div>
</div>
{% endhighlight %}

<style>
@keyframes slideAcross {
    from {
        left: 0em;
    }
    to {
        right: 10em;
    }
}
.movable {
    position: absolute;
    animation: slideAcross 3s infinite;
}
.container {
    padding: 5em 0;
    position: relative;
}
</style>

<div class="container">
    <div class="movable">Electric Slide</div>
</div>

{:.post-content}
Let's make something a bit more complicated:

{% highlight html %}
<div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>
{% endhighlight %}

{% highlight css %}
.loader {
  position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: black;
  border-right-color: black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
{% endhighlight %}

<div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>

<style>
.loader {
  position: relative;
  padding: 5em 0;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: black;
  border-right-color: black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em !important;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em !important;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em !important;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

{:.post-content}
Above example, taken from <a href="https://cssfx.dev/" target="_blank">cssfx.dev</a>.
Read more about <a href="{{page.docs}}" target="_blank">keyframes</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
