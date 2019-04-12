---
layout: social-post
type: "SocialPosts"
title: "CSS Symbol Selectors"
cover-image: /assets/images/css-symbols-cover.png
image: /assets/images/.gif
excerpt: "CSS has some selector symbols that can allow you to target elements in a generalized way."
date: 2019-04-11
categories: [intermediate, css, symbols]
instagram-id: BwH-PR3hIPk
docs: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
---
{:.center}
# {{ page.title }}

{:.post-content}
CSS has some selector symbols that can allow you to target elements in a generalized way.
Familiarity with these selector symbols can reduce bloat in your CSS and allow 
you to move quicker when making styles for your website. 

{:.image .center}
![css-cover-1](/assets/images/css-symbols-cover.png)

## * Selector

{:.post-content}
The * symbol select all elements.

{% highlight css %}
.all-example * {
    color: blue;
}
{% endhighlight %}

{% highlight html %}
<div class="all-example">
    <span>this is a span</span>
    <p>this is a p</p>
    <div>this is a div</div>
</div>
{% endhighlight %}

{:.post-content .all-example}
Will give us this:

<style>
.all-example * {
    color: blue;
}
</style>
<div class="all-example">
    <span>&lt;span&gt;this is a span&lt;/span&gt;</span>
    <p>&lt;p&gt;this is a p&lt;/p&gt;</p>
    <div>&lt;div&gt;this is a div&lt;/div&gt;</div>
</div>

<br>
## ~ Selector

{:.post-content}
The ~ symbol selects all elements that are preceded by the former selector. This also means
that the element doesn't have to come directly after, it can be one after or three after, etc, 
but it won't affect children of the former selector.

{% highlight css %}
li.foo ~ p {
    border: orange;
}
{% endhighlight %}

{% highlight html %}
<ul>
    <p>not preceded by an li</p>
    <li class="foo">
        foo li
        <p>child of a li foo, but not preceded by</p>
    </li>
    <p>preceded by an li</p>
    <p>preceded by an li but is 2 after</p>
    <span>Not a p tag</span>
    <p>A p tag and gets the rule because it has an li before it at some point</p>
    <div>
        <p>isn't preceded by an li, but rather is a child of a div</p>
    </div>
</ul>
<ul>
    <li>doesn't have a class foo</li>
    <p>won't get the rule</p>
</ul>
{% endhighlight %}

{:.post-content .all-example}
Will give us this:

<style>
li.foo ~ p {
    color: orange;
}
</style>
<div class="no-style">
<ul>&lt;ul&gt;
    <p>&lt;p&gt;not preceded by an li&lt;/p&gt;</p>
    <li class="foo">&lt;li class="foo"&gt;<br>
        foo li
        <p>&lt;p&gt;child of a li foo, but not preceded by&lt;/p&gt;</p>
    </li>&lt;/li&gt;
    <p>&lt;p&gt;preceded by an li&lt;/p&gt;</p>
    <p>&lt;p&gt;preceded by an li but is 2 after&lt;/p&gt;</p>
    <span>&lt;span&gt;Not a p tag&lt;/span&gt;</span>
    <p>&lt;p&gt;A p tag and gets the rule because it has an li before it at some point&lt;/p&gt;</p>
    <div>&lt;div&gt;
        <p>&lt;p&gt;isn't preceded by an li, but rather is a child of a div&lt;/p&gt;</p>
    </div>&lt;/div&gt;
</ul>&lt;/ul&gt;

<ul>&lt;ul&gt;
    <li>&lt;li&gt;doesn't have a class foo&lt;/li&gt;</li>
    <p>&lt;p&gt;won't get the rule&lt;/p&gt;</p>
</ul>&lt;/ul&gt;
</div>

<br>
## > Selector

{:.post-content}
The > symbol targets elements which are a direct child of an element.

{% highlight css %}
div.greater > ul {
    color: red;
}
{% endhighlight %}

{% highlight html %}
<div class="greater">
    <ul>direct child of the div</ul>
    <ul>still a direct child</ul>
</div>
<ul>not a direct child</ul>
{% endhighlight %}

{:.post-content .all-example}
Will give us this:

<style>
div.greater > ul {
    color: red;
}
</style>
<div class="greater">
    <ul>direct child of the div</ul>
    <ul>still a direct child</ul>
</div>
<ul>not a direct child</ul>

<br>

{:.image .center}
![css-cover-1](/assets/images/css-symbols-cover-2.png)

## + Selector

{:.post-content}
The + symbol specifies that the element after the plus sign must come immediately after the element before the plus sign.
{% highlight css %}
div.add + span {
    border: 1px solid green;
}
{% endhighlight %}

{% highlight html %}
<div class="add">div</div>
<p>comes right after so gets the rule</p>
<p>comes after but NOT right after so no rule</p>
{% endhighlight %}

<style>
div.add + p {
    border: 1px solid green;
}
</style>
<div class="add">div</div>
<p>comes right after so gets the rule</p>
<p>comes after but NOT right after so no rule</p>

<br>
## [title~=color] Selector

{:.post-content}
This selects all elements with a title attribute containing exactly the word color.

{% highlight css %}
[title~=color] {
    border: 1px solid blue;
}
{% endhighlight %}

{% highlight html %}
<div title="color">has a title of color</div>
<div title="some-color">does not exactly have a title of color</div>
{% endhighlight %}
<style>
[title~=color] {
    border: 1px solid blue;
}
</style>
<div title="color">has a title of color</div>
<div title="some-color">does not exactly have a title of color</div>

<br>
## a[href^="https"] Selector

{:.post-content}
This selects every &lt;a&gt; whose href attribute begins with "https"

{% highlight css %}
a.secure[href^="https"] {
    border: 1px solid red;
}
{% endhighlight %}

{% highlight html %}
<a class="secure" href="https://dev-diaries.com" target="_blank">begins with https</a>
<a class="secure" href="http://dev-diaries.com" target="_blank">DOES NOT begin with https</a>
{% endhighlight %}
<style>
a.secure[href^="https"] {
    border: 1px solid red;
}
</style>
<a class="secure" href="https://dev-diaries.com" target="_blank">https://dev-diaries.com</a>
<a class="secure" href="http://dev-diaries.com" target="_blank">http://dev-diaries.com</a>

<br>

{:.image .center}
![css-cover-3](/assets/images/css-cymbols-cover-3.png)

## a[href$=".pdf"] Selector

{:.post-content}
This selects every &lt;a&gt; element whose href attribute ends with .pdf

{% highlight css %}
a[href$=".pdf"] {
    border: 1px solid orange;
}
{% endhighlight %}

{% highlight html %}
<a href="https://dev-diaries.pdf" target="_blank">https://dev-diaries.pdf</a>
<a href="http://dev-diariespdf" target="_blank">http://dev-diariespdf</a>
{% endhighlight %}
<style>
a[href$=".pdf"] {
    border: 1px solid orange;
}
</style>
<a href="https://dev-diaries.pdf" target="_blank">https://dev-diaries.pdf</a>
<a href="http://dev-diariespdf" target="_blank">http://dev-diariespdf</a>

<br>
## a[href&lowast;="post"] Selector

{:.post-content}
This selects every &lt;a&gt; element whose href attribute contains the 
substring post. It needs to contain at least one occurence of "post"

{% highlight css %}
a[href*="post"] {
    border: 1px solid green;
}
{% endhighlight %}

{% highlight html %}
<a href="https://dev-diaries.com/post" target="_blank">https://dev-diaries.com/post</a>
{% endhighlight %}
<style>
a[href*="post"] {
    border: 1px solid green;
}
</style>
<a href="https://dev-diaries.com/post" target="_blank">https://dev-diaries.com/post</a>


{:.post-content}
Read more <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
