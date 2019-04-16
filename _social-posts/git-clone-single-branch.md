---
layout: social-post
type: "SocialPosts"
title: "Git Clone A Single Branch"
cover-image: /assets/images/git-clone-single-branch-cover.png
image: /assets/images/.gif
excerpt: "Have a large git repo that you need to clone, but only need to clone one branch?"
date: 2019-04-16
categories: [advanced, git, branching]
instagram-id: BwU82p8B2Q6
docs: https://git-scm.com/docs/git-clone
---
{:.center}
# {{ page.title }}

{:.post-content}
Have a large git repo that you need to clone, but only need to clone one branch? 
Instead of bringing down the entire repo you can specify just one branch to clone on your local repository.

{% highlight bash %}
git clone --single-branch -b master git@github.com:dev-diaries/web.git
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
