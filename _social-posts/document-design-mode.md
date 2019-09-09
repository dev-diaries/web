---
layout: social-post
type: "SocialPosts"
title: "Edit The Entire Webpage With Design Mode"
cover-image: /assets/images/design-mode-cover.png
image: /assets/images/.gif
excerpt: "Sometimes as a designer it is useful to just put your hands all over a website to tinker with it as you wish. With the HTML spec there is a property called designMode that when active, allows you to make the entire webpage editable."
date: 2019-09-09
categories: [intermediate, html, design]
instagram-id:
docs: https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode
script: /assets/js/design-mode.js
---
{:.center}
# {{ page.title }}

{:.post-content}
Sometimes as a designer it is useful to just put your hands all over a website to tinker with it as you wish. With the HTML spec there is a property called designMode that when active, allows you to make the entire webpage editable.

{% highlight js %}
document.designMode = 'on';
{% endhighlight %}

Design Mode <input type="checkbox" name="designMode" class="js-design-mode">

{:.post-content}
You'll see if you check this box you can then edit the contents of the page like it was
a Google Doc or Microsoft Word document. Upon refresh the changes don't persist.
Allow users/designers to do this at their own risk!

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
