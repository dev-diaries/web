---
layout: social-post
type: "SocialPosts"
title: "Bashrc For Terminal"
cover-image: /assets/images/bashrc-cover.png
image: /assets/images/.gif
excerpt: "If you spend a lot of time in the terminal you’ll find that you write some commands very often. It is a good idea to add some shortcuts to some commands so that you can do less typing and be more efficient in your command line interface (cli)"
date: 2019-07-07
tags: [bash]
categories: [intermediate, terminal, cli, shortcuts, aliases, bash, efficiency]
instagram-id: Bzn5kXrCZeN
docs: https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html
---
{:.center}
# {{ page.title }}

{:.post-content}
If you spend a lot of time in the terminal you’ll find that you write some 
commands very often. It is a good idea to add some shortcuts to some commands 
so that you can do less typing and be more efficient in your command line interface 
(cli). Using a .bashrc you can set some aliases for commands to save yourself some time.

{:.post-content}
`.bashrc` is a <a href="https://en.wikipedia.org/wiki/Shell_script" target="_blank">shell script</a> 
that Bash runs whenver it is started interactively. If you have some aliases
in your bashrc file they'll be available to you to use in your cli.
The first thing you'll want to do is to make sure your .bashrc file is getting loaded.
If you're running a mac, it is quite possible that you don't have a .bashrc
file, but have a .bash_profile file which gets loaded and is a login shell. Your
bash_profile should have a line like this:

{% highlight bash %}
if [ -f ~/.bashrc ]; then 
    . ~/.bashrc; 
fi
{% endhighlight %}

{:.post-content}
If you don't have that line be sure to add it. That way you can consolidate all 
your commands into your .bashrc file. Now you can add some handy aliases to
your .bashrc file:

{% highlight bash %}
# colorize grep output
alias grep='grep --color=auto -n'
alias c='clear'
alias back='cd -'
alias ..='cd ..'
alias ...='cd ../../'
alias reload='source .bash_profile'
# start a new branch
alias new='git checkout -b'
# remove all the annoying .DS_Store files
alias cleanup="find . -type f -name '*.DS_Store' -ls -delete"
{% endhighlight %}

{:.post-content}
I highly recommend you check out <a href="https://ohmyz.sh/" target="_blank">Oh My Zsh</a>
and also our post [Terminal History Auto Suggestions As You Type With Oh My Zsh](/blog/terminal-history-auto-suggestions-as-you-type/).
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
