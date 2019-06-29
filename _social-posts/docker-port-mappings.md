---
layout: social-post
type: "SocialPosts"
title: "Understanding Docker Port Mappings"
cover-image: /assets/images/port-mappings-cover.png
image: /assets/images/.gif
excerpt: "Docker allows you to map ports to what is available (exposed) to the host and what is available to the container."
date: 2019-06-29
categories: [advanced, docker, networking]
instagram-id: 
docs: https://docs.docker.com/compose/compose-file/#ports
---
{:.center}
# {{ page.title }}

{:.post-content}
Docker allows you to map ports to what is available (exposed) to the host and 
what is available to the container. These handy mappings can give you control 
over what is exposed and allow specify specific ports to allow to be accessed. 
If you’re using docker compose the pattern is HOST:CONTAINER, for example “3000:80”

{:.post-content}
The host is the operating system in which the Docker client is running. So, if you 
ssh into a server, you entered the host. The container is what is running on top of
your host, for example if you run a docker run command, the thing that will run 
as a result of that command is the container. Here are some examples of port mappings:

{% highlight yaml %}
ports:
 - "3000"
 - "3000-3005"
 - "8000:8000"
 - "9090-9091:8080-8081"
 - "49100:22"
 - "127.0.0.1:8001:8001"
 - "127.0.0.1:5000-5010:5000-5010"
 - "6060:6060/udp"
{% endhighlight %}

{:.post-content}
Docker recommends to always explicily specify your port mappings as strings because
of the way YAML parses numbers.

{:.post-content}
There is also the long format syntax which allows additional fields to be specified
that can't be expressed in the short form. This is avaialble in docker compose 3.2
version and up.

{% highlight yaml %}
ports:
  - target: 80
    published: 8080
    protocol: tcp
    mode: host
{% endhighlight %}

{:.post-content}
Those speicifications explained:
* target: the port inside the container
* published: the publicly exposed port
* protocol: the port protocol (tcp or udp)
* mode: host for publishing a host port on each node, or ingress for a swarm mode port to be load balanced.

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
