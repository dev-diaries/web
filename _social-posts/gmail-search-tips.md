---
layout: social-post
type: "SocialPosts"
title: "Gmail search tips"
cover-image: /assets/images/gmail-search-cover.png
image: /assets/images/gmail-search-cover.gif
excerpt: "Want to search your Gmail like a boss?"
date: 2019-03-26
categories: [intermediate, browser-tips, gmail, biz-dev, internetting, email]
instagram-id: BvdnFmLjXsC
docs: https://support.google.com/mail/answer/7190?hl=en&visit_id=636891790195104675-2176755800&rd=1
---
{:.center}
# {{ page.title }}

{:.post-content}
Want to search your Gmail like a pro? These handy shortcuts can help you find
that email. You type these queries in the search bar in your Gmail interface.

{% highlight html %}
from:me
{% endhighlight %}

{:.post-content}
Search any email from yourself, you can also specify a name or gmail address

{% highlight html %}
to:george
{% endhighlight %}

{:.post-content}
Search any email from george

{% highlight html %}
subject:lunch meeting
{% endhighlight %}

{:.post-content}
Search any email with the title "lunch meeting"

{% highlight html %}
from:chris OR from:michelle
{% endhighlight %}

{:.post-content}
Find any email from either chris or michelle

{% highlight html %}
phone AROUND 10 android
{% endhighlight %}

{:.post-content}
Search for messages with words near each other In this example we're searching
for phone with the word android 10 or less away from it. Put the query in quotes
to specify which word is first. Otherwise the order doesn't matter.

{% highlight html %}
subject:(meeting revenue)
{% endhighlight %}

{:.post-content}
Group the terms "meeting" and "revenue" together when searching

{% highlight html %}
+margin
{% endhighlight %}

{:.post-content}
Search for that word exactly

{:.post-content}
Read more <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
