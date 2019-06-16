---
layout: social-post
type: "SocialPosts"
title: "Using Dev Tools To View & Edit Local Storage"
cover-image: /assets/images/local-storage-cover.png
image: /assets/images/chrome-local-storage.gif
excerpt: "Using dev tools you can view and edit local storage quickly and easily."
date: 2019-06-16
categories: [intermediate, dev-tools, localstorage, javascript, html5]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
---
{:.center}
# {{ page.title }}

{:.post-content}
Local storage is a client side storage mechanism with at least 5MB (varies from browser to browser)
of storage and doesn't expire unless explicitly cleared. It is protocol (http vs. https)
specific and is localized to a domain. Unlike session storage, it doesn't clear
when the browser is closed so it sticks around even after a user has quit their browser
and comes back. Luckily for us dev tools makes it easy for us to view and edit 
our local storage:

{:.post-content}
As seen from the video below, you can edit the local storage pretty easily and then
interact with local storage in the console as well. Local storage stores
everything as a string, but you can storage objects like `{foo: 'bar'}` that 
will be stringified in local storage as well.

{:.post-content}
Chrome: 

{:.image .center}
![chrome]({{page.image}})

{:.post-content}
Firefox: 

{:.image .center}
![firefo](/assets/images/firefox-local-storage.gif)

{:.post-content}
Read more about <a href="{{page.docs}}" target="_blank">local storage.</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}