---
layout: social-post
type: "SocialPosts"
title: "Git: What Changed"
cover-image: /assets/images/git-changes-since-cover.png
image: /assets/images/.gif
excerpt: "Been off a project for a while and need to see what has changed in the last week in git while you’ve been away?"
date: 2019-05-17
tags: [git]
categories: [advanced, git]
instagram-id: BxkkKkvg01p
docs: https://git-scm.com/docs/git-log#_commit_limiting
---
{:.center}
# {{ page.title }}

{:.post-content}
Been off a project for a while and need to see what has changed in the last week 
in git while you’ve been away? This quick command will catch you up! 

{% highlight html %}
git log --no-merges --raw --since='1 week ago'
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
