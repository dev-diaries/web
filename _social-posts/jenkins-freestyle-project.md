---
layout: social-post
type: "SocialPosts"
title: "Jenkins: Freestyle Project"
cover-image: /assets/images/jenkins-freestyle-option.png
image: /assets/images/.gif
excerpt: "With jenkins you can create a freestyle project which allows you to define multiple steps in which to build your application."
date: 2019-08-09
categories: [intermediate, devops, jenkins, ci, continuous-integration, build-steps]
instagram-id:
docs: https://wiki.jenkins.io/display/JENKINS/Building+a+software+project
---
{:.center}
# {{ page.title }}

{:.post-content}
With jenkins you can create a freestyle project which allows you to define multiple steps in which to build your application.
This allows you to use any plugins you want and quickly programmatically (via the GUI) detail the steps that you wish.


{:.post-content}
First you can chose the option and give the project a name:

{:.image .center}
![freestyle](/assets/images/jenkins-freestyle-option.png)

{:.post-content}
Next you can specify the git repo you want to pull from. Note, that you need
to add a deploy key in your Github settings so that Jenkins can read from the repo.
Read more about that <a href="https://blogs.perficient.com/2014/03/26/using-git-deploy-key-in-jenkins-written-by-tom-tang/" target="_blank">here</a>.

{:.image .center}
![freestyle](/assets/images/jenkins-git-repo.png)

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
