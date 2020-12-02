---
layout: social-post
type: "SocialPosts"
title: "Introduction To CORS (Cross-Origin Resource Sharing)"
cover-image: /assets/images/cors-cover.png
image: /assets/images/.gif
excerpt: "CORS or Cross-Origin Resource Sharing is a mechanism to make it possible to make requests from one website to another in the browser. The security policy, Same-Origin Policy (SOP) normally restricts this kind of behavior. If you’re writing an API for example, and want other websites to be able to access your API via browser side requests, you might want to define trusted origins that requests are allowed from or simply trust all origins. Check the link in the bio for more info!"
date: 2019-10-12
tags: [html]
categories: [intermediate, html, cors]
instagram-id: B332QchADni
docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
---
{:.center}
# {{ page.title }}

{:.post-content}
CORS or Cross-Origin Resource Sharing is a mechanism to make it possible to
make requests from one website to another in the browser. The security policy,
Same-Origin Policy (SOP) normally restricts this kind of behavior. If you’re writing
an API for example, and want other websites to be able to access your API via
browser side requests, you might want to define trusted origins that requests
are allowed from or simply trust all origins.

{:.post-content}
If you want to allow some origins or all origins to access your API you want to
set an additional HTTP response header that defines the "Access-Control-Allow-Origin"

{% highlight html %}
// Allow any website to be able to access your server via a browser request
Access-Control-Allow-Origin: *

// Allow only NY Times to be able to access your server via a browser request
Access-Control-Allow-Origin: https://www.nytimes.com
{% endhighlight %}

{:.post-content}
Want to learn more? There are quite a few good articles about CORS. Check this
article <a href="http://performantcode.com/web/do-you-really-know-cors" target="_blank">Do You Really Know CORS?</a>.
This <a href="https://www.codecademy.com/articles/what-is-cors" target="_blank">article</a>
by codeacademy is a good overview and this <a href="https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a" target="_blank">Medium</a>
article also has some good info.
Read more about on Mozilla <a href="{{page.docs}}" target="_blank">here</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
