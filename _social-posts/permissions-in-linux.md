---
layout: social-post
type: "SocialPosts"
title: "Understanding Permissions In Linux"
cover-image: /assets/images/permission-sections-cover.png
image: /assets/images/.gif
excerpt: "777, 755, 750...Wonder what these numbers are?"
date: 2019-04-13
tags: [linux]
categories: [intermediate, linux, permissions]
instagram-id: BwMR_ZZhCn1
docs: https://help.ubuntu.com/community/FilePermissions
---
{:.center}
# {{ page.title }}

{:.post-content}
777, 755, 750...Wonder what these numbers are? Security access in unix operating 
systems is controlled by a set of permissions which determine the action that 
can be performed and the permission group. 

{:.image .center}
![sections](/assets/images/permission-sections-cover.png)

{:.image .center}
![numbers](/assets/images/permission-numbers-cover.png)

{:.image .center}
![numbers](/assets/images/permission-numbers-explained.png)

{:.post-content}
A useful bash alias I have is the octal command:
{% highlight bash %}
octal () {
    stat -f "%Sp %OLp" $1
}
{% endhighlight %}

{:.post-content}
This will output the octal number permissions in addition to the symbolic permissions.
(Spaces added for clarity)

{% highlight bash %}
server:~$ ls -ll
d rwx r-x r-x 4 root   root   4096 Mar  4 17:56 data

server:~$ octal data
d rwx r-x r-x 755
{% endhighlight %}

{:.post-content}
* Read the <a href="{{page.docs}}" target="_blank">Ubuntu docs</a>
* Good overview from <a href="https://www.linux.com/learn/understanding-linux-file-permissions" target="_blank">linux.com</a>
* Quick overview of chmod from <a href="http://www.thinkplexx.com/learn/article/unix/command/chmod-permissions-flags-explained-600-0600-700-777-100-etc" target="_blank">thinkplexx.com</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
