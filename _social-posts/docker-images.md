---
layout: social-post
type: "SocialPosts"
title: "Docker Images Intro"
cover-image: /assets/images/docker-images-cover.png
image: /assets/images/.gif
excerpt: "Docker containers are portable encapsulations of an environment to run applications. To run a container you need a Docker image. So, what is a docker image?"
date: 2019-07-25
tags: [docker]
categories: [intermediate, docker, storage, containers]
instagram-id: B0WcjUDnJmf
docs: https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/
---
{:.center}
# {{ page.title }}

{:.post-content}
Docker containers are portable encapsulations of an environment to run applications.
To run a container you need a Docker image. So, what is a docker image? It is
an image is the specification or blueprint for creating a container. An image
is really an immutable file, are built when the build command is run, and
they produce a container when started with run. If you picture an image as a class,
then the container is an instance of that class.

{:.post-content}
The docker cli gives you some commands out of the box to manage and inspect
docker images:

{% highlight bash %}
# list most recently created images
> docker images
REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
<none>                <none>              8230cfbfab95        45 seconds ago      354MB

# delete a particular docker image. Replace 8230cfbfab95 with the image id
> docker rm 8230cfbfab95

# List all images with repository and their tag in a table format
> $ docker images --format "table {% raw%}{{.ID}}\t{{.Repository}}\t{{.Tag}} {% endraw %}"
IMAGE ID            REPOSITORY                TAG
77af4d6b9913        <none>                    <none>
{% endhighlight %}


{:.post-content}
Read more about <a href="{{page.docs}}" target="_blank">Docker images</a>.
Read more about the <a href="https://docs.docker.com/engine/reference/commandline/images/" target="_blank">docker cli images commands</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
