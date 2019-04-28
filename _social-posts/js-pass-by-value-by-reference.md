---
layout: social-post
type: "SocialPosts"
title: "Javascript: Pass By Reference Or By Value?"
cover-image: /assets/images/primitive-by-value-cover.png
image: /assets/images/.gif
excerpt: "Is Javascript pass by reference or pass by value? In fact, it’s a little bit of both."
date: 2019-04-28
categories: [advanced, javascript, objects]
instagram-id: 
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
Is Javascript pass by reference or pass by value? In fact, it’s a little bit of 
both. Primitives: null, undefined, Number, String, & Boolean are pass by value, 
and Objects: Array, Function, & Objects are pass by reference. 
Unsure what we mean? Let’s check some examples with comments to see exactly!

{% highlight javascript %}
// Primitives won't get changed, because we copy (pass) the value
// so the underlying value won't get changed
let a = 1;
let b = a;

a = 5;

console.log(a); // 5
console.log(b); // 1
{% endhighlight %}

{% highlight javascript %}
// we copy by reference meaning when we assign b to a we copy the location in memory
// meaning the underlying object will get changed
let a = {};
let b = a;

a.foo = 'bar';

console.log(a); // {foo: "bar"}
console.log(b); // {foo: "bar"}

// same is true for arrays, the underlying array will get changed
let z = [];
let x = z;

z.push('apple');

console.log(z); // ["apple"]
console.log(x); // ["apple"]
{% endhighlight %}

{:.post-content}
Javascript functions also behave similarly:

{% highlight javascript %}
// functions can change the object without even returning the object because
// it is changing the same referenced object
function changeGrade(student) {
    student.math = 'A';
}

let student = {
    math: 'F',
    history: 'B'
};

changeGrade(student);
console.log(student); // {math: "A", history: "B"}

// A boolean is a primitive so it is passed by value so will not get 
// changed when passed to a function
function primitiveUnchanged(didPass) {
    didPass = true;
}

let didPass = false; 
primitiveUnchanged(didPass);

console.log(didPass); // false
{% endhighlight %}


{:.post-content}
A couple of good overviews can be found on:
* <a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" target="_blank">codeburst.io</a>
* <a href="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18" target="_blank">medium</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
