---
layout: social-post
type: "SocialPosts"
title: "Docker Volumes"
cover-image: /assets/images/docker-volumes-cover.png
image: /assets/images/.gif
excerpt: "A docker volume allows you to persist data generated by and used by Docker containers."
date: 2019-07-11
categories: [intermediate, docker, volumes, storage, jenkins]
instagram-id: BzySxUli5Li
docs: https://docs.docker.com/storage/volumes/
---
{:.center}
# {{ page.title }}

{:.post-content}
A docker volume allows you to persist data generated by and used by Docker containers. 
A volume can exist on the host, be available in the container and doesn’t 
increase the size of the container using it. The container exists outside the 
life cycle of a given container, meaning that even if you kill the container, 
the volume will stay in tact. Another benefit is that a volume can be shared 
amongst multiple containers. Volumes can be managed by the Docker CLI which 
makes it extremely easy and volumes can also be hosted on cloud storage which 
opens the doors to a wide range of functionality and options.

{:.post-content}
You can create a volume in numerous ways. 

{:.post-content}
With a docker compose you can specify: 
{% highlight yaml %}
version: "3.7"

services
    postgres:
        image: mysql
        volumes:
            # local:container
            # so our machine (host) our mysql data will be stored at ./docker/data
            # and in the container location is /var/lib/mysql/data
            - ./docker/data:/var/lib/mysql/data
{% endhighlight %}

{:.post-content}
The cool thing with a docker compose is that you can use environment variables
for dynamic replacement of values so if you use a CI/CD, like Jenkins you can have the 
location be dynamic:

{% highlight yaml %}
version: "3.7"

services
    postgres:
        image: mysql
        volumes:
            # DB_DATA_PATH should be an environment variable 
            # and docker will pick that up
            - ${DB_DATA_PATH}:/var/lib/mysql/data
{% endhighlight %}

{:.post-content}
Using the docker API we can create and manage volumes:

{% highlight bash %}
# create volumes
docker volume create my-volume

# list volumes
docker volume ls

# inspect a volume
docker volume inspect my-volume
> [
    {
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/my-volume/_data",
        "Name": "my-volume",
        "Options": {},
        "Scope": "local"
    }
]

# remove all unused volumes to free up spsace
docker volume prune
{% endhighlight %}

{:.post-content}
Using the docker run command we can attach a volume to a container as well. If the 
volume doesn't exist yet, Docker will create it for you

{% highlight bash %}
docker run -d --name my-container -v new-volume:/app postgres:latest
{% endhighlight %}



{:.post-content}
Check the <a href="https://docs.docker.com/compose/compose-file/#volumes" target="_blank">documentation</a>
for docker-compose volumes.


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}