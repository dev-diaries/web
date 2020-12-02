---
layout: social-post
type: "SocialPosts"
title: "Back To The Basics: CSS Specificity"
cover-image: /assets/images/css-specificity-cover.png
image: /assets/images/.gif
excerpt: "CSS specificity is a big top in web development but having a good foundational understanding is essential to writing clean and well organized CSS."
date: 2019-07-27
tags: [css]
categories: [beginner, html, javascript, css, back-to-the-basics]
instagram-id: B0a0CcVCY4R
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
---
{:.center}
# {{ page.title }}

{:.post-content}
CSS specificity is a big top in web development but having a good foundational understanding is essential to writing clean and well organized CSS.

{:.post-content}
All things being equal i.e. if you have the same rule in your style sheet twice then the latest rule is the one that will be enforced.

{% highlight css %}
.content h1 {
  padding: 5px;
  color: green;
}

# this will take precendence
.content h1 {
  padding: 10px;
  color: blue;
}
{% endhighlight %}

{:.post-content}
The more elements you include in a declaration if they are equal will take precedence

{% highlight css %}
# more specific so will take precedence
body div div h1 p {
  color: purple
}

div h1 p {
  color: gray;
}
{% endhighlight %}

{:.post-content}
 In terms of specificity the order is style attribute, id (#), class (.) or pseudo-class or attribute, then element

{% highlight css %}
<div class="other-class" style="color: green">
  Foo
</div>
<style>
.other-class {
  color: purple;
}

div {
  color: yellow;
}
</style>
{% endhighlight %}

{:.post-content}
Check out <a href="https://codepen.io/the_dev_diaries/pen/WVoZXY" target="_blank">codepen</a>
for the above




{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
