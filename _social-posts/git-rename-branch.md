---
layout: social-post
type: "SocialPosts"
title: "Git: rename a branch"
image: /assets/images/git-branch-rename.png
excerpt: "Named your git branch incorrectly? You can quickly rename a branch by using the -m flag"
date: 2019-03-21
categories: [intermediate, git]
instagram-id: BvRsM1MDuzG
docs: https://git-scm.com/docs/git-branch
---
{:.center}
# {{ page.title }}

{:.post-content}
If you’re currently on that branch you can rename it using:

{% highlight git %}
git branch -m my-new-name
{% endhighlight %}

{:.post-content}
Otherwise if you’re not on that branch use:

{% highlight git %}
git branch -m old-name my-new-name
{% endhighlight %}

{:.post-content}
If you like bash/zsh aliases you can make it so the name you pass in is dynamic
and make a generic command for renaming a branch:

{% highlight git %}
alias grm="git branch -m $1"
{% endhighlight %}

{:.post-content}
If you like bash/zsh aliases you can make it so the name you pass in is dynamic.
Read more about git branch flags <a href="{{page.docs}}" target="_blank">here.</a>
Read more about bash aliases <a href="http://tldp.org/LDP/abs/html/aliases.html" target="_blank">here.</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}




