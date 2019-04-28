---
layout: social-post
type: "SocialPosts"
title: "HTML: Content Editable"
cover-image: /assets/images/content-editable-cover.png
image: /assets/images/.gif
excerpt: "Using HTML5 contentEditable you can make HTML markup editable by the user."
date: 2019-04-27
categories: [intermediate, html5, content]
instagram-id: Bww5P0zBpVu
docs: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
---
{:.center}
# {{ page.title }}

{:.post-content}
Using HTML5 contentEditable you can make HTML markup editable by the user. 
Using a content editable div gives you more flexibility than just using an 
input or textarea as you can put other elements in a contenteditable div. 

{% highlight html %}
<div contentEditable="true">Click or tap on me to change my content. You can then type in anything you want.</div>
{% endhighlight %}

<div contentEditable="true">Click or tap on me to change my content. You can then type in anything you want.</div>

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

{:.post-content}
Here are some articles that discuss content editable and some of it's shortcomings:

{:.post-content}
* <a href="https://florian.rivoal.net/blog/2016/12/content-editable-is-a-scary-place/" target="_blank">Content Editable is a Scary Place (2016)</a>
* <a href="https://medium.com/content-uneditable/fixing-contenteditable-1a9a5073c35d" target="_blank">Fixing Content Editable (2015)</a>
* <a href="https://medium.com/content-uneditable/contenteditable-the-good-the-bad-and-the-ugly-261a38555e9c" target="_blank">ContentEditable — The Good, the Bad and the Ugly (2015)</a>


{:.post-content}
Looking for a list of full blown content editors? Check some of these out:

{:.post-content}
* <a href="https://github.com/basecamp/trix" target="_blank">Trix</a>. <a href="http://trix-editor.org/" target="_blank">demo</a>
* <a href="https://github.com/neilj/Squire" target="_blank">Squire</a>
* <a href="http://prosemirror.net/" target="_blank">ProseMirror</a>
* <a href="https://github.com/guardian/scribe" target="_blank">Scribe</a>
* <a href="http://ckeditor.com/" target="_blank">CKEditor</a>
* <a href="http://quilljs.com/" target="_blank">Quill</a>
* <a href="http://summernote.org/" target="_blank">Summernote</a>
* <a href="http://wysihtml.com/" target="_blank">wysihtml</a>
* <a href="http://etherpad.org/" target="_blank">Etherpad</a>
* <a href="http://www.tinymce.com/" target="_blank">TinyMCE</a>
* <a href="https://textbox.io/" target="_blank">Textbox.IO</a>
* <a href="https://www.froala.com/wysiwyg-editor" target="_blank">Froala</a>
* <a href="http://imperavi.com/redactor/" target="_blank">Redactor</a>
* <a href="http://jakiestfu.github.io/Medium.js/docs/" target="_blank">Medium.js</a>


{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
