---
layout: social-post
type: "SocialPosts"
title: "JQ Deep Dive Part Two"
cover-image: /assets/images/jq-part-two-cover.png
image: /assets/images/.gif
excerpt: "In a previous post we gave a brief introduction to JQ, a powerful and lightweight command line JSON processor. It is one of our favorite tools and is extremely powerful."
date: 2019-11-20
tags: [cli]
categories: [advanced, javascript, tools, json, terminal, jq, cli]
instagram-id: B5FHztIC9Fh
docs: https://stedolan.github.io/jq/manual/
---
{:.center}
# {{ page.title }}

{:.post-content}
In a [previous post](/social-posts/jq-introduction) we gave a brief introduction to JQ, a powerful and lightweight
command line [#JSON](/tags/json) processor. It is one of our favorite tools and is extremely powerful.
Check out some more examples of what you can do with JQ:

{% highlight javascript %}
// get the length of an array
> echo '{ "watchList": { "items": [1,2,3,4] } }' | jq '.watchList.items | length'
4
// or if your clipboard
> pbpaste | jq '.watchList.items | length'
4
{% endhighlight %}

{% highlight javascript %}
// get the first element from an array
> echo '{ "watchList": { "items": ["foo",2,3,4] } }' | jq '.watchList.items[0]'
"foo"
{% endhighlight %}

{% highlight javascript %}
// create an array of a particular key of an array
// JSON example
[
  {
    "bikes": 21,
    "name": "W 100 St & Manhattan Ave",
    "idx": 0,
    "lat": 40795000,
    "timestamp": "2019-11-20T07:45:31.463000Z",
    "lng": -73964500,
    "id": 0,
    "free": 18,
    "number": 3328
  },
  {
    "bikes": 14,
    "name": "7 Ave & Central Park South",
    "idx": 1,
    "lat": 40766740,
    "timestamp": "2019-11-20T07:45:31.468000Z",
    "lng": -73979068,
    "id": 1,
    "free": 24,
    "number": 3724
  },
  {
    "bikes": 8,
    "name": "Bedford Ave & Bergen St",
    "idx": 2,
    "lat": 40676368,
    "timestamp": "2019-11-20T07:45:31.469000Z",
    "lng": -73952918,
    "id": 2,
    "free": 15,
    "number": 3571
  }
]
// take from the citi bikes api: https://api.citybik.es/citi-bike-nyc.json
curl http://api.citybik.es/citi-bike-nyc.json | jq 'map(.name)'

echo '[{"bikes":21,"name":"W 100 St & Manhattan Ave","idx":0,"lat":40795000,"timestamp":"2019-11-20T07:45:31.463000Z","lng":-73964500,"id":0,"free":18,"number":3328},{"bikes":14,"name":"7 Ave & Central Park South","idx":1,"lat":40766740,"timestamp":"2019-11-20T07:45:31.468000Z","lng":-73979068,"id":1,"free":24,"number":3724},{"bikes":8,"name":"Bedford Ave & Bergen St","idx":2,"lat":40676368,"timestamp":"2019-11-20T07:45:31.469000Z","lng":-73952918,"id":2,"free":15,"number":3571}]' \
| jq 'map(.name)'
// produces
[
  "W 100 St & Manhattan Ave",
  "7 Ave & Central Park South",
  "Bedford Ave & Bergen St"
]
{% endhighlight %}

{% highlight javascript %}
// creates an array of the keys of the object
echo '{"foo":1,"another-key":"some","another-one":"other"}' | jq 'keys'
// produces
[
  "another-key",
  "another-one",
  "foo"
]
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
