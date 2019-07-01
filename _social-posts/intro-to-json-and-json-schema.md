---
layout: social-post
type: "SocialPosts"
title: "Intro To JSON & JSON Schema"
cover-image: /assets/images/json-cover.png
image: /assets/images/.gif
excerpt: "As a web developer, it’ll be hard to not come across JSON or JavaScript Object Notation, so understanding it is important as a webdev. "
date: 2019-07-01
categories: [beginner, json, javascript, json-schema]
instagram-id: BzYwI3yiSNK
docs: https://www.json.org/
---
{:.center}
# {{ page.title }}

{:.post-content}
As a web developer, it’ll be hard to not come across JSON or JavaScript Object 
Notation, so understanding it is important as a webdev. It is human readable and 
easily parsed by a machine and often used as a common format to serialize and 
deserialize data in applications that communicate with each over on the web. It 
is an open standard and commonly used in RESTful (Representation State Transfer) web services.

{:.post-content}
JSON exists as only two data structures: objects and arrays. An object is a set
of name-value pairs:

{% highlight javascript %}
{ "name": "value" }
{% endhighlight %}

{:.post-content}
An array of a list of values:

{% highlight javascript %}
[1, 2, 3, "four"]
{% endhighlight %}

{:.post-content}
JSON has seven value types:

{% highlight javascript %}
// string
{ "type": "some-string" }

// number
{ "type": 2 }

// object
{ "type": { "obj": "object" } }

// array
{ "type": [1, 2] }

// true
{ "type": true }

// false
{ "type": false }

// null
{ "type": null }
{% endhighlight %}

{:.post-content}
There is a specification for JSON called JSON schmea. It describes a JSON
format, can be used for automated testing and can be used to validate data. There
are several validators in different languages to validate a JSON object given a JSON
schema. An example looks like this:

{% highlight json %}
{
   "$schema": "http://json-schema.org/draft-04/schema#",
   "title": "Product",
   "description": "A product from Acme's catalog",
   "type": "object",

   "properties": {

      "id": {
         "description": "The unique identifier for a product",
         "type": "integer"
      },

      "name": {
         "description": "Name of the product",
         "type": "string"
      },

      "price": {
         "type": "number",
         "minimum": 0,
         "exclusiveMinimum": true
      }
   },
   "required": ["id", "name", "price"]
}
{% endhighlight %}

{:.post-content}
Learn more about <a href="https://json-schema.org/" target="_blank">JSON Schema</a>

{:.post-content}
Read more about JSON <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
