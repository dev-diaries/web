---
layout: social-post
type: "SocialPosts"
title: "HTML: Content Editable"
cover-image: /assets/images/content-editable-cover.png
image: /assets/images/.gif
excerpt: "Using HTML5 contentEditable you can make HTML markup editable by the user."
date: 2019-04-27
categories: [intermediate, html5, content]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
---
{:.center}
# {{ page.title }}

{:.post-content}
Using HTML5 contentEditable you can make HTML markup editable by the user. 
Using a content editable div gives you more flexibility than just using an 
input or textarea as you can put other elements in a contenteditable div. 

{% highlight html %}
<div contentEditable="true">Change me! This content can be changed</div>
{% endhighlight %}

<div contentEditable="true">Change me! This content can be changed</div>

{:.post-content}
Using Javascript you can add an event onto the content editable element
to listen for changes and do something with that content.

{% highlight javascript %}
const content = document.querySelector('[contenteditable]');
content.addEventListener('input', function(event) {
  console.log(content.innerHTML)
})
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>.

{:.post-content}
There is quite a bit written about content editable on the web and it's inconsistencies
so be sure to read up about it before using it for a rich text editor for example.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
