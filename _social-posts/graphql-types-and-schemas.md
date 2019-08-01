---
layout: social-post
type: "SocialPosts"
title: "GraphQL Types & Schema"
cover-image: /assets/images/graphql-types-cover.png
image: /assets/images/.gif
excerpt: "The benefits of GraphQL schema and types is that you know exactly what data you have available and exactly the type of that data..."
date: 2019-07-29
categories: [intermediate, graphql, data]
instagram-id: B0hAsrVCksL
docs: https://graphql.org/learn/schema/
---
{:.center}
# {{ page.title }}

{:.post-content}
You might have heard about #GraphQL. We plan on doing a few different posts on
GraphQL but first let’s dig into what it is and then go into the first topic
we want to cover which is a GraphQL schema and its types. From the docs,
“GraphQL is a query language for APIs and a runtime for fulfilling those queries
with your existing data”. This allows you to only specify what you want in a query
and get exactly that back. The benefits of GraphQL schema and types is that you
know exactly what data you have available and exactly the type of that data.

{:.post-content}
GraphQL has a few types that are supported out of the box:

{% highlight html %}
Int:      A signed 32‐bit integer.

Float:    A signed double-precision floating-point value.

String:   A UTF‐8 character sequence.

Boolean:  true or false.

ID:       The ID scalar type represents a unique identifier, often used to
          refetch an object or as the key for a cache. The ID type is serialized
          in the same way as a String; however, defining it as an ID signifies
          that it is not intended to be human‐readable.
{% endhighlight %}

{:.post-content}
GraphQL introduced its own human readable schema syntax which is called "Schema Definition Language"
also known as SDL. The SDL is used to express the types available in the schema
and how those relate to each other:

{% highlight js %}
type Book {
  title: String
  # this references the author type and is a single author
  author: Author
}

type Author {
  name: String
  # this is multiple books, or an array of books
  books: [Book]
}
{% endhighlight %}

{:.post-content}
In the above example we can see that we a book type and also an author type. The book
contains a title which is a string and an author. The Author type contains a name
which is a string and multiple books, which is an array of books.

{:.post-content}
This is just the tip of the iceberg, read more about <a href="{{page.docs}}" target="_blank">graphQL types</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
