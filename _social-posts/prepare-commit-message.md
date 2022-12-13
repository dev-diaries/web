---
layout: social-post
type: "SocialPosts"
title: "Add A Prepare Commit Message To Customize Git Commits"
cover-image: /assets/images/github-autolink.jpg
image: /assets/images/.gif
excerpt: "If you work with any agile software or Github issues it is sometimes useful to prepend your commit message with a reference to the ticket or issue so commits can be associate with a work item."
date: 2022-12-13
tags: [git, cli]
categories: [advanced, git, terminal]
instagram-id:
docs: https://git-scm.com/docs/githooks#_prepare_commit_msg
---
{:.center}
# {{ page.title }}

{:.post-content}
If you work with any agile software or Github issues it is sometimes useful to prepend your commit
message with a reference to the ticket or issue so commits can be associated
with a work item. Using a [prepare-commit-msg](https://git-scm.com/docs/githooks#_prepare_commit_msg)
allows you with the correct branch to automatically prepend a git commit
with the ticket/issue reference.

{:.post-content}
If you create a branch that is in reference to a Github issue, Github will automatically
link back to that Github issue. If you use some other software you can update
the Github settings under "Integrations" -> "Autolink references"

{:.image .center}
![autolink-image](/assets/images/github-autolink.jpg)

{:.post-content}
So if you have a branch that is named `gh-#143-update-all-the-things` with a prepare-commit-msg
in your `.git/hooks directory` any git commit could automatically have `[gh-#143]`
prepended to it! Check this example [prepare-commit-msg](https://github.com/khaliqgant/Configuration-Files/blob/master/git/prepare-commit-msg)
to see how this could work.

{:.post-content}
If you're using something like [pre-commit](https://pre-commit.com/) you could
write a quick Python script to accomplish the same with this configuration

{% highlight yaml %}
repos:
  - repo: local
    hooks:
      - id: add-github-issue
        name: Add Github issue to commits
        entry: ./git/hooks/prepare-commit-msg.py
        language: python
        stages: [prepare-commit-msg]
        verbose: true
        always_run: true
{% endhighlight %}

{:.post-content}
The following python logic could be used:

{% highlight python %}
#!/usr/bin/python
import re
import subprocess
import sys

# inspiration taken from https://gist.github.com/lorin/2963131

def get_issue():
    """Return the Github issue from the branch"""
    branchname = subprocess.check_output(["/usr/bin/git", "symbolic-ref", "HEAD"])
    branch = branchname.split("/")[2]
    github_issue = re.match("([aA-zZ]+-#[0-9]+)[-].*", branch).group(1)
    return github_issue


def prepend_commit_msg(text):
    """Prepend the commit message with `text`"""
    msgfile = sys.argv[1]

    with open(msgfile) as f:
        contents = f.read()

    with open(msgfile, "w") as f:
        # Don't append if it's already there
        if not contents.startswith(text):
            f.write(text)
        f.write(contents)


def main():
    try:
        github_issue = get_issue()
        header = "[%s] " % github_issue
        prepend_commit_msg(header)
    except Exception as exc:
        print(exc)
        pass


if __name__ == "__main__":
    main()
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
