---
layout: social-post
type: "SocialPosts"
title: "Copying & Pasting In CLI With pbcopy & pbpaste"
cover-image: /assets/images/linux-pbcopy-pbpaste-cover.png
image: /assets/images/.gif
excerpt: "Need to copy some value from the command line or want to paste?"
date: 2019-05-29
categories: [intermediate, cli, terminal, shortcuts]
instagram-id: 
docs: http://osxdaily.com/2007/03/05/manipulating-the-clipboard-from-the-command-line/
---
{:.center}
# {{ page.title }}

{:.post-content}
The pbcopy and pbpaste are very handy commands to copy from the clipboard buffer 
or paste into standard out. Having a good control of these commands can make 
your workflow even more efficient.

{:.post-content}
Using the pipe command ([need a refresher on the pipe command?](/social-posts/linux-sequences/))
you can copy output directly from a source right into your clipboard:

{% highlight bash %}
curl -s https://my-json-server.typicode.com/typicode/demo/comments | pbcopy
{% endhighlight %}

{:.post-content}
If you use something like jq (we wrote about it [here](/social-posts/jq-introduction/))
you can take some JSON and format it all in one command:

{% highlight bash %}
function copyJson() {
    pbpaste | jq '.' $@ | pbcopy
}
{% endhighlight %}

{:.post-content}
The above command take any JSON in your clipboard, put it into a pretty format
and copy it back to your clipboard, so it will make this:

{% highlight javascript %}
[{"id":1,"body":"some comment","postId":1},{"id":2,"body":"some comment","postId":1}]
{% endhighlight %}

{:.post-content}
Look like this:

{% highlight javascript %}
[
  {
    "id": 1,
    "body": "some comment",
    "postId": 1
  },
  {
    "id": 2,
    "body": "some comment",
    "postId": 1
  }
]
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
