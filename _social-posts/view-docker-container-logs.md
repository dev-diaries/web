---
layout: social-post
type: "SocialPosts"
title: "View Docker Container Logs"
cover-image: /assets/images/docker-logs-cover.png
image: /assets/images/.gif
excerpt: "You can access the logs of your docker container by using the name or the  id of the container and using the logs command."
date: 2019-04-20
categories: [advanced, docker, logs, containerization]
instagram-id: 
docs: https://docs.docker.com/engine/reference/commandline/logs/
---
{:.center}
# {{ page.title }}

{:.post-content}
You can access the logs of your docker container by using the name or the  id of the container and using the logs command.
First find the container name or id with docker ps:

{% highlight linux %}
docker ps

CONTAINER ID        IMAGE           COMMAND                CREATED             STATUS              PORTS                           NAMES
78122b26a3b5        my-image        "python app.py"        17 hours ago        Up 17 hours         443/tcp, 0.0.0.0:1000->80/tcp   my-py-image
4e7568d83e94        my-image-2      "node dist/server.js   17 hours ago        Up 17 hours         0.0.0.0:3001->3000/tcp          my-node-image
{% endhighlight %}

{:.post-content}
Then you can show all logs since a particular date and time:

{% highlight linux %}
docker logs my-py-image --since 2019-04-05T12:00
{% endhighlight %}

{:.post-content}
You can get a straming output of the logs with the -f flag or --follow

{% highlight linux %}
docker logs my-py-image -f
docker logs my-py-image --follow
{% endhighlight %}

{:.post-content}
You can also combine the logs with a search, for example to find errors:

{% highlight linux %}
docker logs my-py-image | grep -i error
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
