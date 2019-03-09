---
layout: social-post
type: "SocialPosts"
title: "Docker Prune: prevent running out of disk space"
image: /assets/images/docker-prune.png
excerpt: "Running out of disk space when running docker? You can clean up all images, containers, networks, and volumes not used on your drive."
date: 2019-03-07
categories: [advanced, containerization, jenkins]
instagram-id: BussEsfAi4X
---
{:.center}
# {{ page.title }}

{:.post-content}
Running out of disk space when running docker? You can clean up all images, 
containers, networks, and volumes not used on your drive. Run with a -f flag to 
skip a confirmation prompt. Run with a -a to remove all unused images and not 
just the dangling ones. <a href="https://docs.docker.com/engine/reference/commandline/system_prune/" target="_blank">Check the docs.</a>

{:.image .center}
![command]({{page.image}})

{:.post-content}
We've seen this happen when running Jenkins and building a docker image based 
on an automated deploy process. Jenkins will continuosly build an image
and make that latest image active but old image artifacts will still be remaining
on the server. All is well until one day, the build fails because of lack 
of disk space. We added a cron job command of:

{% highlight bash %}
docker system prune -af
{% endhighlight %}

{:.post-content}
`-f` to avoid any interaction and -a to remove all images, to fix this issue and
not worry about a jenkins build randomly failing 😅.

{:.post-content}
Not sure what docker is and want to get started? Check out our 
[getting started with docker post](/blog/getting-started-with-docker/)

{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>

