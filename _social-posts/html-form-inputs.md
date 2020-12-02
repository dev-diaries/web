---
layout: social-post
type: "SocialPosts"
title: "HTML Form Inputs"
cover-image: /assets/images/intput-types-cover.png
image: /assets/images/.gif
excerpt: "HTML5 has a number of different input types for specific purposes."
date: 2019-06-12
tags: [html]
categories: [intermediate, html, form]
instagram-id: ByntkBPC8KP
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
A control for entering a month and year, with no time zone.
{% highlight html %}
<input type="month">
{% endhighlight %}
<input type="month">

{:.post-content}
A  control for entering a number.
{% highlight html %}
<input type="number">
{% endhighlight %}
<input type="number">

{:.post-content}
A single-line text field whose value is obscured. Use the maxlength and minlength attributes to specify the maximum length of the value that can be entered.
{% highlight html %}
<input type="password">
{% endhighlight %}
<input type="password">

{:.post-content}
A radio button, allowing a single value to be selected out of multiple choices.
{% highlight html %}
<input type="radio" name="pref" value="savory"> Savory
<input type="radio" name="pref" value="sweet"> Sweet
{% endhighlight %}
<input type="radio" name="pref" value="savory"> Savory
<input type="radio" name="pref" value="sweet"> Sweet

{:.post-content}
A control for entering a number whose exact value is not important.
{% highlight html %}
<input type="range">
{% endhighlight %}
<input type="range">

{:.post-content}
A button that resets the contents of the form to default values.
{% highlight html %}
<form>
Input 1<input type="text" name="input-1">
Input 2<input type="text" name="input-2">
<input type="reset">
</form>
{% endhighlight %}
<form>
Input 1<input type="text" name="input-1">
Input 2<input type="text" name="input-2">
<input type="reset">
</form>

{:.post-content}
A single-line text field for entering search strings. Line-breaks are automatically removed from the input value.
{% highlight html %}
<input type="search">
{% endhighlight %}
<input type="search">

{:.post-content}
A button that submits the form.
{% highlight html %}
<input type="submit">
{% endhighlight %}
<input type="submit">

{:.post-content}
A control for entering a telephone number
{% highlight html %}
<input type="tel">
{% endhighlight %}
<input type="tel">

{:.post-content}
A single-line text field. Line-breaks are automatically removed from the input value.
{% highlight html %}
<input type="text">
{% endhighlight %}
<input type="text">

{:.post-content}
A control for entering a time value with no time zone
{% highlight html %}
<input type="time">
{% endhighlight %}
<input type="time">

{:.post-content}
A field for entering a URL.
{% highlight html %}
<input type="url">
{% endhighlight %}
<input type="url">

{:.post-content}
A control for entering a date consisting of a week-year number and a week number with no time zone.
{% highlight html %}
<input type="week">
{% endhighlight %}
<input type="week">

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
