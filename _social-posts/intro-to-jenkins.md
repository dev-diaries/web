---
layout: social-post
type: "SocialPosts"
title: "Intro To Jenkins"
cover-image: /assets/images/jenkins-with-docker.png
image: /assets/images/.gif
excerpt: "Jenkins is an open source automation server which offers a lot of functionality out of the box combined with plugins that can usually accomplish what you need."
date: 2019-08-07
categories: [intermediate, devops, jenkins, ci, continuous-integration]
instagram-id:
docs: https://jenkins.io/doc/
---
{:.center}
# {{ page.title }}

{:.post-content}
Jenkins is an open source automation server which offers a lot of functionality out of the box combined with plugins that can usually accomplish what you need.
Jenkins is easy to install and quickly get started with continuous integration. Jenkins has been in the game for a while and is quite trusted and battle tested as an automation tool.

{:.post-content}
Want to test it out locally very quickly using Docker? Run this to try the
<a href="https://jenkins.io/projects/blueocean/" target="_blank">Blue Ocean Instal</a>
of Jenkins:

{% highlight bash %}
docker run -u root --rm -p 8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
