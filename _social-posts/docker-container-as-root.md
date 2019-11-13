---
layout: social-post
type: "SocialPosts"
title: "Accessing Docker Container As Root"
cover-image: /assets/images/docker-container-as-root-cover.png
image: /assets/images/.gif
excerpt: "On occasion you might need to access your docker container as root. Using docker exec you can do that fairly easily"
date: 2019-11-03
categories: [advanced, docker, containerization]
instagram-id: B4aSY4CF-lE
docs: https://docs.docker.com/engine/reference/run/
---
{:.center}
# {{ page.title }}

{:.post-content}
On occasion you might need to access your docker container as root.
Using docker exec you can do that fairly easily:

{% highlight bash %}
docker exec -u 0 -it mycontainer bash
{% endhighlight %}

{:.post-content}
From the docs it states:
root (id = 0) is the default user within a container. The image developer can
create additional users. Those users are accessible by name. When passing a numeric ID, the user does not have to exist in the container.

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
