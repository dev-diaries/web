---
layout: social-post
type: "SocialPosts"
title: "Cookies In Dev Tools"
cover-image: /assets/images/cookies-dev-tools-cover.png
image: /assets/images/cookies-dev-tools.gif
excerpt: "Cookies are increasingly in the conversation these days and knowing how to edit, create, and clear them as a web developer from your browser is extremely important. "
date: 2019-06-26
tags: [dev-tools]
categories: [beginner, dev-tools, cookies]
instagram-id: BzL5eWoCUzf
docs: https://developers.google.com/web/tools/chrome-devtools/storage/cookies
---
{:.center}
# {{ page.title }}

{:.post-content}
Cookies are increasingly in the conversation these days and knowing how to edit, 
create, and clear them as a web developer from your browser is extremely important. 
Most browsers handle cookie management in the dev tools, but check the demonstration.

{:.image .center}
![demo]({{page.image}})

{:.post-content}
Cookies have some properties that can be specified:
The Cookies table contains the following fields:

{:.post-content}
* Name: The cookie's name.
* Value: The cookie's value.
* Domain: The hosts that are allowed to receive the cookie
* Path: The URL that must exist in the requested URL in order to send the Cookie header. See Scope of cookies.
* Expires / Max-Age: The cookie's expiration date or maximum age. 
* Size: The cookie's size, in bytes.
* HTTP: If true, this field indicates that the cookie should only be used over HTTP, and JavaScript modification is not allowed.
* Secure: If true, this field indicates that the cookie can only be sent to the server over a secure, HTTPS connection. 
* SameSite: Contains strict or lax if the cookie is using the experimental 

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
