---
layout: social-post
type: "SocialPosts"
title: "Using Git Stash"
cover-image: /assets/images/git-stash-cover.png
image: /assets/images/.gif
excerpt: "Git stash is a great way to maintain your current work and switch to another branch quickly. "
date: 2019-06-27
categories: [intermediate, git]
instagram-id: BzNDiLgiyvi
docs: https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning
---
{:.center}
# {{ page.title }}

{:.post-content}
Git stash is a great way to maintain your current work and switch to another 
branch quickly. If you want to work on something else and aren’t ready to commit 
your half completed work, git stash allows you to switch context easily and then come back to your work later. 

{:.post-content}
If you have some work that you haven't committed yet, for example we adjusted our
Makefile
{% highlight git %}
➜  dev-diaries git:(master) ✗ gst
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   Makefile
{% endhighlight %}

{:.post-content}
We can stash that change and switch branches to work on something else:

{% highlight git %}
> git stash
{% endhighlight %}

{:.post-content}
Then when we run a git status, we'll see that there are no local changes

{% highlight bash %}
➜  dev-diaries git:(master) ✗ git stash                    
No local changes to save
{% endhighlight %}

{:.post-content}
If we then come back we can put those changes back in one of two ways. If we want keep that
change around in our stash list we can just run git stash apply, or if we don't
want that change around anymore, we can run git pop. Typically I default to git pop
since I'll probably commit those changes the second time around.

{% highlight bash %}
# apply changes and keep them on our stash list
git stash apply
# apply changes and remove them from our stash list
git stash pop
{% endhighlight %}

{:.post-content}
By default, git stash does not stash new files, however you can stash new files by adding the
`-u` or `--include-untracked` flag to tell it to stash new files as well. That way
everything will be stashed, which can be nice if your changes include additional files:

{% highlight bash %}
# stash untracked and edited files
git stash -u
{% endhighlight %}

{:.post-content}
Another nice feature of stash, is to have git iterate over every file that has changed
by using the `-p` or `--patch`.

{% highlight html %}
➜  dev-diaries git:(master) ✗ git status    
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   Makefile
	modified:   package.json

➜  dev-diaries git:(master) ✗ git stash -p  
diff --git a/Makefile b/Makefile
index 6a92c27..0b61fb1 100644
--- a/Makefile
+++ b/Makefile
@@ -13,3 +13,4 @@ dev:
 	$(TTAB) make fe && make app
 
 
+
Stash this hunk [y,n,q,a,d,e,?]? 

diff --git a/package.json b/package.json
index 8457d04..371b45b 100644
--- a/package.json
+++ b/package.json
@@ -26,3 +26,4 @@
     "instafetch.js": "https://github.com/dev-diaries/instafetch.js.git"
   }
 }
+
Stash this hunk [y,n,q,a,d,e,?]? 
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
