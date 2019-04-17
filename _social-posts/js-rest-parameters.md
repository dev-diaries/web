---
layout: social-post
type: "SocialPosts"
title: "Javascript Rest Parameters"
cover-image: /assets/images/rest-parameters-cover.png
image: /assets/images/.gif
excerpt: "ES6 introduced the rest parameter syntax which you should use instead of the arguments object 
for a javascript function"
date: 2019-04-19
categories: [intermediate, javascript, es6, arrays]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
---
{:.center}
# {{ page.title }}

{:.post-content}
ES6 introduced the rest parameter syntax which you should use instead of the arguments object 
for a javascript function. The rest parameter represents an indefinite number 
of arguments as a standard array. The arguments object is not an real array 
so methods like sort, map, forEach, or pop would not work on the arguments object, 
while they do on the rest parameter.

{% highlight javascript %}
function someFunc(...args) {
  console.log(args.length);
}

someFunc();
> 0

someFunc(1,2,3,4);
> 4

// args is a valid array so this will work
function sortFn(...args) {
	return args.sort();
}

// this won't work b/c arguments isn't an array
function nonWorkingSortFn() {
	return arguments.sort();
}

sortFn('h','j','y','a','b');
> (5) ["a", "b", "h", "j", "y"]

nonWorkingSortFn('h','j','y','a','b');
> Uncaught TypeError: arguments.sort is not a function
{% endhighlight %}

{:.post-content}
What about this?

{% highlight javascript %}
function sortFn(...args) {
	return args.sort();
}

sortFn(4,3,10,20,1);
> (5) [1, 10, 20, 3, 4]
{% endhighlight %}

{:.post-content}
🤔? This is because array.sort by default does a lexicographic (alphabetical) sort
so we need to pass in our own sort function.

{% highlight javascript %}
function sortNumFn(...args) {
    return args.sort((a, b) => a - b);
}

sortNumFn(4,3,10,20,1);
(5) [1, 3, 4, 10, 20]
{% endhighlight %}

{:.post-content}
😅

{:.post-content}
Read more about rest parameters <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
