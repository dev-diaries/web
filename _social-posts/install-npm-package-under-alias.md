---
layout: social-post
type: "SocialPosts"
title: "Install A NPM Package Under An Alias"
cover-image: /assets/images/npm-alias-cover.png
image: /assets/images/.gif
excerpt: "As more and more NPM packages are being released the available names of packages are dwindling. You might want to name your module something but a package you installed might be causing a naming collision. Thanks to NPM aliasing feature you can install packages under an aliased name..."
date: 2020-06-07
categories: [intermediate, npm, javascript]
instagram-id: CBI8GXzlO2T
docs: https://npm.community/t/release-npm-6-9-0/5911
---
{:.center}
# {{ page.title }}

{:.post-content}
As more and more NPM packages are being released the available names of packages
are dwindling. You might want to name your module something but a package you
installed might be causing a naming collision. Thanks to NPM aliasing feature
you can install packages under an aliased name and name your local modules
whatever you want!

{:.post-content}
Say you have a local module named store but you also want to use the battle
tested local storage wrapper <a href="https://www.npmjs.com/package/store" target="_blank">store</a>
in your application. You might want to alias your install of store:

{% highlight bash %}
npm install local-store@npm:store
{% endhighlight %}

{:.post-content}
This will appear in your package.json as:

{% highlight json %}
  "dependencies": {
    "local-store": "npm:store@^2.0.12",
   }
{% endhighlight %}

{:.post-content}
You can then reference it in your file by the alias:

{% highlight html %}
import * as localStore from 'local-store'
{% endhighlight %}

{:.post-content}
You're then free to use the name `store` however you wish! Pretty cool, right?!

{:.post-content}
The release announcement can be found <a href="{{page.docs}}" target="_blank">here</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
