---
layout: social-post
type: "SocialPosts"
title: "Javascript Object Values & Object Keys"
cover-image: /assets/images/object-keys-cover.png
image: /assets/images/.gif
excerpt: "The Javascript Object has some methods available on it that make it easier to iterate over it’s properties or it’s values."
date: 2019-03-29
tags: [javascript]
categories: [intermediate, javascript]
instagram-id: BvmDy8kBrCU
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
---
{:.center}
# {{ page.title }}

{:.post-content}
The Javascript Object has some methods available on it that make it easier to iterate over it’s properties or it’s values. Object.values which was introduced by ES2017 outputs values of a javascript object into an array and Object.keys outputs the keys as an array.

{% highlight js %}
const students = {
    jules: 27,
    leo: 30,
    bella: 19,
    ella: 36
};
{% endhighlight %}

{:.post-content}
In the above students (likely graduate students 😏) we can output just the ages
of the students by using Object.values(). We can conversely output just the names
of the students by using Object.keys(). This can be useful if want to order
the students alphabetically or order them by age, for example:

{% highlight js %}
const orderedByName = {};

Object.keys(students).sort((a, b) => {
    return a.localeCompare(b);
}).forEach((key) => {
    orderedByName[key] = students[key];
});

console.log(orderedByName);
> {bella: 19, ella: 36, jules: 27, leo: 30}
{% endhighlight %}

{:.post-content}
Let's order them by age:

{% highlight js %}
const orderedByAge = {};

Object.keys(students).sort((a,b) => {
    return students[a] - students[b];
}).forEach((key) => {
    orderedByAge[key] = students[key];
})

console.log(orderedByAge);
> {bella: 19, jules: 27, leo: 30, ella: 36}
{% endhighlight %}

{:.post-content}
If for some reason you get an error message that says Object.values isn't available,
you can also use Object.map to obtain the same effect.

{% highlight js %}
const values = Object.keys(students).map((key) => {
    return students[key];
});
{% endhighlight %}

{:.post-content}
Lastly, there is the Object.entries which returns an array of arrays of each key and value:
{% highlight js %}
const students = {
    jules: 27,
    leo: 30,
    bella: 19,
    ella: 36
};

Object.entries(students);

// Will display this
[
  [
    "jules",
    27
  ],
  [
    "leo",
    30
  ],
  [
    "bella",
    19
  ],
  [
    "ella",
    36
  ]
]

{% endhighlight %}

{:.post-content}
* Read more about <a href="{{page.docs}}" target="_blank">Object.values()</a>
* Read more about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/keys" target="_blank">Object.keys()</a>
* Read more about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/entries" target="_blank">Object.entries()</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
