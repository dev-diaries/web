---
layout: social-post
type: "SocialPosts"
title: "Git Shallow Clone"
cover-image: /assets/images/shallow-clone-cover-depth.png
image: /assets/images/.gif
excerpt: "If you git clone a repository it brings in the entire repository which contains every revision of every file ever made. Sometimes this is overkill. Try a shallow clone instead!"
date: 2019-10-03
categories: [advanced, git, clone, ci, cd, branching]
instagram-id: B3KlSAolWDW
docs: https://www.perforce.com/blog/vcs/git-beyond-basics-using-shallow-clones
---
{:.center}
# {{ page.title }}

{:.post-content}
If you git clone a repository it brings in the entire repository which contains
every revision of every file ever made. Sometimes this is overkill. This can
especially be true if you’re checking into a repository for Continuous Integration
or Continuous Delivery. You wouldn’t need every single iteration of a file but
rather only the latest. In this case git clone shallow comes in handy.

{% highlight bash %}
git clone --depth 1 https://github.com/jquery/jquery.git
{% endhighlight %}

{:.post-content}
As mentioned in our [clone single-branch post](/social-posts/git-clone-single-branch/)
you can also just bring in a single branch that you specify for an even lighter
clone:

{% highlight bash %}
git clone --single-branch -b master -n git@github.com:nodejs/node.git --depth 1
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
