---
layout: social-post
type: "SocialPosts"
title: "Back To The Basics: Navigating The Terminal"
cover-image: /assets/images/navigating-the-terminal-cover.png
image: /assets/images/.gif
excerpt: "As a web developer, navigating the terminal should be second nature."
date: 2019-06-09
tags: [cli]
categories: [beginner, terminal, cli, back-to-the-basics]
instagram-id: ByfDyf1Anwt
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
On your local computer, the terminal is an interface where you can type
and execute text based commands. When used correctly it is faster than any GUI
and there are a lot of handy programs and commands that can help your development.

{:.post-content}
Some basic commands that you can use right away to get comfortable and familiar with
the command line are:

{% highlight bash %}
ls          list command, show contents of directory.
cd          change directory.
mv          move a file or a directory. mv [source] [destination]
man         manual pages. man tail, for example will show documentation for tail
mkdir       make directory. create a directory with the name you specify
rmdir       delete a directory.
touch       create a file or if it exists update the last modified date
rm          remove a file
cat         read contents of a file or concatenate multiple files into one output
cp          copy files or directories. cp [source] [destination]
{% endhighlight %}

{:.post-content}
The more you use the command line, the more adept you will become, but if you 
want to get back to your GUI you can run:

{% highlight bash %}
> open .
{% endhighlight %}

{:.post-content}
and that will take you to the same location from your command line to your GUI.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
