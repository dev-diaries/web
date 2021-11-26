---
layout: social-post
type: "SocialPosts"
title: "Replace All Instances of a String With Sed"
cover-image: /assets/images/replace-ocurences-with-sed.png
image: /assets/images/.gif
excerpt: "Sed, a stream editor is very powerful and can be used to quickly replace all occurrences of a string within a string or file"
date: 2021-11-26
tags: [linux]
categories: [advanced, linux, terminal, cli, sed, alias]
instagram-id:
docs: https://www.gnu.org/software/sed/manual/sed.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Sed, a stream editor is very powerful and can be used to quickly replace all occurrences of a string within a string or file.
Read [intro to sed](/social-posts/intro-to-sed/) to get up to speed.
This type of replacement is useful to quickly refactor or simply rename items in a large codebase right
in the terminal.

{:.post-content}
First, you define the type of file you want to search for the target file in.
Then you take those files found and search for a target string and set the
string you want to replace the target file with.

{% highlight bash %}
find . -type f -name "*.ts" -print0 | xargs -0 sed -i '' -e "s/very/extremely/g"
{% endhighlight %}

{:.post-content}
If the strings have slashes in them be sure to escape them!

{% highlight bash %}
find . -type f -name "*.ts" -print0 | xargs -0 sed -i '' -e "s/all\/shared\/dist\/enums/all\/shared\/dist\/enum/g"
{% endhighlight %}

{:.post-content}
For convenience you can make this into a bash alias which we've talked about in
[bashrc for terminal](/social-posts/bashrc-for-terminal/)

{% highlight bash %}
replaceInFiles () {
	find . -type f -name "$1" -print0 | xargs -0 sed -i '' -e "s/$2/$3/g"
}

# for example
> replaceInFiles '*.md' 'khaliq' 'khaliq-gant'
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>. This <a href="https://linuxize.com/post/how-to-use-sed-to-find-and-replace-string-in-files/" target="_blank">guide</a>
is a good tutorial as well.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
