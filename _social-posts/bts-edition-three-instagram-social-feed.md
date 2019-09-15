---
layout: social-post
type: "SocialPosts"
title: "Behind The Scenes: Edition 3 - Instagram Social Feed"
cover-image: /assets/images/bts-instagram-feed-cover.png
image: /assets/images/.gif
excerpt: "On our site, near the bottom we have a handy social feed that showcases our Instagram feed and also links to the post on our website that relates to the Instagram post. Wonder how that works? Let's go take a #bts (behind the scenes) look."
date: 2019-09-15
categories: [beginner, social-feed, html, javascript]
instagram-id: B2cUoPei46p
docs:
---
{:.center}
# {{ page.title }}

{:.post-content}
Near the footer of our site we have a handy social feed that showcases our Instagram feed and
also links to the post on our website that relates to the Instagram post.
Wonder how that works?

{:.post-content}
Typically if you're trying to do something on the internet, chances are someone
has had that same problem and that they've released some kind of package or resource
that you can take advantage of to save some work. In our case, showing an Instagram
feed on a website is a pretty common use case. A quick search, lead us to
<a href="https://thomasvaeth.com/instafetch.js/" target="_blank">Instafetch</a>,
which solved our need pretty well and took us 90% of the way there. Since on our site
our Instagram posts link directly to the social posts we wanted to be able to link
directly to the page on our site from the Instagram post instead of linking
back to Instagram.

{:.post-content}
Checking the docs of InstaFetch you can see to initialize the package requires
passing in a few options to set the preferences.

{% highlight html %}
<script type="text/javascript">
  instafetch.init({
    accessToken: 'ACCESS TOKEN',
    target: 'instafetch',
    numOfPics: 20,
    caption: false
  });
</script>
{% endhighlight %}

{:.post-content}
However, we needed a way to have
the instagram posts link back to a page that already exists on our site. Therefore,
we <a href="https://github.com/dev-diaries/instafetch.js" target="_blank">forked</a>
the package to accept an additional param of links which using Jekyll is an array
of the most 10 recent social posts with the instagram id and a link to the post:

{% highlight html %}
var instagrams = [{% raw %}
    {% assign social-posts = site.social-posts | sort: 'date' | reverse %}
    {% for post in social-posts limit:10 %}
    {
        "id": "{{ post.instagram-id }}",
        "url": "{% if post.redirect-link %}{{post.redirect-link}}{% else %}{{ post.url }}{% endif %}"
    }
    {% unless forloop.last %},{% endunless %}
    {% endfor %}
  {% endraw %}];
{% endhighlight %}

{:.post-content}
Then we added in the links as part of the initialization of the Instafetch plugin:

{% highlight html %}
instafetch.init({
    accessToken: ACCESS_TOKEN
    target: 'instafetch',
    numOfPics: 10,
    caption: false,
    links: window.instagrams
});
{% endhighlight %}

{:.post-content}
Then, in our forked version of InstaFetch we added in logic to parse the `links`
array and link to the url we provided instead of the Instagram post, which was the default:

{% highlight js%}
  if (options.links) {
      link = getLocalUrl(options.links, data.link);
  }
  a.href = link || data.link;
  if (!link) {
    a.target = '_blank';
  }

 /**
 * Get the local url if the id has a match
 * @private
 * @param {Array} links Array of links with an id and a url
 * @param {String} instaLink url of the instagram link
 * @returns {String|boolean}
 *
  */
const getLocalUrl = (links, instaLink) => {
  for (const link of links) {
    if (instaLink.indexOf(link.id) > -1) {
      return link.url;
    }
  }

  return false;
};
{% endhighlight %}

{:.post-content}
See the result at the bottom. As a result after a post we have to add in the
Instagram ID that is assigned from Instagram so we can relate the entry on our
site to the post on Instagram and that's it!

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
