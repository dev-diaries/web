---
layout: social-post
type: "SocialPosts"
title: "Git Diff Branches"
cover-image: /assets/images/git-diff-cover.png
image: /assets/images/.gif
excerpt: "Need to tell the difference between two git branches?"
date: 2019-05-24
categories: [intermediate, git, branching]
instagram-id: Bx2JVeFAPw2
docs: https://git-scm.com/docs/git-diff
---
{:.center}
# {{ page.title }}

{:.post-content}
Need to tell the difference between two git branches? Git diff is handy command to see what files are different from one branch to another.

{:.post-content}
Running it will give an output like this:

{% highlight bash %}
> git diff master...staging
──────────────────────────────────────────────────────────────────────────────────────
added: .editorconfig
──────────────────────────────────────────────────────────────────────────────────────
@ .editorconfig:4 @
root = true

[html]
indent_style = tab
 
[**.java]
indent_style = space
indent_size = 4
 
[**.scss]
indent_syle = tab
──────────────────────────────────────────────────────────────────────────────────────
modified: _layouts/default.html
──────────────────────────────────────────────────────────────────────────────────────
@ _layouts/default.html:30 @
        </script>
        <script>
{% endhighlight %}

{:.post-content}
`git-diff` can do a lot more, read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
