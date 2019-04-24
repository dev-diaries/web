---
layout: social-post
type: "SocialPosts"
title: "Git Dry Run Option"
cover-image: /assets/images/dry-run-cover.png
image: /assets/images/.gif
excerpt: "Still not 100% confident in your Git foo? You can perform some git operations with a dry-run flag to see what would happen if you were to run the command"
date: 2019-04-24
categories: [intermediate, git]
instagram-id: 
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
Still not 100% confident in your Git foo? You can perform some git operations 
with a dry-run flag to see what would happen if you were to run the command. For instance:

{% highlight bash %}
git add . --dry-run
git clean --dry-run
git commit -m 'some message' --dry-run
{% endhighlight %}

{:.post-content}
Are some commands that you could use with the dry-run flag that could come in handy! 
Now go out there and Git it! 

{:.post-content}
* <a href="https://git-scm.com/docs/git-clean" target="_blank">git-clean docs</a>
* <a href="https://git-scm.com/docs/git-add" target="_blank">git-add docs</a>
* <a href="https://git-scm.com/docs/git-commit" target="_blank">git-commit docs</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
