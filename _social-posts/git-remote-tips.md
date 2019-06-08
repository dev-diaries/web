---
layout: social-post
type: "SocialPosts"
title: "Git Remote Tips"
cover-image: /assets/images/remote-repo-cover.png
image: /assets/images/.gif
excerpt: "When you're dealing with Git, eventually you'll want to push your code to a remote repository. There are a few useful commands to be aware of."
date: 2019-06-07
categories: [intermediate, git, remote]
instagram-id: Bycao_UCmHC
docs: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
---
{:.center}
# {{ page.title }}

{:.post-content}
When you're dealing with Git, eventually you'll want to push your code to a remote repository. There are a few useful commands to be aware of.
First, you can see which remote repositories are associated with your repo:

{% highlight bash %}
> git remote -v
origin	git@github.com:dev-diaries/web.git (fetch)
origin	git@github.com:dev-diaries/web.git (push)
{% endhighlight %}

{:.post-content}
You can have several remote repositories linked from the same repository and name
it whatever you like:

{% highlight bash %}
> git remote add client-repo git@github.com:client-org/project.git
> git remote -v
origin          git@github.com:my-org/project.git
client-repo     git@github.com:client-org/project.git
{% endhighlight %}

{:.post-content}
Then, to push to that particular repo you'll need to specify it instead of origin:

{% highlight bash %}
git push client-repo master
{% endhighlight %}

{:.post-content}
When typically we would write:

{% highlight bash %}
git push origin master
{% endhighlight %}

{:.post-content}
To remove a repository you can run:

{% highlight html %}
> git remote -v
origin          git@github.com:my-org/project.git
client-repo     git@github.com:client-org/project.git
> git remote remove client-repo
> git remote -v
origin          git@github.com:my-org/project.git
{% endhighlight %}

{:.post-content}
We talked about [renaming a local branch](/social-posts/git-rename-branch/)
and you can also rename a remote repository name

{% highlight bash %}
> git remote -v
origin          git@github.com:my-org/project.git
client-repo     git@github.com:client-org/project.git
> git remote rename client-repo the-client-repo
> git remote -v
origin              git@github.com:my-org/project.git
the-client-repo     git@github.com:client-org/project.git
{% endhighlight %}

{:.post-content}
It is useful to be able to return more information about a remote repository:

{% highlight bash %}
> git remote show origin
* remote origin
  Fetch URL: git@github.com:dev-diaries/web.git
  Push  URL: git@github.com:dev-diaries/web.git
  HEAD branch: master
  Remote branches:
    api                                    tracked
    dev                                    tracked
    master                                 tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local refs configured for 'git push':
    api    pushes to api    (up to date)
    master pushes to master (up to date)
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
