---
layout: social-post
type: "SocialPosts"
title: "Nginx Config Test & Location Matcher Test"
cover-image: /assets/images/nginx-config-check-cover.png
image: /assets/images/.gif
excerpt: "Unsure about the nginx configuration you just changed? Pass in a flag to test the configuration and be told of errors before restarting nginx..."
date: 2020-10-21
categories: [intermediate, nginx, devops]
instagram-id:
docs: http://nginx.org/en/docs/switches.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Unsure about the nginx configuration you just changed?
Pass in a flag to test the configuration and be told of errors before restarting nginx.

{% highlight bash %}
nginx -t

# would output for example:
nginx: [emerg] unknown directive "erver_name" in /etc/nginx/sites-enabled/default:3
nginx: configuration file /etc/nginx/nginx.conf test failed
{% endhighlight %}

{:.post-content}
Additionally, a very helpful website to test your nginx location blocks is
<a href="https://nginx.viraptor.info/" target="_blank">https://nginx.viraptor.info/</a>

{:.post-content}
Read more about nginx flags<a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
