---
layout: social-post
type: "SocialPosts"
title: "Linting & Fixing In Javascript"
cover-image: /assets/images/eslint-cover.png
image: /assets/images/.gif
excerpt: "As javascript matures there have been a proliferation of linting tools that can help improve the state of your codebase."
date: 2019-06-24
categories: [advanced, javascript, linting]
instagram-id: 
docs: BzFaWh9Cvbu
---
{:.center}
# {{ page.title }}

{:.post-content}
As javascript matures there have been a proliferation of linting tools that can help improve the state of your codebase. Linting is the process of running a program that will analyze code for potential errors or stylistic issues.

{:.post-content}
Our favorite linter and fixer respectively are <a href="https://eslint.org" target="_blank">eslint</a> and <a href="https://prettier.io/" target="_blank">prettier</a>.
We're big fans of typescript and one of our previous favorite linters <a href="https://palantir.github.io/tslint/" target="_blank">tslint</a>
is being <a href="https://medium.com/palantir/tslint-in-2019-1a144c2317a9" target="_blank">deprecated</a> in favor of eslint.

{:.post-content}
Eslint allows developers to create their own set of rules to enforce and there
are a large set of pre-existing rules that you can use out of the box to 
create a set of standards for your codebase. Let's see how you can quickly get
started with eslint:

{% highlight bash %}
npm install eslint --save-dev
eslint --init
{% endhighlight %}

{:.post-content}
Then, if you have a javascript file you can run eslint on that file:

{% highlight bash %}
eslint myFile.js
{% endhighlight %}

{:.post-content}
Prettier is an opinionated code formatter and can ensure your code is clean
and consistent. Since prettier is technically not a linter, we're a fan of using
both on a codebase. Let's see how to get quickly started with Prettier

{% highlight bash %}
npm install --save-dev --save-exact prettier
{% endhighlight %}

{:.post-content}
Prettier <a href="https://prettier.io/docs/en/editors.html" target="_blank">integrates with editors</a>
so you can have it run on file save, but you can also use the cli to perform
formatting changes:

{% highlight bash %}
prettier --single-quote --trailing-comma es6 --write "{app,__{tests,mocks}__}/**/*.js"
{% endhighlight %}

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
