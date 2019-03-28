---
layout: social-post
type: "SocialPosts"
title: "Understanding Linux sequences"
cover-image: /assets/images/linux-sequences-cover-1.png
image: /assets/images/.gif
excerpt: "Linux has some powerful sequence controls that you can use to run processes in different orders, sequentially, in parallel or conditionally."
date: 2019-03-28
categories: [advanced, linux, commands]
instagram-id: 
docs: https://linux.die.net/man/1/bash
---
{:.center}
# {{ page.title }}

{:.post-content}
Linux has some powerful sequence controls that you can use to run processes in 
different orders, sequentially, in parallel or conditionally. 

## Sequence: ";"
{% highlight linux %}
this will throw an error; echo "but this will still run"
{% endhighlight %}

{:.post-content}
Commands seperated by a ; are run sequentially. The shell waits for each command
to terminate before returning. As seen in the gif it doesn't matter if either
command fails or not.

{:.image .center}
![;-gif](/assets/images/;-example.gif)

## Sequence: "&&"
{% highlight linux %}
echo "this will run first" && echo "and then this will run"
this won't run & echo "so this wont run b/c the first command threw an error"
{% endhighlight %}

{:.post-content}
Commands seperated by a && are run one after another and the second command
is only run if the first one returns an exit code of zero aka runs successfully.

{:.image .center}
![&&-gif](/assets/images/&&-example.gif)

## Sequence: "&"
{% highlight linux %}
echo "runs in the background" &
{% endhighlight %}

{:.post-content}
A command with a & at the end of it runs in the background and does not wait
for the command to finish and returns immediately successfully with an exit code
of 0. It returns with an exit code of 0 even if the command itself fails.

{:.image .center}
![;-gif](/assets/images/&-example.gif)

## Sequence: "|"
{% highlight linux %}
echo "passing this to the next command" | cat
{% endhighlight %}

{:.post-content}
The standard output of command1 is sent to the standard input of command2. So in
this example we're using <a href="http://www.linfo.org/cat.html" target="_blank">cat</a>
to output the standard input which is the echo'ed statement.

{:.image .center}
![;-gif](/assets/images/pipe-example.gif)

## Sequence: "||"
{% highlight linux %}
this will fail || echo "but this will run bc the first command failed"
{% endhighlight %}

{:.post-content}
The command after the || is executed only if the command before the || returns 
a non-zero status aka it errors. It is akin to an OR operator.

{:.image .center}
![;-gif](/assets/images/double-pipe.gif)

## Sequence: "|&"
{% highlight linux %}
echo "similar to | but also shows the error" |& cat
{% endhighlight %}

{:.post-content}
Is shorthand for 2>&1 | which means the standard output and standard error of 
the command are sent to via the pipe to the following command.

{:.image .center}
![amp-gif](/assets/images/amp-example.gif)


{:.post-content}
Read more about <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
