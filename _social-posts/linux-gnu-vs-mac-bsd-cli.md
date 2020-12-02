---
layout: social-post
type: "SocialPosts"
title: "Linux (GNU) vs. Mac (BSD) Command Line Utility Differences"
cover-image: /assets/images/gnu-vs-bsd.png
image: /assets/images/.gif
excerpt: "If you switch between Mac and Linux often you notice that certain command line utilities are sometimes slightly different..."
date: 2020-08-20
tags: [linux]
categories: [intermediate, cli, terminal, mac, linux, terminal, date, xargs, bsd, gnu]
instagram-id:
docs:
---
{:.center}
# {{ page.title }}

{:.post-content}
If you switch between Mac and Linux often you notice that certain command line utilities are sometimes slightly different...
For example the `date` command on linux:

{% highlight bash %}
> date -d "yesterday"
Wed Aug 19 10:41:26 UTC 2020
{% endhighlight %}

{:.post-content}
Outputs the date while on mac:

{% highlight bash %}
> date -d "yesterday"
usage: date [-jnRu] [-d dst] [-r seconds] [-t west] [-v[+|-]val[ymwdHMS]] ...
            [-f fmt date | [[[mm]dd]HH]MM[[cc]yy][.ss]] [+format]
{% endhighlight %}

{:.post-content}
Gives the above syntax error. On Mac you would need to write:

{% highlight bash %}
date -v -1d
{% endhighlight %}

{:.post-content}
Alternatively you could install <a href="https://www.gnu.org/software/coreutils/" target="_blank">coreutils</a> package which will add the
some packages specifically the `date` utility under the `gdate` command. As this
<a href="https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities" target="_blank">StackOverflow</a>
answer says you can install other GNU utilities on Mac using Homebrew:

{% highlight bash %}
brew install coreutils findutils gnu-tar gnu-sed gawk gnutls gnu-indent gnu-getopt grep
{% endhighlight %}

{:.post-content}
As you use CLI utilities you'll notice small differences such as with `xargs` on mac
the `--no-run-if-empty` or `-r` flag doesn't exist because as this <a href="https://stackoverflow.com/questions/48055129/is-xargs-on-macos-not-the-same-as-linux" target="_blank">StackOverflow</a>
answer says the BSD xargs command doesn't automatically run even if no args are passed.

{:.post-content}
See the <a href="https://www.freebsd.org/cgi/man.cgi?linux" target="_blank">BSD man(ual) pages</a> and the <a href="https://man7.org/linux/man-pages/dir_section_1.html" target="_blank">GNU man(ual) pages</a>.
This <a href="https://ponderthebits.com/2017/01/know-your-tools-linux-gnu-vs-mac-bsd-command-line-utilities-grep-strings-sed-and-find/" target="_blank">post</a>
gives a good overview and comparison of GNU vs. BSD.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
