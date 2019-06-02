---
layout: social-post
type: "SocialPosts"
title: "Using CSS Variables"
cover-image: /assets/images/custom-variables-cover.png
image: /assets/images/.gif
excerpt: "CSS variables also known as custom properties recently received broader browser support to a point where they can be used without much thought (except in IE 11 👎)"
date: 2019-06-02
categories: [advanced, css, variables]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
---
{:.center}
# {{ page.title }}

{:.post-content}
CSS variables also known as custom properties recently received broader browser support to a point where they can be used without much thought (except in IE 11 👎)
Let's take a look at some usage. First we'll want to declare a css variable
in a pseudo `:root` class so that is available throughout the CSS document:

{% highlight css %}
:root {
    --base-color: blue;
}

h1 {
    color: var(--base-color);
}
{% endhighlight %}

{:.post-content}
CSS custom properties also inherit from a parent:

{% highlight html %}
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
{% endhighlight %}

{% highlight css %}
:root {
    --padding: 10px;
}

.one {
    padding: var(--padding);
}
.two {
    --padding: 20px;
    padding: var(--padding);
}

.three {
    --padding: 30px;
    padding: var(--padding);
}

.four {
    padding: var(--padding);
}
{% endhighlight %}

{:.post-content}
In the above example the div one will have padding of 10px, two will have 20 px, three
will have 30 px, and four will inherit from it's parent who is two which has a padding
of 20px specified. Check our <a href="https://codepen.io/the_dev_diaries/pen/dEaozK" target="_blank">codepen</a>
to see it in action.

{:.post-content}
Some additional things to note: <br>
1) CSS custom properties are case sensitive:
{% highlight css %}
:root {
 --color: blue;
 --COLOR: red;
}
{% endhighlight %}

{:.post-content}
will be two different variables!

{:.post-content}
2) You can provide a fallback value in case that variable is not defined:
{% highlight css %}
width: var(--custom-width, 33%);
{% endhighlight %}

{:.post-content}
3) CSS custom properties can be made conditional based on media queries:
{% highlight css %}
:root {
	--padding: 15px 
}

@media screen and (min-width: 750px) {
	--padding: 30px
}
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>.
Check the <a href="https://www.caniuse.com/#feat=css-variables" target="_blank">Can I Use report</a> to see details on browser support.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
