---
layout: social-post
type: "SocialPosts"
title: "Conditionals In AWS Buildspec Files"
cover-image: /assets/images/build-spec.png
image: /assets/images/.gif
excerpt: "Writing a buildspec.yml file for your Codebuild? You might need some environment specific items and could use conditionals to achieve that"
date: 2021-06-11
tags: [devops]
categories: [intermediate, aws, yaml, devops]
instagram-id:
docs: https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html
---
{:.center}
# {{ page.title }}

{:.post-content}
If you're using AWS's <a href="https://aws.amazon.com/codebuild/" target="_blank">Codebuild</a>
to compile your source code, run tests or product software packages then you're familiar
with a buildspec.yml file. A buildspec is "collection of build commands and related settings, in YAML format, that CodeBuild uses to run a build".
You might want to add some conditionals to your buildspec file as this
<a href="https://github.com/aws-samples/aws-codebuild-multiple-buildspec/issues/2" target="_blank">Github Issue asks about</a>
Let's say for example you want to perform some tasks based on a specific environment:

{% highlight yaml %}
build:
  commands:
  - |
  if [ "$ENVIRONMENT" = "dev" ] || [ "$ENVIRONMENT" = "staging" ]; then
    docker build -f ./docker/Dockerfile .
  fi
{% endhighlight %}

{:.post-content}
Want another simpler conditional in there as well?!:
{% highlight yaml %}
build:
  commands:
  - |
  if [ "$ENVIRONMENT" = "dev" ] || [ "$ENVIRONMENT" = "staging" ]; then
    if expr "${do_build}" : 'true' >/dev/null; then
      docker build -f ./docker/Dockerfile .
    fi
  fi
{% endhighlight %}


{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
