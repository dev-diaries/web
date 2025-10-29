---
layout: social-post
type: "SocialPosts"
title: "Using Git Worktrees"
cover-image: /assets/images/git-worktrees-cover.png
image: /assets/images/.gif
excerpt: "Git worktrees allow you to work on multiple branches simultaneously without the hassle of stashing or switching contexts."
date: 2025-10-29
tags: [git]
categories: [intermediate, git, worktrees]
instagram-id:
docs: https://git-scm.com/docs/git-worktree
---
{:.center}
# {{ page.title }}

{:.post-content}
Git worktrees let you check out multiple branches simultaneously in different directories. Instead of constantly switching branches and stashing changes, you can work on multiple features, bug fixes, or experiments at the same time, each in its own isolated directory.

{:.post-content}
## Why Use Worktrees?

- Work on multiple branches without switching context
- Test changes across different branches simultaneously
- Review PRs while keeping your current work untouched
- Avoid the git stash dance when you need to quickly switch tasks

{:.post-content}
## Creating a Worktree

Let's say you're working on a feature but need to quickly fix a bug on main:

{% highlight bash %}
# Create a new worktree for the bugfix
> git worktree add ../project-bugfix main

# This creates a new directory with main checked out
> cd ../project-bugfix
> git checkout -b bugfix/urgent-fix
# Make your changes and commit
{% endhighlight %}

{:.post-content}
## Listing Your Worktrees

You can see all your active worktrees and which branches they have checked out:

{% highlight bash %}
> git worktree list
/Users/dev/project        a1d2422 [feature/new-api]
/Users/dev/project-bugfix b3e4567 [bugfix/urgent-fix]
/Users/dev/project-review c5f6789 [main]
{% endhighlight %}

{:.post-content}
## Removing a Worktree

Once you're done with a worktree, clean it up:

{% highlight bash %}
# Remove the directory first
> rm -rf ../project-bugfix

# Then prune the worktree from git's tracking
> git worktree prune

# Or use the remove command to do both
> git worktree remove ../project-bugfix
{% endhighlight %}

{:.post-content}
## Quick Tips

- Each worktree shares the same repository, so fetches and configuration changes apply to all
- You can't check out the same branch in multiple worktrees
- Great for running tests on one branch while developing in another
- Use relative paths like `../project-name` to keep worktrees organized

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
