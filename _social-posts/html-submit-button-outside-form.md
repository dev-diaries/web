---
layout: social-post
type: "SocialPosts"
title: "HTML Submit Button Outside The Form"
cover-image: /assets/images/submit-form-cover.png
image: /assets/images/.gif
excerpt: "For a HTML form element you can put your submit button outside of the form element as long as you have reference the form’s id property with the button’s form property."
date: 2019-04-21
categories: [intermediate, html, forms]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
---
{:.center}
# {{ page.title }}

{:.post-content}
For a HTML form element you can put your submit button outside of the form element as long as you have reference the form’s id property with the button’s form property.

{% highlight html %}
<div>
  <form id="a-form">
    <label for="name">Name:</label>
    <input type="text" name="name"></input>
  </form>

  <button type="submit" form="a-form">Submit</button>
</div>
{% endhighlight %}

{:.post-content}
Read more about forms <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
