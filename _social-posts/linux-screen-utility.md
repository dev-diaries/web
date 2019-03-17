---
layout: social-post
type: "SocialPosts"
title: "Linux: screen utility"
image: /assets/images/screen-video.gif
cover-image: /assets/images/screen-session-cover.png
excerpt: "If you need to run a long running task on a remote machine and don’t want to worry about the connection dropping, you can use the screen utility. The screen utility allows us to detach from that session and resume whenever we need to."
date: 2019-03-18
categories: [advanced, linux, long-processes]
instagram-id: 
docs: https://linux.die.net/man/1/screen
---
{:.center}
# {{ page.title }}

{:.post-content}
If you need to run a long running task on a remote machine and don’t want to 
worry about the connection dropping, you can use the screen utility. The screen 
utility allows us to detach from that session and resume whenever we need to.

{:.post-content}
Start a new screen by typing in screen -S {name of the session}. 
In our case we’re calling it “my-session”. 

{% highlight bash %}
screen -S my-session
{% endhighlight %}

{:.post-content}
That then takes you to a new session. 
We can then detach from the screen by pressing control + a + d all at the same 
time or screen -d. 

{% highlight bash %}
screen -d
{% endhighlight %}

{:.post-content}
This removes us from that session but keeps whatever was running in that 
session intact and undisturbed. So we can exit the ssh session we’re in and 
there would be no issues. We could then ssh back into the server and resume the 
screen session by typing screen -R {name of the session} and in our case the 
command would be screen -R my-session. Very useful for long running processes 
that we don’t want to get interrupted by a connection dropping.
See the "man pages" <a href="{{page.docs}}" target="_blank">here</a>

{% highlight bash %}
screen -R my-session
{% endhighlight %}

{:.post-content}
Let's see it in action:

{:.image .center}
![screen-usage]({{page.image}})

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}






