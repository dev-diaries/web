---
layout: social-post
type: "SocialPosts"
title: "Object Deconstructing In Javascript"
cover-image: /assets/images/object-deconstructing-cover.png
image: /assets/images/.gif
excerpt: "Object deconstructing is a convenient way to extract multiple values from objects and arrays."
date: 2019-05-28
categories: [advanced, objects, arrays, javascript]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
---
{:.center}
# {{ page.title }}

{:.post-content}
Object deconstructing is a convenient way to extract multiple values from objects
and arrays. There are some handy ways to deconstruct an object:

{:.post-content}
You can alias the property to a different variable, or just use the provided
object property:

{% highlight js %}
const myObject = {
    student: 'Mike',
    teacher: 'Susan'
};

const { student: pupil, teacher: prof } = myObject;

console.log(pupil, prof);
> Mike Susan

const { student, teacher } = myObject;
console.log(student, teacher)
> Mike Susan
{% endhighlight %}

{:.post-content}
You can also just pluck the values you want to from an array or an object:

{% highlight js %}
const [one, two] = ['abc', 'xyz', 'foo'];

console.log(one, two);
> 'abc' 'xyz'
{% endhighlight %}

{:.post-content}
When you deconstruct an object it coerces the source to an object before 
accessing it which means you can access properties of an object

{% highlight js %}
const { length: thelen } = 'xyzabc';

console.log(thelen);
> 6
{% endhighlight %}

{:.post-content}
You can also provide default values in object patterns:

{% highlight js %}
const [x=3] = [];
console.log(x);
> 3

const {foo: x=3, bar: y} = {};
console.log(x);
> 3
console.log(y);
> undefined
{% endhighlight %}

{:.post-content}
You can skip items when deconstructing as well:

{% highlight js %}
const [,, x, y] = ['a', 'b', 'c', 'd'];

console.log(x);
> 'c'
console.log(y);
> 'd'
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
