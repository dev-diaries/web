---
layout: social-post
type: "SocialPosts"
title: "HTML Form Inputs"
cover-image: /assets/images/intput-types-cover.png
image: /assets/images/.gif
excerpt: "HTML5 has a number of different input types for specific purposes."
date: 2019-06-12
categories: [intermediate, html5, form]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
---
{:.center}
# {{ page.title }}

{:.post-content}
Being familiar with all the input types can make your forms better suited for the end user. 

{:.post-content}
* Button: A push button with no default behavior.
{% highlight html %}
<input type="button" value="My Button">
{% endhighlight %}
<input type="button" value="My Button">

{:.post-content}
* Checkbox: A check box allowing single values to be selected/deselected.
{% highlight html %}
<input type="checkbox">
{% endhighlight %}
<input type="checkbox">

{:.post-content}
Color: control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text
Note this is not support in IE 11 <a href="https://caniuse.com/#feat=input-color" target="_blank">caniuse reference</a>
{% highlight html %}
<input type="color">
{% endhighlight %}
<input type="color">

{:.post-content}
A control for entering a date (year, month, and day, with no time)
{% highlight html %}
<input type="date">
{% endhighlight %}
<input type="date">

{:.post-content}
A control for entering a date and time, with no time zone.
{% highlight html %}
<input type="datetime-local">
{% endhighlight %}
<input type="datetime-local">

{:.post-content}
A field for editing an e-mail address.
{% highlight html %}
<input type="email">
{% endhighlight %}
<input type="email">

{:.post-content}
A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
{% highlight html %}
<input type="file">
{% endhighlight %}
<input type="file">

{:.post-content}
A control that is not displayed but whose value is submitted to the server.
{% highlight html %}
<input type="hidden">
{% endhighlight %}
<input type="hidden">

{:.post-content}
A graphical submit button. You must use the src attribute to define the source 
of the image and the alt attribute to define alternative text. 
You can use the height and width attributes to define the size of the image in pixels.
{% highlight html %}
<input type="image" src="/assets/images/send-image.png" width="50px">
{% endhighlight %}
<input type="image" src="/assets/images/send-image.png" width="50px">

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
