---
layout: social-post
type: "SocialPosts"
title: "Linux rm Command"
cover-image: /assets/images/rm-cover.png
image: /assets/images/.gif
excerpt: "Using the “rm” linux command allows you to delete a file or a directory"
date: 2019-05-15
categories: [intermediate, linux, removal, file-system, system-management]
instagram-id: 
docs: http://man7.org/linux/man-pages/man1/rm.1.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Using the “rm” linux command allows you to delete a file or a directory. 
Knowing the options will help you in the long run and might prevent you from 
removing your entire hard drive! 

{:.post-content}
Check the `rm` options:

{% highlight bash %}
-r      Recursive. Deletes directories as well as files

-f      Force remove without prompt.

-i      Interactively delete each file. Useful if you want to check before you remove!
{% endhighlight %}

{:.post-content}
Some examples would be:

{% highlight bash %}
# force delete a directory
rm -rf some-directory

# interactive
rm -i some-file-not-sure-about
{% endhighlight %}

{:.post-content}
It might be useful to add in a `trash` command that you can use which will 
place items in a trash which is an extra step before the files or directories
are removed permanently:

{% highlight bash %}
# mac os
trash() { mv -fv "$@" ~/.Trash/ ; }

# linux
alias trash='mkdir -p "$HOME/.trash" && mv -b -t "$HOME/.trash"'
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">the rm manual pages</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
