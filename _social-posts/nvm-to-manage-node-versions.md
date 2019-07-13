---
layout: social-post
type: "SocialPosts"
title: "Using nvm To Manage Node Versions"
cover-image: /assets/images/installing-nvm-cover.png
image: /assets/images/.gif
excerpt: "Node version manager or nvm is an excellent way to manage multiple node.js versions."
date: 2019-06-15
categories: [advanced, nodejs, linux]
instagram-id: ByusVirCYi5 
docs: https://github.com/nvm-sh/nvm
---
{:.center}
# {{ page.title }}

{:.post-content}
Different projects of node use different versions and being able to switch
back and forth is a necessity. Luckily for us, there is nvm which allows
to change and install different nvm versions easily. Here is how to get started and
some quick commands.

## Installing

{:.post-content}
* Using homebrew:
{% highlight bash %}
brew update
brew install nvm
source $(brew --prefix nvm)/nvm.sh
# Run this to not have to run the shell script on every terminal start
echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.profile
{% endhighlight %}

{:.post-content}
* Use the nvm provided install script
{% highlight bash %}
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
{% endhighlight %}

## Commands

{:.post-content}
* Installing a node version:
{% highlight bash %}
nvm install 10.10.0
{% endhighlight %}

{:.post-content}
* The first installed version becomes the default
* List all available node versions
{% highlight bash %}
nvm ls-remote
{% endhighlight %}

{:.post-content}
* Use a particular version
{% highlight bash %}
nvm use v8.6.0
{% endhighlight %}


## Using a .nvmrc file

{:.post-content}
* You can create a `.nvmrc` file containing a node version and nvm will traverse
the directory structure looking for that file too use that version.

{% highlight bash %}
echo "10.10.0" > .nvmrc
{% endhighlight %}

{:.post-content}
* So then if you run `nvm use`, nvm will find that nvmrc file and switch to the 
node version specified.

{:.post-content}
With <a href="https://github.com/nvm-sh/nvm#deeper-shell-integration" target="_blank">deeper shell integration</a>
you can have your node version change immediately when changing into that directory
that contains a .nvmrc file. This makes changing node versions based on the project
a breeze and totally automated.

{:.post-content}
Read more about <a href="{{page.docs}}" target="_blank">nvm</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
