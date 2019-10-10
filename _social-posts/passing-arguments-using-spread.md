---
layout: social-post
type: "SocialPosts"
title: "Passing Arguments Using Spread"
cover-image: /assets/images/spread-syntax-cover.png
image: /assets/images/.gif
excerpt: "The spread syntax in javascript allows an iterable (array, strings, or object literals) to expand in places where zero or more arguments are expected. Why is this useful? Let's find out!"
date: 2019-10-10
categories: [intermediate, javascript, arguments, objects, arrays]
instagram-id:
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
---
{:.center}
# {{ page.title }}

{:.post-content}
The spread (`...`) syntax in javascript allows an iterable (array, strings, or object literals)
to expand in places where zero or more arguments are expected.

{:.post-content}
Let's see a quick example of what exactly is meant by this. In the below example
we have two arrays that we combine. One using spread and one not:

{% highlight js %}
const foo = [1, 2, 3];
const bar = [4, 5, 6];

const fooAndBar = [foo, bar]
const fooSpreadBar = [...foo, ...bar]

console.log(fooAndBar);
> [[1, 2, 3], [4, 5, 6]]
console.log(fooSpreadBar);
> [1, 2, 3, 4, 5, 6]
{% endhighlight %}

{:.post-content}
We can see the difference in that using the spread syntax it expands the array
so when we combine the arrays they do not become nested because the array itself
is unpacked.

{:.post-content}
A handy usage of this can be seen when copying arrays. Using the spread syntax
makes a [shallow copy](/social-posts/javascript-cloning) of the array.

{% highlight js %}
const abc = ['a', 'b', 'c'];

// abcCopy is now a shallow copy of the abc array
const abcCopy = [...abc];
{% endhighlight %}


{:.post-content}
The spread syntax also allows you to more easily concatenate an array.

{% highlight js %}
const foo = [0, 1, 2];
const bar = [3, 4, 5];

// previously we had to use concat
foo = foo.concat(bar);
> [0, 1, 2, 3, 4, 5]

// using spread is a bit cleaner
foo = [...foo, ...bar];
> [0, 1, 2, 3, 4, 5]
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
