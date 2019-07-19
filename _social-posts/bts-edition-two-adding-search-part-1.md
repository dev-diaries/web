---
layout: social-post
type: "SocialPosts"
title: "Behind The Scenes: Edition 2 - Adding Search To A Static Site"
cover-image: /assets/images/bts-2-cover.png
image: /assets/images/.gif
excerpt: "We recently added the ability to search on our website. Let's learn how in our two part series..."
date: 2019-07-16
categories: [advanced, static-sites, jekyll, behind-the-scenes, search, solr]
instagram-id: Bz_RjU0CFXi
docs:
---
{:.center}
# {{ page.title }}

{:.post-content}
We recently added the ability to search on our website. In total, we're using:
<a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://lunrjs.com/" target="_blank">Lunrjs</a> for our search functionality.
Lunrjs is simpler, javascript version of <a href="https://lucene.apache.org/solr/" target="_blank">solr</a> which is an open source enterprise
search platform. If you’ve heard of <a href="https://www.elastic.co/products/elasticsearch" target="_blank">elasticsearch</a>,
solr is a similar product to that.

{:.post-content}
First, we build out jekyll documents into a JSON array and expose them to the window object using javascript:

{% highlight js %}
  const documents = [];
  // we make the array of categories a string so our search index will pick up each
  { % for post in site.posts % }
      const doc = {
          excerpt: "{{ post.excerpt }}",
          title: "{{ post.title }}",
          type: "{{ post.type }}",
          categories: [{% for category in post.categories %} "{{ category }}"{% if forloop.last %}{% else %},{% endif %}{% endfor %}],
          categoriesString: "{% for category in post.categories %} {{ category }}{% if forloop.last %}{% else %} {% endif %}{% endfor %}",
          date: "{{ post.date }}",
          link: "{{ post.url }}"
      };
      documents.push(doc);
  { % endfor % }
{% endhighlight %}

{:.post-content}
There is some complexity that we handle by passing in flags to which type of collection we want to index on that particular page:
{:.post-content}
* If we’re on the /blog page of our site we only want to search blog entries. Makes sense right? If we’re on the /social page to view our social media posts we only want to search social posts.
{:.post-content}
* If we’re on the home page we want to search blog and social posts so in that case we pass the flag as true for both the blogDocs and the socialDocs.

{% highlight html %}
{ % if page.blogDocs % }
    { % for post in site.posts % }
        // same loop heres previous
    { % endfor % }
{ % endif % }

{ % if page.socialDocs % }
    { % for post in site.social-posts % }
        // same loop heres previous
    { % endfor % }
{ % endif % }

// in our respective templates
social.html:
  socialDocs: true

blog.html
  blogDocs: true

index.html (homepage):
  socialDocs: true
  blogDocs: true
{% endhighlight %}

{:.post-content}
Check [part two](/social-posts/bts-edition-two-adding-search-part-2/) of how we
integrated this search with React to render the results.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
