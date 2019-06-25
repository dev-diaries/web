---
layout: social-post
type: "SocialPosts"
title: "Using Linux History"
cover-image: /assets/images/history-cover.png
image: /assets/images/.gif
excerpt: "One really nice feature of Linux is its ability to maintain a history of the commands you typed in."
date: 2019-06-25
categories: [intermediate, linux, terminal]
instagram-id: 
docs: https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html
---
{:.center}
# {{ page.title }}

{:.post-content}
One really nice feature of Linux is its ability to maintain a history of the 
commands you typed in. Its like a little journal of your linux journey and you 
can easily access and browse with some handy commands. There are some commands 
that you’ll run often and being able to reference those can be extremely useful. 
We've written about leveraging your history before in our article [terminal history 
auto suggestions as you type with oh my zsh](/blog/terminal-history-auto-suggestions-as-you-type/)
so we're big fans of being efficient and reusing commands in our terminal.
Let's check out some info about history:

{:.post-content}
Simply typing `history` will show you a list of all your executed commands in linux.

{% highlight html %}
> history
1 ls
2 cd ../
3 man ls
4 clear
5 ggpush
{% endhighlight %}

{:.post-content}
A very quick tip is to use the pipe (written about [here](/social-posts/linux-sequences/))
to be able to search on what the history output shows us:

{% highlight html %}
> history | grep 'ls'
1 ls
2 man ls
{% endhighlight %}

{:.post-content}
We use <a href="https://github.com/BurntSushi/ripgrep" target="_blank">ripgrep</a>
which is an extremely fast and easy to use search tool so our search would be:

{% highlight html %}
> history | rg 'ls'
{% endhighlight %}

{:.post-content}
If you want to customize how your history output displays, linux gives you some
options you can specify to change the display:

{% highlight html %}
export HISTTIMEFORMAT="%F %T: "

# %F Equivalent to %Y - %m - %d
# %T Replaced by the time ( %H : %M : %S )
{% endhighlight %}

{:.post-content}
You would specify this in your .bashrc or your .bash_profile.
You can also set an option to ignore duplicate commands in your history:

{% highlight html %}
export HISTCONTROL=ignoredups
{% endhighlight %}

{:.post-content}
Set the number of commands stored in your history with the HISTSIZE variable:

{% highlight bash %}
export HISTSIZE=50000
{% endhighlight %}

{:.post-content}
See a list of other bash variables <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
