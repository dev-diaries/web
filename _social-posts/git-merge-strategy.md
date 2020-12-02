---
layout: social-post
type: "SocialPosts"
title: "Git Merge Preference"
cover-image: /assets/images/git-merge-ours-cover.png
image: /assets/images/.gif
excerpt: "Have a messy git merge, but know that one branch is ahead of the other and it should override the other?"
date: 2019-04-02
tags: [git]
categories: [advanced, git, merge]
instagram-id: BvvxJS8hCFE
docs: https://git-scm.com/docs/git-merge
---
{:.center}
# {{ page.title }}

{:.post-content}
Have a messy git merge, but know that one branch is ahead of the other and it 
should override the other? Use the merge -X strategy-option flag to tell it to 
show preference to ours, the current branch we’re on, or theirs, the branch we’re merging in.
We can avoid having to resolve conflicts as git will intelligently do it for us
using the strategy we passed in.

{:.post-content}
In this example the branch we're on in the event of a conflict will be chosen
as the code to bring in and there won't be any conflict as git will resolve it for us.

{% highlight git %}
git merge -X ours abc
{% endhighlight %}

{:.post-content}
In this example the branch we're merging in (abc) the event of a conflict will be chosen
as the code to bring in and there won't be any conflict as git will resolve it for us.
{% highlight git %}
git merge -X theirs abc
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
