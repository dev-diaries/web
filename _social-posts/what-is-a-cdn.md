---
layout: social-post
type: "SocialPosts"
title: "What Is A CDN?"
cover-image: /assets/images/cdn-cover.png
image: /assets/images/.gif
excerpt: "A CDN is a content delivery network and refers to a distributed group of servers which work together to provide extremely fast internet content."
date: 2019-07-03
categories: [intermediate, ]
instagram-id: 
docs: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
---
{:.center}
# {{ page.title }}

{:.post-content}
A CDN is a content delivery network and refers to a distributed group of 
servers which work together to provide extremely fast delivery of Internet content. You might have heard
about CDN's when it comes to Cloudflare and its <a href="https://blog.cloudflare.com/cloudflare-outage/" target="_blank">outage</a> on 
July 2nd, 2019. Cloudflare serves quite a few functions but one of its main functions
is as a gigantic CDN. Another very large CDN is <a href="https://aws.amazon.com/cloudfront/" target="_blank">Cloudfront</a>
which is offered by Amazon. In fact, this website is served to you via
Cloudfront. It's assets are stored on <a href="https://aws.amazon.com/s3/" target="_blank">S3</a>
which is Amazon's object store and then served from S3 via Cloudfront to the end user.

{:.post-content}
By using a CDN we can confidently trust that our content will be delivered 
reliably and can scale if we have any large spikes in traffic. Good CDN's 
will also help protect against <a href="https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/" target="_blank">DDoS</a>
attacks.

{:.post-content}
A lot of times if you're quickly getting started (<a href="https://reactjs.org/docs/add-react-to-a-website.html" target="_blank">for example react)</a> with a package in web development
it'll have reference to an external way to load the package so you don't have
to download it locally:

{% highlight html %}
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
{% endhighlight %}

{:.post-content}
You'll notice that it refers to unpkg.com. <a href="https://unpkg.com/" target="_blank">unpkg.com</a>
as you might have guessed is a CDN for npm. We're interacting with CDN's all
the time even if we may not realize it, so that's why when a CDN goes down
or has outages (which is very rare) it feels like the entire Internet is down.

{:.post-content}
Read more about CDN's <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
