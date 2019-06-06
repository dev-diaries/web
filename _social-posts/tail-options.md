---
layout: social-post
type: "SocialPosts"
title: "Tail Options For Viewing A File"
cover-image: /assets/images/tail-command-cover.png
image: /assets/images/.gif
excerpt: "Tail is a useful linux command to view the contents of a file."
date: 2019-06-05
categories: [intermediate, linux, files]
instagram-id: ByVgb4QCfyz
docs: http://man7.org/linux/man-pages/man1/tail.1.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Tail is useful to view by default the last 10 lines of a file. If you're viewing
logs or similar, sometimes you only need to see the latest output. Tail to the rescue!
Get familiar with the options to view files efficiently on your local or remote system.

{% highlight bash %}
-f, --follow                cause tail to look forever, checking for new data at the end
                            of the file. If new data appears it will print it.

-n {num}, --lines={num}     Output the last num lines. -n 20 for example. The default is 10.
                            Output the last number of lines
{% endhighlight %}

{:.post-content}
Tail can also output multiple files at once and will output the name of the file 
at the top of the output:

{% highlight bash %}
> tail yarn.lock header.html
==> yarn.lock <==
    get-caller-file "^1.0.1"
    os-locale "^1.4.0"
    read-pkg-up "^1.0.1"
    require-directory "^2.1.1"
    require-main-filename "^1.0.1"
    set-blocking "^2.0.0"
    string-width "^1.0.2"
    which-module "^1.0.0"
    y18n "^3.2.1"
    yargs-parser "^5.0.0"

==> header.html <==
<header class="bg-image grid">
    <div class="col-12 grid">
        <div class="col-12 logo logo--home"></div>
        <p class="col-12 tagline text-center">A dev community</p>
    </div>
</header>
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
