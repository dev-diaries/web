---
layout: social-post
type: "SocialPosts"
title: "Freezing Object In Javascript"
image: /assets/images/object-freeze-cover.png
excerpt: "Object.freeze() is useful to prevent an object from changing, so no new properties can be added to it, no existing properties can be removed, the enumerability can not be changed, and existing values of properties can not be changed."
date: 2019-06-04
categories: [advanced, javascript, objects]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
---
{:.center}
# {{ page.title }}

{:.post-content}
Object.freeze() is useful to prevent an object from changing, so no new properties can be added to it, no existing properties can be removed, the enumerability can not be changed, and existing values of properties can not be changed. 

{% highlight js %}
const address = {
    registered: false
};
Object.freeze(address);

address.registered = true;
console.log(address);
> { registered: false }
{% endhighlight %}

{:.post-content}
Notice that the boolean property of registered did not change because we froze
the address object.

{:.post-content}
It is important to note that even if an object is frozen and not open to mutation
it does not mean that it is constant since freeze is shallow meaning
that deeper child objects can actually be mutated:

{% highlight js %}
const address = {
    street: '123 Main street',
    inhabitants: [
    'John',
    'Molly'
    ]
};

Object.freeze(address);

address.inhabitants.push('Jamal');

console.log(address);
> {
    street: '123 Main street',
    inhabitants: [
        'John',
        'Molly',
        'Jamal'
    ]
}
{% endhighlight %}

{:.post-content}
If we wanted the entire object to be frozen we would have to do a deep freeze.
We talked about deep and shallow operations in our [javascript cloning post](https://www.dev-diaries.com/social-posts/javascript-cloning/).
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank">Mozilla</a> has a deepFreeze function example:

{% highlight js %}
function deepFreeze(object) {

  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self
  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ? 
      deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

var obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null
{% endhighlight %}

{:.post-content}
Also note that Object.freeze does allow for reassignment if we don't use a const
for that method:

{% highlight js %}
let pigs = {
  canFly : false
};

Object.freeze(pigs);
pigs = { canFly: true };

console.log(pigs);
> { canFly: true }
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
