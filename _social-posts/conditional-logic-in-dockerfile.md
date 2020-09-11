---
layout: social-post
type: "SocialPosts"
title: "Conditional Logic In Dockerfile"
cover-image: /assets/images/conditional-dockerfile-cover.png
image: /assets/images/.gif
excerpt: "Sometimes when running a Dockerfile you need to run some conditional logic based upon an ARG variable."
date: 2019-10-12
categories: [intermediate, docker, dockerfile, container]
instagram-id: B3g0lPWA0Qx
docs: https://stackoverflow.com/questions/43654656/dockerfile-if-else-condition-with-external-arguments
---
{:.center}
# {{ page.title }}

{:.post-content}
Sometimes when running a Dockerfile you need to run some conditional logic based
upon an ARG variable. This can be handy in the instance you want to run a
production build or development build or need to run an extra step for production, etc.

{% highlight bash %}
ARG ENV

RUN if [ "$ENV" = "production" ] ; then yarn client:build:prod ; else yarn client:build ; fi
{% endhighlight %}

{:.post-content}
When running this you need to pass in the argument ENV as part of your docker
build command:

{% highlight bash %}
docker build -t node-image .  --build-arg ENV=production
{% endhighlight %}

{:.post-content}
Read this Stackoverflow answer about it <a href="{{page.docs}}" target="_blank">here</a>.
It should be noted that using conditional logic in a Dockerfile forces the Dockerfile
to be built each time when normally if nothing changed it would be cached. Because this
build-arg is dynamic the Docker build step cannot be cached. In short, using conditional
logic in your Dockerfile will slow down the build.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
