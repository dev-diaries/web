---
layout: social-post
type: "SocialPosts"
title: "Using Sets in Javascript To Remove Duplicates"
cover-image: /assets/images/set-removal-cover.png
image: /assets/images/set-duplication-removal-code.png
excerpt: "Javascript sets were introduced with ES6 and can be leveraged to quickly remove duplicates from an array."
date: 2019-04-12
tags: [javascript]
categories: [intermediate, javascript, arrays, shortcuts]
instagram-id: BwJ_8YSAcii
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
---
{:.center}
# {{ page.title }}

{:.post-content}
Javascript sets were introduced with ES6 and can be leveraged to quickly remove 
duplicates from an array. Since a set only allows unique values when you 
instantiate (create) a new set it automatically removes duplicates from an array. 
This can give you a quick one liner to the age old question how to remove 
duplicates from an array. Sets can be useful in general if you need a unique collection of items.

{:.image .center}
![set-code]({{page.image}})

{:.post-content}
This is a guide <a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" target="_blank">article</a> 
about sets and this <a href="https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array" target="_blank">Stack Overflow</a>
answer has some good info as well. Check our <a href="https://codepen.io/the_dev_diaries/pen/oOwqab" target="_blank">codepen</a> to experiment.

{:.post-content}
Read more about Sets on <a href="{{page.docs}}" target="_blank">Mozilla</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
