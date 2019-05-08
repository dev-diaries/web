---
layout: social-post
type: "SocialPosts"
title: "Behind The Scenes: Edition 1 - Deploying Static Sites"
cover-image: /assets/images/behind-the-scenes-cover-1.png
image: /assets/images/bts-1-example.gif
excerpt: "Today we’re switching it up a bit and going #bts for the dev-diaries.com website."
date: 2019-05-08
categories: [beginner, static-sites, jekyll, behind-the-scenes]
instagram-id: 
docs: 
---
{:.center}
# {{ page.title }}

{:.post-content}
Today we’re switching it up a bit and going #bts for our website.
This site is created using a static site generator called jekyll. 
Static sites are great because the site is served using static html, javascript, 
and css and are extremely fast as a result and easy to scale. In fact 
this site is just served from AWS S3 and uses a CDN (Content Delivery Network), 
Cloudfront to serve it. Every time we make a new post, a new file is created 
with some tags and some content and it is then pushed to Github. From Github, 
we use Travis CI to listen for changes and push our built site to S3.

{:.post-content}
So in the gif below, we create a markdown file and then we fill in the file with 
the information about the post, the title, excerpt, date, and the categories.
We're putting that info in the <a href="https://jekyllrb.com/docs/front-matter/" target="_blank">front matter</a>
which is read by jekyll when it is building the static site out.

{:.image .center}
![gif]({{page.image}})

{:.post-content}
After we've finished editing the file, we commit it and push it to Github. Our travis.yml
file allows the pushes to Github to be picked up and sends the files to our S3 bucket.
Our `.travis.yml` file looks like this:

{% highlight yaml %}
language: ruby
rvm:
  - 2.4.1
install: 
  - gem install bundler:2.0.1
  - bundle install 
  - gem install s3_website
script: jekyll build
after_success: s3_website push

branches:
  only:
  - master
{% endhighlight %}

{:.post-content}
We specify ruby version 2.4.1 and some steps to run in the virtual server that Travis
CI spins up. We first install the dependencies of jekyll using <a href="https://bundler.io/" target="_blank">bundler</a>.
We then install a handy gem, s3_website which pushes all of our files to S3 and handles
Cloudfront invalidation as well. We then run a script to build the site, we push to S3 and bingo, our changes are live!

{:.post-content}
Read more about Travis CI <a href="https://docs.travis-ci.com/" target="_blank">here</a>
Our site is open source, so check out the <a href="http://github.com/dev-diaries/web" target="_blank">repo</a>
if you want to see the code! This <a href="https://medium.com/@michal.frystacky/static-site-github-to-s3-770953a90f67" target="_blank">Medium</a>
article is a good guide if you want get setup yourself.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
