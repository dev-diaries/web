---
layout: social-post
type: "SocialPosts"
title: "HTML Meta Tags"
cover-image: /assets/images/meta-tags-cover.png
image: /assets/images/.gif
excerpt: "The HTML meta tag goes in the &lt;head&gt; of your webpage and allows you to provide name value pairs that isn’t viewable by your webpage viewers, but rather machine parseable information about your webpage."
date: 2019-06-23
categories: [beginner, html, tags]
instagram-id: BzDJmoAiLsu
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
---
{:.center}
# {{ page.title }}

{:.post-content}
The HTML meta tag goes in the &lt;head&gt; of your webpage and allows you to provide name value pairs that isn’t viewable by your webpage viewers, but rather machine parseable information about your webpage.
Being familiar with the various tags can allow you to specify more details about
your webspage that can even go so far as to improve your sites performance.

{:.post-content}
The meta tags that are recommended to definitely have at minimum are the
charset, and viewport.

{% highlight html %}
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--
  The above 2 meta tags *must* come first in the <head>
  to consistently ensure proper document rendering.
  Any other head element should come *after* these tags.
 -->
<title>Page Title</title>
</head>
{% endhighlight %}

{:.post-content}
We talked about the viewport meta tag in [earlier post](/social-posts/meta-viewport/).

{:.post-content}
There are quite a few other meta tags that you can add in. This list was copied
from the very handy site <a href="https://htmlhead.dev/" target="_blank">htmlhead.dev</a>

{% highlight html %}
<!--
  Allows control over where resources are loaded from.
  Place as early in the <head> as possible, as the tag  
  only applies to resources that are declared after it.
-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- Name of web application (only should be used if the website is used as an app) -->
<meta name="application-name" content="Application Name">

<!-- Theme Color for Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#4285f4">

<!-- Short description of the document (limit to 150 characters) -->
<!-- This content *may* be used as a part of search engine results. -->
<meta name="description" content="A description of the page">

<!-- Control the behavior of search engine crawling and indexing -->
<meta name="robots" content="index,follow"><!-- All Search Engines -->
<meta name="googlebot" content="index,follow"><!-- Google Specific -->

<!-- Tells Google not to show the sitelinks search box -->
<meta name="google" content="nositelinkssearchbox">

<!-- Tells Google not to provide a translation for this document -->
<meta name="google" content="notranslate">

<!-- Verify website ownership -->
<meta name="google-site-verification" content="verification_token"><!-- Google Search Console -->
<meta name="yandex-verification" content="verification_token"><!-- Yandex Webmasters -->
<meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center -->
<meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console -->
<meta name="p:domain_verify" content="code_from_pinterest"><!-- Pinterest Console-->
<meta name="norton-safeweb-site-verification" content="norton_code"><!-- Norton Safe Web -->

<!-- Identify the software used to build the document (i.e. - WordPress, Dreamweaver) -->
<meta name="generator" content="program">

<!-- Short description of your document's subject -->
<meta name="subject" content="your document's subject">

<!-- Gives a general age rating based on the document's content -->
<meta name="rating" content="General">

<!-- Allows control over how referrer information is passed -->
<meta name="referrer" content="no-referrer">

<!-- Disable automatic detection and formatting of possible phone numbers -->
<meta name="format-detection" content="telephone=no">

<!-- Completely opt out of DNS prefetching by setting to "off" -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- Specifies the document to appear in a specific frame -->
<meta http-equiv="Window-Target" content="_value">

<!-- Geo tags -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- Country code (ISO 3166-1): mandatory, state code (ISO 3166-2): optional; eg. content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- eg. content="New York City" -->
{% endhighlight %}



{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
