---
layout: social-post
type: "SocialPosts"
title: "Git Cherry Pick"
cover-image: /assets/images/git-cherry-pick-cover.png
image: /assets/images/.gif
excerpt: "Another feature with git that comes in handy sometimes is the ability to cherry pick certain commits..."
date: 2019-07-23
categories: [advanced, git, cherry-pick, hotfix]
instagram-id: B0QDt7lgXZk
docs: https://git-scm.com/docs/git-cherry-pick
---
{:.center}
# {{ page.title }}

{:.post-content}
One feature that comes in handy sometimes is the ability to cherry pick certain
commits. You can select a particular commit from a branch and bring that into
your own branch. This is a handy feature but one that should be used with care.
Often a traditional merge works better, but sometimes you ONLY want to bring
in one commit and not the rest of the branch. Say as part of a feature you
discover a bug and commit that bug fix but it is a part of a larger feature.
You would be able to cherry-pick only that bug fix commit and hotfix that into your remote environment.

{% highlight bash %}
# let's find the commit that we want to cherry pick
> git status
On branch feature-with-bugfix
> git log
commit a1d24225d21e3dd0bbafbac916b156e59a8b790e
Author: Khaliq Gant <khaliqgant@gmail.com>
Date:   Fri Jul 19 09:15:18 2019 +0200

    BUGFIX: change value passed into constructor
# let's switch to master to bring this commit into master
> git checkout master
# now we cherry pick that commit into master. We use the commit hash
> git cherry-pick a1d24225d21e3dd0bbafbac916b156e59a8b790e
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
