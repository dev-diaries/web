---
layout: social-post
type: "SocialPosts"
title: "Back To The Basics: Git Init & Git Branches"
cover-image: /assets/images/git-init-cover.png
image: /assets/images/.gif
excerpt: "Git is one of the best tools out there to manage a codebase. Knowing how to initialize a new repo and being to work under different branches is essential to working in git."
date: 2019-05-31
categories: [beginner, back-to-the-basics, git]
instagram-id: 
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
If you're starting up a git repository, you'll need to able to initialize it. That means
you're creating an empty git repository which is a directory called .git which has
directories within it called objects, refs and a few other files and directories.
It also creates a HEAD file which references the HEAD of the master branch that is created.
Let's see some commands:

{% highlight bash %}
> git init
> ls -a
.git
> cd .git
> ls
HEAD
branches
config
description
hooks
info
objects
refs
{% endhighlight %}

{:.post-content}
The thing we want to focus on is the branches directory. When we first make a git repository, it puts us
on the master branch. Picture it like a tree. So right now, the master branch
is the only and single branch of our tree. Let's add a file and commit that file
to our branch:

{% highlight bash %}
> touch myFile.md
> git add myFile.md
> git commit -m 'adding an empty markdown file'
[master (root-commit) 7c5ab19] adding an empty markdown file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 myFile.md
> git status
On branch master
nothing to commit, working tree clean
{% endhighlight %}

{:.post-content}
If we then create a new branch it'll make a new branch off of the master branch, which means
whatever we did in the master branch will be in our new branch as well:

{% highlight bash %}
> git checkout -b new-branch
> ls
myFile.md
{% endhighlight %}

{:.post-content}
Let's make a new file on our `new-branch`:

{% highlight bash %}
> touch otherFile.md
> git add otherFile.md
> git commit -m 'adding another file'
[test 744196a] adding another file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 otherFile.md
> ls
myFile.md otherFile.md
{% endhighlight %}

{:.post-content}
Now, let's switch back to our master branch:

{% highlight bash %}
> git checkout master
> ls
myFile.md
{% endhighlight %}

{:.post-content}
Notice that the master branch does not have otherFile.md. Why not? This is because now
our master branch and our new-branch are two totally separate entities. Even though
we branched new-branch off of our master branch it is now independent and will not contain
any similarities once it has been branched off.

{:.post-content}
This is a very powerful and important concept and feature of git: being able
to have two totally separate versions of your repository that are independent
and can be tracked with different files and states.

{:.post-content}
Read more about <a href="https://git-scm.com/docs/git-init" target="_blank">git-init</a> 
and <a href="" target="_blank">git checkout</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
