---
layout: social-post
type: "SocialPosts"
title: "Tagged Template Literals"
cover-image: /assets/images/logargs-cover.png
image: /assets/images/logargs-cover.png
excerpt: "Javascript template literals were a welcome addition in ES6, and tagged template literals are a powerful feature that came along with it."
date: 2019-05-21
tags: [javascript]
categories: [javascript, interpolation]
instagram-id: BxvB3_jieLZ
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
---
{:.center}
# {{ page.title }}

{:.post-content}
A tagged template literal gives us back as the first argument everything besides
the interpolated portion and the interpolated value as the second argument:

{:.image .center}
![interpolation]({{page.image}})

{:.post-content}
Tagged template literals can also return a function which can then be executed:

{% highlight js %}
const logFunction = () => {
  return 'Returned from logFunction!';
};

const myTag = (literals, func) => {
  // literals is ["Function expression in template", ""]
  // so we only want the first element
  return literals[0] + func();
};

const taggedResult = myTag `Function expression in template: ${() => logFunction()}`;
console.log(taggedResult); 
> "Function expression in template: Returned from logFunction!"
{% endhighlight %}


{:.post-content}
This is the entire premise of which <a href="https://www.styled-components.com/" target="_blank">styled components</a>
is built upon. Read more about that and the breakdown in this <a href="https://mxstbr.blog/2016/11/styled-components-magic-explained/" target="_blank">article.</a>

{:.post-content}
Read more about template literals <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
