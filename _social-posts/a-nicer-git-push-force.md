---
layout: social-post
type: "SocialPosts"
title: "A Nicer Force Git Push"
cover-image: /assets/images/force-with-lease-cover.png
image: /assets/images/.gif
excerpt: "Most of us have had to git push --force before to overwrite the remote history of your repository. There is a flag that is a bit safer..."
date: 2019-07-09
categories: [advanced, git, remote]
instagram-id: BztVIbqCkAJ
docs: https://blog.developer.atlassian.com/force-with-lease/
---
{:.center}
# {{ page.title }}

{:.post-content}
Most of us have had to git push --force before to overwrite the remote history 
of your repository. That command should be used with caution and you also might 
want to consider using git push --force-with-lease instead. It will block your 
force push if the remote branch has been updated and you don’t have the latest 
fetched in your repository. This might prevent you from throwing away someone else’s work without realizing it 😳

{% highlight git %}
git push origin master --force-with-lease
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
