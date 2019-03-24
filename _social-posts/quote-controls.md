---
layout: social-post
type: "SocialPosts"
title: "Quote controls with HTML & CSS"
cover-image: /assets/images/quote-html-cover.png
image: /assets/images/.gif
excerpt: "You can use the &lt;q&gt; HTML5 element to automatically wrap some content in quotes."
date: 2019-03-24
categories: [intermediate, css, htmll]
instagram-id: BvZafa2hZpR
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
---
{:.center}
# {{ page.title }}

{:.post-content}
You can use the &lt;q&gt; HTML5 element to automatically wrap some content in quotes. 
Most modern browsers implement it by surrounding the text in quote marks. Also 
use the before and after CSS pseudo element to also show any element in quotes. If 
you want to use curly quotes for all or some particular content or use 
Guillemets << >> as they in the French language you can set how quotes display using the quotes 
CSS property. 
{% highlight css %}
/*
The q:before and q:after isn't required here since most modern browsers will
automatically insert quotes for a q element
*/
q:before, .quote:before {
 content: open-quote;
}
q:after, .quote:after {
 content: close-quote;
}

[lang="fr"] {
  quotes: "\00ab" "\00bb";
}
.curly {
  quotes: "\201C" "\201D";
}
{% endhighlight %}

{:.post-content}
With this HTML:

{% highlight html %}
  <q>French Quote</q>
  <span class="quote">French Quote 2</span>
</div>

<div>
  <q>Other Quote</q>
  <span class="quote">Other Quote 2</span>
  <q class="curly">Curly Quote</q>
</div>
{% endhighlight %}

{:.post-content}
Will render:

{% highlight html %}
<<French Quote>>
<<French Quote 2>>
"Other Quote"
"Other Quote 2"
“Curly Quote”
{% endhighlight %}

{:.post-content}
* Read more about the q HTML5 element <a href="{{page.docs}}" target="_blank">here</a>
* Read more the CSS quote property <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/quotes" target="_blank">here</a>
* Check out our codepen to experiment more <a href="https://codepen.io/the_dev_diaries/pen/eXxPZE" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
