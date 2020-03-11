---
layout: social-post
type: "SocialPosts"
title: "Converting Docker Compose To Kubernetes Files"
cover-image: /assets/images/docker-kubernetes-convert.png
image: /assets/images/.gif
excerpt: "Kubernetes is a container orchestration system for automating deployment scaling and management. At some point you might outgrow using Docker and want to use Kubernetes to manage your containers. There are some great tools to make that transition easier."
date: 2020-03-10
categories: [advanced, containerization, docker, kubernetes, devops]
instagram-id:
docs: https://kompose.io/
---
{:.center}
# {{ page.title }}

{:.post-content}
Kubernetes is a container orchestration system for automating deployment scaling and management. At some point you might outgrow using Docker and want to use Kubernetes to manage your containers. There are some great tools to make that transition easier.
Note in this example we're supporting local development as we're going to use
local volumes. Persistent Volumes in kubernetes are handled differently than
you would locally.

{:.post-content}
Using [Kompose](https://kompose.io/), you can take a docker-compose file and easily convert that into Kubernetes
service, deploy, and persistent volume claim files fairly easily. First you'll need
to install kompose:

{% highlight bash %}
# Linux
curl -L https://github.com/kubernetes/kompose/releases/download/v1.19.0/kompose-linux-amd64 -o kompose

# macOS
curl -L https://github.com/kubernetes/kompose/releases/download/v1.19.0/kompose-darwin-amd64 -o kompose

chmod +x kompose
sudo mv ./kompose /usr/local/bin/kompose
{% endhighlight %}

{:.post-content}
If you have environment variables and use those in an .env file to fill the docker compose file, those variables
need to be filled in in order for the kubernetes deployment file to receive those.
So, for example if your file structure looks like this:
{% highlight bash %}
docker-compose.yml
.env
{% endhighlight %}

{:.post-content}
In your docker-compose file you, for example have variables for environment variables:
{% highlight yaml %}
version: "3.7"

services:
  node:
    image: ${REPO}/node_app:${BE_TAG}
    ports:
      - ${NODE_PORT}:3000
    restart: on-failure:3
    environment:
      NODE_ENV: ${NODE_ENV}
      INSTANCE_NAME: ${INSTANCE_NAME}
{% endhighlight %}

{:.post-content}
Your .env file would have the values:
{% highlight bash %}
REPO=our-private-registry
BE_TAG=dev
NODE_PORT=3030
NODE_ENV=development
INSTANCE_NAME:uat
{% endhighlight %}

{:.post-content}
We can use a docker-compose command to fill in the variables:
{% highlight linux %}
docker-compose -f app.yml config > docker-compose-out.yml
{% endhighlight %}

{:.post-content}
Now that we have actual values in our docker-compose-out.yml file we can use kompose
to convert that file:

{% highlight linux %}
kompose convert -f docker-compose-out.yml
{% endhighlight %}

{:.post-content}
That will create our deployment, service, and persistent volume claim files. To spin up
our kubernetes cluster we can run the command:

{% highlight linux %}
kubectl apply -f .
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
