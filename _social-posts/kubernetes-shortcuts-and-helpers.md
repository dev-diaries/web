---
layout: social-post
type: "SocialPosts"
title: "Kubernetes Shortcuts & Helpers"
cover-image: /assets/images/cli-shortcuts.png
image: /assets/images/.gif
excerpt: "If you work in CLI often enough you know how helpful it is to have shortcuts to both save time and key strokes. Check out these for kubernetes"
date: 2020-07-28
tags: [kubernetes]
categories: [intermediate, kubernetes, devops, efficiency, oh-my-zsh, zsh, homebrew, terminal, cli]
instagram-id:
docs:
---
{:.center}
# {{ page.title }}

{:.post-content}
If you work in CLI often enough you know how helpful it is to have shortcuts to both save time and key strokes.
<a href="https://github.com/ahmetb/kubectx" target="_blank">kubectx</a> is a utility to manage and quickly switch between kubectl contexts.

{% highlight bash %}
USAGE:
  kubectx                   : list the contexts
  kubectx <NAME>            : switch to context <NAME>
  kubectx -                 : switch to the previous context
  kubectx -c, --current     : show the current context name
  kubectx <NEW_NAME>=<NAME> : rename context <NAME> to <NEW_NAME>
  kubectx <NEW_NAME>=.      : rename current-context to <NEW_NAME>
  kubectx -d <NAME>         : delete context <NAME> ('.' for current-context)
                              (this command won't delete the user/cluster entry
                              that is used by the context)
  kubectx -u, --unset       : unset the current context
{% endhighlight %}

{:.post-content}
<a href="https://github.com/ahmetb/kubectx#kubens1" target="_blank">kubens</a> is a utility to manage and quickly switch between Kubernetes namespaces.
{% highlight bash %}
USAGE:
  kubens                    : list the namespaces
  kubens <NAME>             : change the active namespace
  kubens -                  : switch to the previous namespace
  kubens -c, --current      : show the current namespace
{% endhighlight %}

{:.post-content}
You can install both with <a href="https://brew.sh/" target="_blank">Homebrew</a>
{% highlight bash %}
brew install kubectx
{% endhighlight %}

{:.post-content}
If you use <a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank">ohmyzsh</a>
the <a href="https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kubectl" target="_blank">kubectl plugin</a>
adds a ton of aliases to allow you to type less and move faster.

{:.post-content}
Lastly <a href="https://github.com/jonmosco/kube-ps1" target="_blank">kube-ps1</a>
is a useful script that displays the current Kubernetes context and namespace
on your Bash/Zah prompt strings. Install via <a href="https://brew.sh/" target="_blank">Homebrew</a>:

{% highlight bash %}
$ brew update
$ brew install kube-ps1
{% endhighlight %}


{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
