---
layout: social-post
type: "SocialPosts"
title: "Use Git Ignore Check to See Why a File Is Ignored"
cover-image: /assets/images/git-ignore-check-cover.png
image: /assets/images/.gif
excerpt: "You can use the git check-ignore command to verify if your file is gitnored."
date: 2019-05-01
tags: [git]
categories: [advanced, git]
instagram-id: Bw7tSuahEKP
docs: https://git-scm.com/docs/git-check-ignore
---
{:.center}
# {{ page.title }}

{:.post-content}
Having Git issues with your file not being detected? Your file might be git ignored. You can use the git check-ignore command to verify if your file is gitnored. It will tell you also which gitignore if you have multiple and which line. 

{:.post-content}
So let's say we have this directory structure;
{% highlight bash %}
> ls -a 
.git
.gitignore
all.json
js

> cd js
> ls -a
.gitignore
foo.js
{% endhighlight %}

{:.post-content}
So we have a git project with a file `all.json` and a `.gitignore` in the root. We
also have a directory called `js` which also has a `.gitignore` in it and a file
call `foo.js`. Let's take a peek at the gitignores:

{:.post-content}

{% highlight bash %}
> pwd
/Users/me/git-check
> ls -a
.git
.gitignore
all.json
js
> cat .gitignore
all.json

> cd js
> cat .gitignore
foo.js
{% endhighlight %}

{:.post-content}
So, we can see that in the root `all.json` is ignored and in the `js` directory
we're ignoring foo.js. Let's see what happens when we use git check-ignore

{% highlight bash %}
> git check-ignore -v all.json
.gitignore:1:all.json	all.json

> git check-ignore -v js/foo.js
js/.gitignore:1:foo.js	js/foo.js
{% endhighlight %}

{:.post-content}
The `-v` is a verbose flag and gives us the line number and the actual `.gitignore`
which is useful information to have. This <a href="https://stackoverflow.com/questions/12144633/explain-which-gitignore-rule-is-ignoring-my-file" target="_blank">Stackoverflow</a>
answer is a good running commentary from the author who actually implemented the
git check-ignore feature.

{:.post-content}
Read more about in the <a href="{{page.docs}}" target="_blank">git docs</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
