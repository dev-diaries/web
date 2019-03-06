---
layout: post
title:  "Why and how to use collections in jekyll"
date:   2019-03-06 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/jekyll.png
categories: [jekyll, static-site, how-to]
excerpt: "Jekyll makes creating a static site as easy as pie 🥧. But, what is a Jekyll Collection? Why would that be useful and what is the process to add in a collection? Let's dig in!"
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
<a href="https://jekyllrb.com/" target="_blank">Jekyll</a> makes creating a static site as easy as pie 🥧. But, what is a Jekyll
Collection? Why would that be useful and what is the process to add in a collection?
Let's dig in!

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite resources

{:.resources-content}
* [Official Docs](https://jekyllrb.com/docs/collections/)
* [Explain like I'm five: Jekyll collections](https://ben.balter.com/2015/02/20/jekyll-collections/)
* [Cloudcannon](https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/)
</div>

{:.image .center}
![Jekyll Image]({{page.image}})

## Why Use Collections?

{:.post-content}
This site is built on Jekyll which we'll write more about later but essentially
this site is built as a blog. We also have quite a few social media posts
that we want to provide more content about on our website. This way, we can
share some content on social media and send readers to our site for more information.
Since we have long form blog posts already that is our <a href="https://jekyllrb.com/docs/posts/" target="_blank">posts</a>
type. We wanted another way to provide another type of content but didn't 
want it to be a full post. Enter what we call <a href="https://github.com/dev-diaries/web/tree/master/_social-posts" target="_blank">_social posts</a>
These are a `collection` (see what we did there?) of all the social media posts 
on the site. This way to display them we can avoid any needless filtering of
the blog post by a certain tag or category. Jekyll collections give us an easy way
out of the box to create a subtype on our blog 🙌.


## How

{:.post-content}
The first thing we needed to do was update our config to "register" the new 
collection:

{% highlight yaml %}
collections:
  social-posts:
    output: true
{% endhighlight %}

{:.post-content}
Here we name the collection `social-posts` and declare that we want it to output
a page for each document. This way each social post will have it's own dedicated
page so when users go to our site to learn more information they can see
an entire page dedicated to [Text navigation: jumping between words](/social-posts/text-navigation/)
for example.

{:.post-content}
Now that we have that, we need to make the directory so Jekyll knows to grab the
social posts. So, in the root of our project we make the directory:

{% highlight bash %}
mkdir _social_posts
{% endhighlight %}

{:.post-content}
Then create our post within that directory. We change directory (cd) into
the directory (folder) we just made and then create (touch) the first post:

{% highlight bash %}
cd _social__posts
touch text-navigation.md
{% endhighlight %}

{:.post-content}
And bingo! We have a new collection of social media posts with one post (text-navigation). Want to see how we
integrated it on this site? Check out our <a href="https://github.com/dev-diaries/web/commit/3176105dac2f421246512f4dd0946627ef2ec47a" target="_blank">commit</a>
because <i>don't talk about it, code about it</i>. We'll be posting much more
about how this site was built and as we add in more features we'll of course blog about it,
because <i>sharing is caring</i>.
