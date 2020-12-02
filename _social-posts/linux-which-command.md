---
layout: social-post
type: "SocialPosts"
title: "Linux Which Command"
cover-image: /assets/images/which-cover.png
image: /assets/images/.gif
excerpt: "Sometimes in linux you need to know if you have a program/utility installed and maybe even where it is installed."
date: 2019-09-30
tags: [linux]
categories: [intermediate, linux, terminal]
instagram-id: B3DATn8F-0c
docs: https://linux.die.net/man/1/which
---
{:.center}
# {{ page.title }}

{:.post-content}
Sometimes in linux you need to know if you have a program/utility installed and
maybe even where it is installed. Since [homebrew](/social-posts/homebrew-introduction/) installs programs in a different
place than a global installation. The which command in linux can quickly tell
you if a program is installed and where.

{:.post-content}
The which command knows where to search for the executable program by what is specified
with the `PATH` environment variable.

{:.post-content}
We can check if we have an application:

{% highlight bash %}
> which top
/usr/bin/top

# we installed jq via homebrew so it is a different place
> which jq
/usr/local/bin/jq

# there is no linux utility named dev-diaries (yet!) so this won't show anything
> which dev-diaries
dev-diaries not found
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
