---
layout: social-post
type: "SocialPosts"
title: "Iterables In Javascript"
cover-image: /assets/images/iterable-cover.png
image: /assets/images/.gif
excerpt: "Iterators are a way to loop over any collection in JavaScript."
date: 2019-07-06
categories: [advanced, javascript, arrays, iteration]
instagram-id: 
docs: https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch4.md#iterables
---
{:.center}
# {{ page.title }}

{:.post-content}
Iterators are a way to loop over any collection in JavaScript. An iterable is a 
data structure that makes its collection of elements accessible by using an 
iterator. An iterator is a pointer for traversing the elements of the iterable 
data structure. If you’ve used the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank">for-of</a> loop you’re using an iterable. 
Destructuring, which [we’ve written about previously](/social-posts/javascript-object-destructuring/) is possible because of 
iterables. Check the link in the bio for more info and swipe through to see some examples.

{:.post-content}
Let's check some of what is written out above with some examples. 
If we have an array we can explicitly access each element in that array
by access the Symbol.iterator property which gives us back a function
to be able to call each element:

{% highlight javascript %}
const myNumbers = [1, 2, 3, 4];
const numberIterator = myNumbers[Symbol.iterator]();
numberIterator.next();
> {value: 1, done: false}
numberIterator.next();
> {value: 2, done: false}
numberIterator.next();
> {value: 3, done: false}
numberIterator.next();
> {value: 4, done: true}
numberIterator.next();
> {value: undefined, done: true}
{% endhighlight %}


{:.post-content}
As we mentioned
with destructuring, you can access an element of an array:

{% highlight js %}
const collection = ['foo', 'bar', 'cat'];

const [firstD] = collection;

// is equivalent to

const iterator = collection[Symbol.iterator]();
const firstI = iterator.next().value;
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">in the You Don't Know JS book</a>
and read an article on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol" target="_blank">Mozilla</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
