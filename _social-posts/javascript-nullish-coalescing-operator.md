---
layout: social-post
type: "SocialPosts"
title: "Nullish Coalescing Operator (??) In Javascript"
cover-image: /assets/images/nullish-operator-cover.png
image: /assets/images/.gif
excerpt: "The nullish coalescing operator returns the left hand side if it is not null or undefined, otherwise it returns the right hand side. This makes it different from the logical OR (||) operator which returns the right hand side if the left side is falsey. Let’s see some examples to see exactly the behavior."
date: 2020-10-20
categories: [intermediate, javascript, es6]
instagram-id:
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
---
{:.center}
# {{ page.title }}

{:.post-content}
The nullish coalescing operator returns the left hand side if it is not null
or undefined, otherwise it returns the right hand side. This makes it different
from the logical OR (||) operator which returns the right hand side if the
left side is falsey. Let’s see some examples to see exactly the behavior.

{% highlight javascript %}
const foo = undefined ?? 'my string'
console.log(foo)
// "my string"

const num = 0 ?? 23
console.log(num)
// 0
{% endhighlight %}

{:.post-content}
It is important to note that the operator only returns the right hand side if the left
hand side is null or undefined -- but not false:

{% highlight javascript %}
const huh = false ?? 'naw'
console.log(huh)
// false
{% endhighlight %}

{:.post-content}
Contrarily the logical OR returns the right hand side if the left side is just "falsey".

{% highlight javascript %}
const num = 0 || 23
console.log(num)
// 23

const huh = false || 'naw'
console.log(huh)
// "naw"
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
