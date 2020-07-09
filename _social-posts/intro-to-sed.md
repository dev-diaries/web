---
layout: social-post
type: "SocialPosts"
title: "Intro To Sed"
cover-image: /assets/images/sed-cover.png
image: /assets/images/.png
excerpt: "Sed is a very useful tool in linux and can be very powerful when chained with other linux commands."
date: 2020-07-09
categories: [beginner, linux, terminal, cli]
instagram-id:
docs: https://linux.die.net/man/1/sed
---
{:.center}
# {{ page.title }}

{:.post-content}
Another useful linux tool is sed which stands for stream editor and is used to
perform text transofmrations on an input stream which can be a file or input from a pipe.
By default sed outputs everything to standard out so you need to direct the output
to a file if that is what you want. Let's jump into some examples.

{:.post-content}
In our <a href="https://github.com/dev-diaries/web/" target="_blank">Github repository</a>
we have a default template for writing our [social posts](/social). As part of that
template we want a dynamic date that sets the current date:

{% highlight html %}
layout: social-post
type: "SocialPosts"
title: ""
cover-image: /assets/images/.png
image: /assets/images/.gif
excerpt: ""
date:
{% endhighlight %}

{:.post-content}
Using sed we can dynamically update that date string to include the current date:

{% highlight bash %}
cat template.md | pbcopy
pbpaste | sed 's/date:/'"date: $(date '+%Y-%m-%d')"'/g'
{% endhighlight %}

{:.post-content}
Which will output:

{% highlight bash %}
layout: social-post
type: "SocialPosts"
title: ""
cover-image: /assets/images/.png
image: /assets/images/.gif
excerpt: ""
date: 2020-07-09
{% endhighlight %}

{:.post-content}
Unsure about the pbcopy and pbpaste above. Check out post [Copying & Pasting In CLI With pbcopy & pbpaste](/social-posts/pbcopy-pbpaste/).

{:.post-content}
In our case we're call a bash script so the sed instructions are a bit different because
we need to write to a file and want to edit the file in place. Our bash script looks like this:

{% highlight bash %}
cp ./bin/template.md $1.md
date=$(date '+%Y-%m-%d')
sed -i '' 's/date:/'"date: $date"'/g' $1.md
mv $1.md ./social-posts/
{% endhighlight %}

{:.post-content}
We use the `-i` flag which is equivalent ti `--in-place` and we pass an empty string
as the backup location which is the "zero length extension" for backup which basically
means don't create a backup and write directly to a file.

{:.post-content}
If you're on mac vs. linux it might be worth reading up on the differences
between Mac OSX sed and other standard sed: <a href="" target="_blank">Differences between sed on Mac OSX and other “standard” sed?</a>

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a> and
<a href="https://www.digitalocean.com/community/tutorials/the-basics-of-using-the-sed-stream-editor-to-manipulate-text-in-linux" target="_blank">Digital Ocean</a>
has a nice overview on sed as well. If you're looking to get deep into sed, check out
the <a href="https://www.grymoire.com/unix/sed.html" target="_blank">Grymoire sed guide</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
