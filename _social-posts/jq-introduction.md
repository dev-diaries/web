---
layout: social-post
type: "SocialPosts"
title: "JQ: Introduction & Simple Examples"
cover-image: /assets/images/jq-examples-cover.png
image: /assets/images/.gif
excerpt: "JQ is a powerful and lightweight command line JSON processor. It is a tool no web developer should be without."
date: 2019-03-30
categories: [advanced, javascript, tools, json, terminal]
instagram-id: Bvo_K4Gh-I0
docs: https://stedolan.github.io/jq/manual/
---
{:.center}
# {{ page.title }}

{:.post-content}
JQ is a powerful and lightweight command line JSON processor. It is a tool no 
web developer should be without. There are almost endless possibilities with 
jq, but here are a few basic examples:

{% highlight javascript %}
echo '{"jules":27,"leo":30,"bella":19,"ella":36}' | jq '.jules'
27

echo '{"jules":27,"leo":30,"bella":19,"ella":36}' | jq '{females: [.jules,.bella,.ella]}'
{
  "females": [
    27,
    19,
    36
  ]
}

echo '{"jules":27,"leo":30,"bella":19,"ella":36}' | jq '.[]'
27
30
19
36

echo '{"jules":27,"leo":30,"bella":19,"ella":36}' | jq 'keys'
[
  "bella",
  "ella",
  "jules",
  "leo"
]
{% endhighlight %}

{:.post-content}
There are some useful bash aliases you can setup to make dealing with JSON a bit
more manageable in the command line

{% highlight linux %}
# takes whatever JSON we have in our clipboad, minifies it and copies it back to our clipboard
function minify() {
    pbpaste | jq -c '.' $@ | pbcopy
}

# takes our minified JSON from our clipboard and expands it and copies it back to our clipboard
function copyJson() {
    pbpaste | jq '.' $@ | pbcopy
}

# outputs the json we have in our clipboard out to our terminal in pretty format
# also if the json is invalid tells us where the error is
function validate() {
    pbpaste | jq '.' $@
}
{% endhighlight %}


{:.post-content}
Read more about JQ <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
