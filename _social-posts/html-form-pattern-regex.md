---
layout: social-post
type: "SocialPosts"
title: "Easy Form Validation Using Regex"
cover-image: /assets/images/html-form-validation-cover.png
image: /assets/images/form-validation.gif
excerpt: "Using some quick regex you can create a validation check for your form's input."
date: 2019-05-27
tags: [html]
categories: [advanced, html, forms, input]
instagram-id: Bx-kI01nSSZ 
docs: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression
---
{:.center}
# {{ page.title }}

{:.post-content}
Using some quick regex you can create a validation check for your form's input.
Using the HTML5 pattern attribute, you can pass in a regex which will be checked
for when the user tries to submit the form.

{% highlight html %}
<form action="" method="post">
    <label for="phone">Add your phone number: </label>
    <input type="text"
       name="phone"
       id="phone"
       pattern="[0-9]"
       autofocus
       required>
    <button type="submit">Submit </button>
</form>
{% endhighlight %}

<form action="" method="post">
    <label for="phone">Add your phone number: </label>
    <input type="text"
       name="phone"
       id="phone"
       pattern="[0-9]"
       autofocus
       required>
    <button type="submit">Submit </button>
</form>

{:.post-content}
This regex just specifies that we only accept numbers into this input.
See what happens when we try to submit something other than numbers;

{:.image .center}
![regex video]({{page.image}})

{:.post-content}
This validation check works without any javascript or server side logic, all
handled by the browser 😬.
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
