---
layout: social-post
type: "SocialPosts"
title: "Bash Script Error Flag"
cover-image: /assets/images/bash-error-set.png
image: /assets/images/.gif
excerpt: "Bash scripts can be very useful but also very tough to debug. Setting the correct error flag and understanding the behavior can help you out."
date: 2020-03-04
categories: [intermediate, bash, terminal, linux]
instagram-id:
docs: http://linuxcommand.org/lc3_man_pages/seth.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Bash scripts can be very useful but also very tough to debug. Setting the correct error flag and understanding the behavior can help you out.
Adding a flag of `set -e` tells the script to exit immediately if a command exits
with an error status. From `help set`:
{% highlight bash %}
 -e  Exit immediately if a command exits with a non-zero status.
{% endhighlight %}

{:.post-content}
Adding a `set +e` is the default and if the script encounters an error it will
output the error but continue with the script.

{:.post-content}
It should be noted that it is considered better practice to use a `trap` flag
instead of `set -e` so you can call a custom function if a script encounters
an error. This can be accomplished by:
{% highlight bash %}
trap 'handle_error' ERR

function handle_error() {
  # simply output the error
  echo $@
}
{% endhighlight %}



{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a> and a good read
is <a href="http://mywiki.wooledge.org/BashFAQ/105" target="_blank">BashFAQ</a>. In addition
this <a href="https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/" target="_blank">blog post</a> has some really good info on other useful flags.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
