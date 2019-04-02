---
layout: post
title:  "SCSS in three minutes"
date:   2019-03-10 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/scss.svg
demo: /assets/images/scss-in-three.gif
categories: [css, scss, how-to]
excerpt: "SCSS is a superset of CSS3's syntax. It provides a powerful abstraction with the ability to use variables, mixins, and functions. Intrigued? Let's get it setup in 3 minutes or less!"
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
<a href="https://sass-lang.com/" target="_blank">SCSS</a> is a superset of CSS3's syntax. It provides a powerful abstraction with the ability to use variables, mixins, and functions. Intrigued? Let's get it setup in 3 minutes or less!

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite resources

{:.resources-content}
* [Official Docs](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)
* [The complete guide to SCSS/SASS](https://medium.freecodecamp.org/the-complete-guide-to-scss-sass-30053c266b23)
</div>

{:.image .center}
![sass logo]({{page.image}})

## Wait, wait, what is it?

{:.post-content}
Before we go racing off, it might be good to talk about what is SASS/SCSS.
SCSS is a preprocessor which means it needs to be processed down to another
format (css) and is a superset of CSS. That just means we get to use features
that aren't part of the CSS standard and move a bit faster when writing css. Since
SCSS is a superset of CSS it also means that regular old CSS is valid SCSS, and
that makes transitioning from CSS to SCSS that much easier and just requires
you to rename some files. We've been throwing around SCSS and then linking to SASS
so you might be wondering what the difference between the two is...This <a href="https://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass" target="_blank">Stackoverflow</a>
answer sums it up nicely, but basically SCSS is the newer version and the two
are just two different syntaxes. We recommend you use SCSS. Want to learn more about
what exactly SCSS is? Check this <a href="https://www.dailysmarty.com/posts/what-is-scss" target="_blank">article</a>

## Let's do this

{:.post-content}
We're a fan of keeping things as light weight as possible so we're just going
to opt for a npm script to coordinate the scss compilation process. This could
easily be changed to integrate with <a href="https://webpack.js.org/" target="_blank">webpack</a>, 
<a href="https://gulpjs.com/" target="_blank">gulp</a>, <a href="https://gruntjs.com/" target="_blank">grunt</a>, 
<a href="https://github.com/broccolijs/broccoli" target="_blank">broccoli</a>, 
<a href="https://brunch.io/" target="_blank">brunch</a> or whatever you're using.

{:.post-content}
So let's install <a href="https://github.com/sass/node-sass" target="_blank">node-sass</a> 
which will handle building our scss files. In our
project root let's install it via npm.

{% highlight javascript %}
npm install --save node-sass
{% endhighlight %}

{:.post-content}
Now we need to add in a script to watch when we edit scss files and compile
them down into valid css files. So we'll add in a npm script to handle that:

{% highlight javascript %}
"scripts": {
    "scss": "npx node-sass -w scss/app.scss -o assets/css/"
  }
{% endhighlight %}

{:.post-content}
Curious what npx is? <a href="https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner" target="_blank">Read about it here</a>
Basically it allows us a quickly call a node package and in this case call a local package.
We then tell node-sass to watch our scss file app.scss and output the result
into our assets directory inside the css directory. Let's make some scss files

{% highlight bash %}
cd scss & touch app.scss
{% endhighlight %}

{:.post-content}
Let's add some scss to our app.scss file:

{% highlight scss %}
$black: #000000;
.container {
    margin: 0 auto;
        &:hover {
            border: 1px solid $black;
        }
}
{% endhighlight %}

{:.post-content}
Now if we check what's in our css directory we'll see this:

{% highlight css%}
.container {
  margin: 0 auto; }
  .container:hover {
    border: 1px solid black; }
{% endhighlight %}

{:.post-content}
Cool! It took our scss and outputted valid css that we can use. Let's see a video
of all this in action, in under 3 minutes!

{:.image .center}
![scss demo]({{page.demo}})
