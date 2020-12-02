---
layout: social-post
type: "SocialPosts"
title: "Using the Debugger Keyword To Set A Breakpoint"
cover-image: /assets/images/debugger-cover.png
image: /assets/images/debugger-screenshot.png
excerpt: "The debugger keyword is an accepted automatic breakpoint setter in almost all browsers."
date: 2019-05-23
tags: [dev-tools]
categories: [advanced, debugging, javascript, dev-tools]
instagram-id: Bxy3fbqiCpI
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
---
{:.center}
# {{ page.title }}

{:.post-content}
You can use the debugger keyword to set a browser dev tool breakpoint from your
code. This can be useful to stop execution and allow you to inspect your objects
and debug your code.

{% highlight js %}
function counter() {
    let total = 0;
    for (const num of [1,2,3,4]) {
        if (num === 2) {
            debugger;
        }
        total += num;
    }

    return total;
}

counter();
{% endhighlight %}

{:.post-content}
Will produce this effect:

{:.image .center}
![effect]({{page.image}})


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
