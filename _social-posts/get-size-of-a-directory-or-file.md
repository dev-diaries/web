---
layout: social-post
type: "SocialPosts"
title: "Get Size Of A Directory Or File"
cover-image: /assets/images/du-cover.png
image: /assets/images/.gif
excerpt: "Need to get the size of a directory in linux?"
date: 2019-09-05
tags: [cli]
categories: [intermediate, linux, terminal, cli, disk-space, server, storage]
instagram-id: BxwS1y_igOY
docs: https://linux.die.net/man/1/du
---
{:.center}
# {{ page.title }}

{:.post-content}
Need to get the size of a directory in linux? Use the du command to output the size of a file or directory. Use the flags to give a more useful output.

{% highlight bash %}
-s, --summarize         Display only a total for each argument

-h, --human-readable    Print sizes in human readable format, e.g. 1K, 324M

-c, --total             Produce a grand total

-a, --all               write counts for all files, not just directories
{% endhighlight %}

{% highlight html %}
> du -shc images
173M	images
173M	total

> du -sh navigation.gif
116K	navigation.gif
{% endhighlight %}

{:.post-content}
If you want to see which directories are taking up the most room on your system you can
use the `-a` flag and sort by which is taking up the most space:

{% highlight html %}
du -ahm | sort -nr | head
{% endhighlight %}

{:.post-content}
Read more about it the <a href="{{page.docs}}" target="_blank">docs</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
