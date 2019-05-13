---
layout: social-post
type: "SocialPosts"
title: "Javascript Stack Trace"
cover-image: /assets/images/stack-trace-cover.png
image: /assets/images/.gif
excerpt: "If you’re writing javascript and making a package, designing an API, or working with other developers, you should output helpful error messages if something unexpected happens."
date: 2019-05-14
categories: [advanced, javscript, error-handling, errors]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack
---
{:.center}
# {{ page.title }}

{:.post-content}
If you’re writing javascript and making a package, designing an API, or working with other developers, you should output helpful error messages if something unexpected happens.
Printing the stack trace is a good way for the web developer (or just you 😆) to debug and figure out what went wrong where.

{% highlight js %}
function catchIt() {
    try {
        throwIt();
    } catch (e) {
        console.error(e.stack); 
    }
}
function throwIt() {
    throw new Error('');
}

catchIt();

/*
 Error
 at throwIt (<anonymous>:8)
    at catchIt (<anonymous>:1)
    at <anonymous>:1
*/
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
