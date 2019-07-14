---
layout: social-post
type: "SocialPosts"
title: "REST API"
cover-image: /assets/images/rest-api-cover.png
image: /assets/images/.gif
excerpt: "As a web developer at some point you’ll hear the words API (Application Programming Interface) and the word REST..."
date: 2019-07-14
categories: [intermediate, api, rest, http]
instagram-id: Bz54h2WiXKj
docs: https://github.com/marmelab/awesome-rest#readme
---
{:.center}
# {{ page.title }}

{:.post-content}
As a web developer at some point you’ll hear the words API
(Application Programming Interface) and the word REST. REST stands for
REpresentational State Transfer. When a RESTful API is call the server will
transfer to the client a representation of the state of the request resource.
Said another way, when an API is called with a request for the number of books
in the library, the library API will return back the state of the books in the
library, which includes the number and a timestamp to signify when that information
was last updated. The format typically is in JSON which we’ve written about
before. When we make an API call we specify a certain URL or Uniform Resource
Locator and we specify an operation that we want the server to perform on that
resource in the form of an HTTP method which is a verb. Those are GET, POST,
PUT, DELETE. In the library book example, we want to GET a number of all the books.

{:.post-content}
Let's continue with our library API and create a couple of API routes:

{% highlight bash %}
# not a real API 😏

# We have some decisions we can make when describing our REST API
# in this API route, we include a route call total since we want to
# get a count for all the books
GET https://api.library.com/books/total
{
  total: 23231,
  last_update: 1563117615
}

# This is a similar endpoint and returns back all the books
# We would assume some kind of pagination is involved since this could be
# an expensive API call
GET https://api.library.com/books

# In this example we're "putting" new book into the collection
PUT https://api.library.com/book/
# this is the payload that we're sending
{
  bookData
}

# In this example we're getting a book with ID 23
GET https://api.library.com/book/23

# In this example we're sending (posting) an update to the book with id 23
POST https://api.library.com/book/23
{
  bookData
}

# In this example we're deleting the book with id 23
DELETE https://api.library.com/book/23
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
