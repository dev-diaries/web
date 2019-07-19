---
layout: social-post
type: "SocialPosts"
title: "Introduction To Homebrew"
cover-image: /assets/images/homebrew-install-cover.png
image: /assets/images/.gif
excerpt: "If you’re working on a mac as a developer you might have come across Homebrew."
date: 2019-07-19
categories: [intermediate, brew, homebrew, package-manager, mac, osx, packages, utilities]
instagram-id:
docs: https://brew.sh/
---
{:.center}
# {{ page.title }}

{:.post-content}
If you’re working on a mac as a developer you might have come across Homebrew.
Homebrew is a very popular and well supported package manager for mac. It <a href="https://brew.sh/" target="_blank">states</a>
“installs the stuff you need that Apple (or your Linux system) didn’t”.

{:.post-content}
To install Homebrew you can run the command in your terminal:

{% highlight bash %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

{:.post-content}
After it finishes, it might take a while you can install packages with `brew install`.
For example to install <a href="https://github.com/BurntSushi/ripgrep#installation" target="_blank">ripgrep</a>

{% highlight bash %}
brew install ripgrep
{% endhighlight %}

{:.post-content}
Homebrew comes with some other useful commands that help making it to use and manage
a bit easier. A formula is a package written in ruby - so think of a formula as the
process by which you can install a package.

{% highlight bash %}
# show help info
brew help

# check system for potential problems
brew doctor

# Fetch latest version of homebrew and formula
brew update

# Show formulae with an updated version available
brew outdated

# Upgrade all outdated and unpinned brews
brew upgrade

# Upgrade only the specified brew
 brew upgrade <formula>

# Remove older versions of install formulae
brew cleanup
{% endhighlight %}

{:.post-content}
You might also want to check out <a href="https://github.com/Homebrew/homebrew-cask" target="_blank">homebrew cask</a>
which makes it very easy to install and manage applications.
Read more about <a href="{{page.docs}}" target="_blank">homebrew</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
