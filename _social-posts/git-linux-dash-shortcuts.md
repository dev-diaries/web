---
layout: social-post
type: "SocialPosts"
title: "Git & Linux Dash Shortcuts"
cover-image: /assets/images/git-dash-co-cover.png
image: /assets/images/dash-shortcuts.gif
excerpt: "Using the - in linux and git can speed up your workflow and allow you to type less."
date: 2019-04-09
categories: [intermediate, git, linux, shortcuts, efficiency]
instagram-id: 
docs: https://helpmanual.io/builtin/cd/
---
{:.center}
# {{ page.title }}

{:.post-content}
Using the - in linux and git can speed up your workflow and allow you to type 
less. In later versions of git, using the - character resolves to the last branch. 
So if you were just on a feature branch, then switch to master, you can merge 
in that feature branch by typing “git merge -”. In #linux the - resolves to 
$OLDPWD so if you’re navigating and want to go back to the last directory, you can just type “cd -”.

{% highlight bash %}
(feature-123) $ git checkout master
(master)      $ git checkout -
(feature-123) $

> pwd
/foo
> cd bar
> cd -
/foo
{% endhighlight %}

{:.image .center}
![gif-example]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
