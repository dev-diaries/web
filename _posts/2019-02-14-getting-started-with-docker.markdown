---
layout: post
title:  "Getting started with docker"
date:   2019-02-14 11:13:12 +0800
type: "GettingStarted"
image: /assets/images/docker.png
tags: [docker]
excerpt: "Docker: the containerization you can't seem to escape. Docker can allow you great power and flexibility to make your application light weight portable. But wait, what exactly is docker? And how can you get started with Docker? Let's set out to figure those things out."
categories: [getting-started, docker, advanced, containerization]
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
Docker: the containerization you can't seem to escape. Docker can allow you great
power and flexibility to make your application light weight portable. But wait,
what exactly is docker? And how can you get
started with Docker? Let's set out to figure those things out.

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite guides

{:.resources-content}
* [Docker for beginners](https://docker-curriculum.com/)
* [Official Docker getting started guide](https://docs.docker.com/get-started/)
</div>

{:.image .center}
![docker image]({{page.image}})

## What is it?

{:.post-content}
Docker allows you to package and ship your application in a standardized
and consistent format. Get the shipping references yet? Running an application
with docker allows you to start it with a single command and that command
can be consistent for your local and production environments.


## Install

{:.post-content}
If you're on a mac you can head over to the Docker [Install Docker Desktop For Mac](https://docs.docker.com/docker-for-mac/install/)
page as that is the easiest way to get Docker setup on your computer. If you've followed
the steps successfully and have it up and running, inputting:
{% highlight bash %}
docker ps
{% endhighlight %}
{:.post-content}
into your terminal should give you an output something like this:
{% highlight bash %}
CONTAINER ID      IMAGE           COMMAND       CREATED         STATUS         PORTS          NAMES
{% endhighlight %}
{:.post-content}
If you're running linux, depending on the flavor you'll have to run a few commands
to get it installed successfully. Each flavor's installation insturctions can be found on
the Docker website:

{:.links}
* [CentOs](https://docs.docker.com/install/linux/docker-ce/centos/)
* [Debian](https://docs.docker.com/install/linux/docker-ce/debian/)
* [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)
* [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

## Ship

{:.post-content}
Now that you have docker up and running you can download an image and get an
example application running. We're going to get an application running that
outputs "hello world", because programming 😏. Docker can run certain images,
and for our case we're going to run a `helloworld` image that can be found
[here](https://hub.docker.com/r/karthequian/helloworld). In our terminal let's run:

{% highlight bash %}
docker run -p 8080:80/tcp "karthequian/helloworld:latest"
{% endhighlight %}

{:.post-content}
Assuming you haven't run this image before, you should see some output where Docker
is telling you that it is downloading this image locally since we've never run it before:
{% highlight bash %}
docker run -p 8080:80/tcp "karthequian/helloworld:latest"
Unable to find image 'karthequian/helloworld:latest' locally
latest: Pulling from karthequian/helloworld
a48c500ed24e: Pull complete
1e1de00ff7e1: Pull complete
0330ca45a200: Pull complete
471db38bcfbf: Pull complete
0b4aba487617: Pull complete
2bd49a132601: Pull complete
5362daacd428: Pull complete
94ed5269e212: Pull complete
ed49b204722b: Pull complete
60559f524e45: Pull complete
972c24a530a9: Pull complete
00cb44f46fd2: Pull complete
f617daf8ea6a: Pull complete
Digest: sha256:745af01b498d71c954dd3f11930918800de1bd89182b7415809a21d194872e88
Status: Downloaded newer image for karthequian/helloworld:latest
{% endhighlight %}

{:.post-content}
Once it finishes downloading it will just hang in your terminal, which means it
downloaded successfully and is running. Let's break down the command we ran to start:

{% highlight bash %}
docker run -p 8080:80/tcp "karthequian/helloworld:latest"
{% endhighlight %}
{:.post-content}
We're telling docker to bind our machine (the docker host) at port 8080 to the docker
container at port 80 using a TCP connection. ([🤔 Read more](https://docs.docker.com/config/containers/container-networking/)).
In short, we're telling the application to run on our computer at port 8080.
Now if we go to our browser and go to the address: `http://localhost:8080` we should
see our application!

{:.post-content}
Hungry for more docker content? Check out <a href="https://awesome-docker.netlify.com/" target="_blank">Awesome docker</a>
for all of the docker resources you could ever dream of!
