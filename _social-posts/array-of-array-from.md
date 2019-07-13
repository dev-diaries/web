---
layout: social-post
type: "SocialPosts"
title: "Array Of & Array From"
cover-image: /assets/images/array-of-cover.png
image: /assets/images/.gif
excerpt: "ES6 added a few static array methods which can come in handy."
date: 2019-06-13
categories: [intermediate, javascript, array]
instagram-id: ByqVXPOCDpj
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
ES6 added a few static array methods which can come in handy.
Array.of creates a new array from any number of arguments and no matter the type
of the arguments:

{% highlight js %}
const argString = Array.of('foobar');
> ["foobar"]

const argNums = Array.of(7,8);
> [7, 8]

const argObj = Array.of({foo: 'bar'}, { bar: 'foo' }, [0]);
> [{foo: 'bar'}, { bar: 'foo' }, [0]] 
{% endhighlight %}

{:.post-content}
Array.from lets you create an array from array like objects, which means objects with 
a length property and indexed elements, or iterable objects (Map, Set).
Array.from accepts as a second argument a map function that can operate over
every item in the array and it also takes a third argument which can be used
as the `this` scope when executing the map function.

{% highlight js %}
const stringHasLengthCreatesArray = Array.from('willBeArray');
> ["w", "i", "l", "l", "B", "e", "A", "r", "r", "a", "y"] 

const notArrayLikeNum = Array.from(123);
> []

const notArrayLikeOb = Array.from({foo: 'bar'});
> []

const multiples = Array.from([1, 2, 3], x => x * x);
> [1, 4, 9] 
{% endhighlight %}

{:.post-content}
Read more about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">Array.from</a> &
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of" target="_blank">Array.of</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
