---
layout: social-post
type: "SocialPosts"
title: "Git rev parse Uses"
cover-image: /assets/images/rev-parse-cover.png
image: /assets/images/.gif
excerpt: "Git has an endless bags of tricks and git rev-parse is no different. It can be used to output some useful information about your Git repo."
date: 2019-06-17
tags: [git]
categories: [advanced, git]
instagram-id: By0oohpCk5R
docs: https://git-scm.com/docs/git-rev-parse
---
{:.center}
# {{ page.title }}

{:.post-content}
Git has an endless bags of tricks and git rev-parse is no different. It can be used to output some useful information about your Git repo.

{% highlight git %}
show the current branch name                git rev-parse --abbrev-ref HEAD
show the root directory where git operates  git rev-parse --show-toplevel
{% endhighlight %}

{:.post-content}
A useful bash alias I have to navigate to the root of my project is

{% highlight bash %}
alias root='cd "`git rev-parse --show-toplevel`"'
{% endhighlight %}

{:.post-content}
When typing `root` it automatically takes me to the root of my project.

{:.post-content}
Read more about <a href="{{page.docs}}" target="_blank">git rev-parse</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
