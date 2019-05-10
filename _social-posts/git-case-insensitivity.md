---
layout: social-post
type: "SocialPosts"
title: "Git: Set Case Sensivity In Mac OS X"
cover-image: /assets/images/case-sensitivty-cover.png
image: /assets/images/case-insensitive.gif
excerpt: "If you’re on Mac OS X save yourself some time and change your git configuration to be case sensitive on filenames"
date: 2019-05-09
categories: [advanced, git, mac, file-system]
instagram-id: BxQE2Ouh0ql
docs: https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreignoreCase
---
{:.center}
# {{ page.title }}

{:.post-content}
Since Mac OS X uses a case insensitive (but case preserving) file system if you’re 
on Mac OS X save yourself some time and change your git configuration to be case 
sensitive on filenames. Otherwise the problem as seen below in the gif will happen.

{:.image .center}
![git-issue]({{page.image}})

{:.post-content}
You can set this in your git global config like so:

{% highlight html %}
git config --global core.ignorecase false
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
