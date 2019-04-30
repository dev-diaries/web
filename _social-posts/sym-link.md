---
layout: social-post
type: "SocialPosts"
title: "SymLink in Linux"
cover-image: /assets/images/symlinks-cover.png
image: /assets/images/.gif
excerpt: "A SymLink in Linux is a special kind of file that points to an actual file or directory."
date: 2019-04-29
categories: [intermediate, linux, file-system]
instagram-id: Bw2eNhIBAiv
docs: http://man7.org/linux/man-pages/man1/ln.1.html
---
{:.center}
# {{ page.title }}

{:.post-content}
A SymLink in Linux is a special kind of file that points to an actual file or directory, basically a shortcut, 
but a little different as a symlink is an actual pointer to the source file or 
directory. Symlinks can be very useful for example if you want to version files 
you can bump a version app_v2 but just have a symlink that refers app_latest that just references the latest version.

{% highlight bash %}
ln -s /path/to/source /path/to/symlink
{% endhighlight %}

{:.post-content}
Some useful SymLink options are: 

{% highlight bash %}
-f   If the target file already exists, then unlink it and force the link

-n   Useful with the -f option, replace the symlink that might point to a directory
{% endhighlight %}

{:.post-content}
One important thing to remember is that you must use the full path when 
creating symlinks and not the relative paths. For example if you have this as your
filesystem

{% highlight bash %}
> ls
image.png
{% endhighlight %}

{:.post-content}
We want to create another directory (folder) called pics that contains a symlink
to image.png within it.

{% highlight bash %}
> mkdir pics

> ls
image.png
pics
{% endhighlight %}

{:.post-content}
If we tried to symlink just using relative paths the symlink would be broken:

{% highlight bash %}
> ln -s image.png ./pics/image.png
{% endhighlight %}

{:.post-content}
Instead, we should use the full path and in our case we can use the `$PWD`
value which expands to our present working directory:

{% highlight bash %}
> ln -s $PWD/image.png $PWD/pics/image.png
{% endhighlight %}

{:.post-content}
Another option is to actually change directories into the pics directory and create
the symlink from there:

{% highlight bash %}
> cd pics
> ln -s ../image.png image.png
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
