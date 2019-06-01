---
layout: social-post
type: "SocialPosts"
title: "Efficiently Searching Stackoverflow"
cover-image: /assets/images/stackoverflow-search-cover.png
image: /assets/images/.gif
excerpt: "As a web developer searching Stackoverflow is a common occurrence. Take advantage of their search and advanced search rules to make your queries more efficient"
date: 2019-05-18
categories: [intermediate, stackoverflow, search]
instagram-id: BxmXhgXCoYt
docs: https://stackoverflow.com/help/searching
---
{:.center}
# {{ page.title }}

{:.post-content}
To search within a tag you can do this: [tag-name] term. For example:
{% highlight html %}
[javascript] react
{% endhighlight %}

{:.post-content}
Read more about <a href="https://stackoverflow.com/help/tagging" target="_blank">tags</a>.
See the <a href="https://stackoverflow.com/tags" target="_blank">list of tags</a>.

{:.post-content}
Find a specific phrase, put the term in quotes:
{% highlight html %}
"angular state management"
{% endhighlight %}

{:.post-content}
Limit search to the title of the question, or limit to the body of the question

{% highlight html %}
title: Flask
body: memory management
{% endhighlight %}

{:.post-content}
Search your posts:

{% highlight html %}
user:me promises
{% endhighlight %}

{:.post-content}
Exclude items from your results:

{% highlight html %}
javascript -jquery
{% endhighlight %}

{:.post-content}
Read more about searching stackoverflow <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
