---
layout: social-post
type: "SocialPosts"
title: "Javascript Map"
cover-image: /assets/images/js-map-data-object.png
image: /assets/images/.gif
excerpt: "Knowing and understanding javascript data structures in programming is essential. One of those very useful data structures in javascript is a Map. A map holds key-value pairs and remembers the insertion order of those keys..."
date: 2020-03-12
categories: [intermediate, data-structures, javascript, objects]
instagram-id:
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
---
{:.center}
# {{ page.title }}

{:.post-content}
Knowing and understanding [#javascript](/tags/javascript/) data structures in programming is essential.
One of those very useful data structures in javascript is a Map. A map holds key-value pairs and remembers the insertion order of those keys. There are a number of methods available on the map data structure that can make your life as a web developer much easier.

{:.post-content}
Let's see some quick example usages of Map to see why it can be very useful.

{% highlight javascript %}
// pass an iterable object to the Map constructor
const writingUtensils = new Map([
    [pen, 'blue'],
    [marker, 'green'],
    [chalk, 'white']
]);

// use a key to obtain the value
writingUtensils.get(marker) // 'green'

// check if we have a particular key
writingUtensils.has(pencil) // false

// number of elements in map
writingUtensils.size // 3

// iterate over a map - for keys or values
for (const utensilName of writingUtensils.keys()) {
  console.log(utensilName)
  // pen
  // marker
  // chalk
}

for (const utensilColor of writingUtensils.values()) {
  console.log(utensilColor)
  // blue
  // green
  // white
}
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
