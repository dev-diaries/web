---
layout: social-post
type: "SocialPosts"
title: "Default Function Params In Javascript"
cover-image: /assets/images/js-default-params-cover.png
image: /assets/images/.gif
excerpt: "In Javascript with es6 you can pass in default parameters in functions."
date: 2019-05-05
categories: [intermediate, javascript]
instagram-id: BxFAKKNBsFZ
docs: https://css-tricks.com/using-default-parameters-es6/
---
{:.center}
# {{ page.title }}

{:.post-content}
In #javascript with es6 you can pass in default parameters in functions. 
This is useful as having a default for a function can provide a safeguard for your applications. 

{% highlight js %}
function getStudent(name, grade = 'F', age = 15) {
	return `${name} is ${age} years old and received ${grade}`;
}

getStudent('Frankie', 'B');
> "Frankie is 15 years old and received B"

getStudent('Mary', 'A', 14);
> "Mary is 14 years old and received A"

getStudent('Lilla');
> "Lilla is 15 years old and received F"
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
