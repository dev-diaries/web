---
layout: social-post
type: "SocialPosts"
title: "Typescript Basic Types"
cover-image: /assets/images/typescript-boolean-cover.png
image: /assets/images/.gif
excerpt: "Since Typescript is statically typed, let’s go through the basic typescript types"
date: 2019-08-08
tags: [javascript]
categories: [intermediate, typescript, static-types, javascript]
instagram-id: B072DLvA6-2
docs: https://www.typescriptlang.org/docs/handbook/basic-types.html
---
{:.center}
# {{ page.title }}

{:.post-content}
We’ve mentioned typescript quite a few times here and we’re big fans of typescript here!
In fact the search functionality on our site was written with Typescript + React.
Read more about that in our [behind the scenes guide](/social-posts/bts-edition-two-adding-search-part-2)
Since Typescript is statically typed, let’s go through the basic typescript types so we can get familiar with what types can be in our tool belt.

{:.post-content}
Booleans:
{% highlight javascript %}
const done: boolean = false;
let isComplete: boolean = true;

// will throw a compile error
isComplete = 123;
{% endhighlight %}

{:.post-content}
Numbers & Strings:
{% highlight javascript %}
const decimal: number = 6;
const convertedNumber: number = Number('123');

let color: string = "blue";
color = 'red';
{% endhighlight %}

{:.post-content}
Tuples:
{% highlight javascript %}
let x: [string, number];
x = ["hello", 10]; // OK

// this will throw an error as it does not fit the definition of string, number
x = [10, "hello"]; // Error
{% endhighlight %}

{:.post-content}
Enums
{% highlight javascript %}
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
