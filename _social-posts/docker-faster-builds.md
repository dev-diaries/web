---
layout: social-post
type: "SocialPosts"
title: "Smaller Docker Images & Faster Builds"
cover-image: /assets/images/docker-builds-cover.png
image: /assets/images/.gif
excerpt: "When running docker and building your images they can get quite large and take a lot of space on your server/registry. "
date: 2019-09-02
categories: [advanced, docker, containers, virtualization, docker-layers]
instagram-id:
docs: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
---
{:.center}
# {{ page.title }}

{:.post-content}
A docker layer is a change on an image causing the previous image to change. You can
look at it as a step in your docker build that is doing something that adjusts
your docker image. The only instructions that create layers are `RUN`, `COPY`, and
`ADD`. Wherever possible those commands should be combined:

{% highlight bash %}
# Example 1
COPY package.json /src/
COPY package-lock.json /src/

# SHOULD BE COMBINED TO
# Note that they can be only combined when going to the same location

COPY package.json package.lock /src/

------------
# Example 2

COPY --chown=node:node package.json /src
COPY --chown=node:node yarn.lock  /src
COPY --chown=node:node typings.json /src

# SHOULD BE CHANGED TO
COPY --chown=node:node package.json yarn.lock typings.json /src/
{% endhighlight %}

{:.post-content}
A faster Docker build can also be assisted by combining commands even when they
don't create additional layers. For example combining ENV docker commands:

{% highlight bash %}
ENV NODE_VERSION 8.9.3-r1
ENV YARN_VERSION 1.3.2-r0

# We can combine by changing the format to include an equal sign
ENV NODE_VERSION=8.9.3-r1 YARN_VERSION=1.3.2-r0
{% endhighlight %}

{:.post-content}
Using multi stage builds can also make your build faster and reduce the docker
image size as well. This reduces the size of the final image because it leverages build
cache. Setting up a multi stage build requires Docker version >17.05
you to build out a single Docker separating out steps of the Docker build
into only the final required steps for your image. With the multi stage build
you structure multiple FROM commands to reference the previous Dockerfile build.

{% highlight bash %}
# ---- Base Node ----
FROM alpine:3.5 AS base
# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /root/chat
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS test
COPY . .
RUN  npm run lint && npm run setup && npm run test

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/chat/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 5000
CMD npm run start
{% endhighlight %}

{:.post-content}
If you're running a chown step it can take quite a long time if your source code
size is large. Also, if you're copying your source code into your container from
the host it can take a long time as well. Instead you can combine the two steps into one:

{% highlight bash %}
COPY . /src
RUN chown -R node:node /src

# SHOULD BE COMBINED TO

COPY --chown:node:node . /src
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
