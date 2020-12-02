---
layout: social-post
type: "SocialPosts"
title: "See System Disk Space Usage"
cover-image: /assets/images/server-space-cover.png
image: /assets/images/.gif
excerpt: "Running out of space on your server? Quickly see how much space you have left with this command..."
date: 2019-09-07
tags: [linux]
categories: [intermediate, linux, terminal, cli, disk-space, server, storage]
instagram-id: B2GyJRXC2bk
docs: http://linuxcommand.org/lc3_man_pages/df1.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Running out of space on your server? To get an overview of how much space you
have on your machine you can use the handy `df` linux command which reports file system disk space usage.

{% highlight bash %}
-h, --human-readable    Print sizes in human readable format, e.g. 1K, 324M

--block-size=           Show the usage in the block size specified, e.g. --block-size=GB
{% endhighlight %}

{:.post-content}
If you want to display the output in megabytes or gigabytes you can do the following

{% highlight bash %}
# display in megabytes
df -h --block-size=1MB

# display in gigabytes
df -h --block-size=1GB
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
