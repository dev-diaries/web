---
layout: social-post
type: "SocialPosts"
title: "Copy A File To Multiple Sources With tee"
cover-image: /assets/images/tee-copy-command-cover.png
image: /assets/images/.gif
excerpt: "Ever wanted to copy a file to multiple sources in the command line all in one command? You can use the linux tee command."
date: 2019-05-06
categories: [advanced, linux, file-system]
instagram-id: BxHFkJVBmog
docs: http://man7.org/linux/man-pages/man1/tee.1.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Ever wanted to copy a file to multiple sources in the command line all in one command? You can use the linux tee command.
By definition, tee command can read from standard input and write to standard output and files.
The linux command `cp` is great to make a straight forward and simple copy, but
`tee` can write to several locations at once:

{% highlight bash %}
> ls
file.txt

> mkdir dir-1 dir-2

> ls
dir-1    dir-2    file.txt

> tee dir-1/file.txt dir-2/file.txt < file.txt

> ls dir-1
file.txt

> ls dir-2
file.txt
{% endhighlight %}

{:.post-content}
In the above commands, we first make two directories, dir-1 and dir-2 which
are going to be empty. We this use `tee` to copy file.txt into both
of those directories. Just a note that `tee` also writes to the standard output as
well, so to prevent that you can redirect standard output to `/dev/null`
like so:

{% highlight bash %}
> tee dir-1/file.txt dir-2/file.txt < file.txt > /dev/null
{% endhighlight %}

{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about it here in the <a href="{{page.docs}}" target="_blank">man (manual) pages</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
