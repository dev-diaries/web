---
layout: social-post
type: "SocialPosts"
title: "Local Web Server With Python"
cover-image: /assets/images/local-web-server.png
image: /assets/images/.gif
excerpt: "Need a quick and easy server on your local computer? Look no further than Python’s SimpleHTTPServer."
date: 2019-06-19
categories: [intermediate, python, web-server]
instagram-id: By51Miei9Vp
docs: https://docs.python.org/2/library/simplehttpserver.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Need a quick and easy server on your local computer? Look no further than Python’s SimpleHTTPServer.
You can run a quick command and have a functioning web server to serve files that your browser can read.

{:.post-content}
In your shell you can run:

{% highlight bash%}
# Python 3
python3 -m http.server

# Python 2
python -m SimpleHTTPServer
{% endhighlight %}

{:.post-content}
After running, you'll see the following:

{% highlight bash %}
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)
{% endhighlight %}

{:.post-content}
If you then open up your browser at that address you'll be able to see the output
of your local server. So let's say you have a file called index.html in a folder that has some content, "Hello World" for example. 
You then navigate to your terminal and from the directory that index.html is in you run `python -m SimpleHTTPServer`

{:.post-content}
Navigating to http://localhost:8000 or http://0.0.0.0:8000/ will show you the contents
of index.html so you'll see "Hello World" from your browser.

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">Python's simple web server</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
