---
layout: social-post
type: "SocialPosts"
title: "Image Manipulations With Imagemagick"
cover-image: /assets/images/imagemagick-covers.png
image: /assets/images/.gif
excerpt: "ImageMagick is an extremely powerful way to transform images from the command line."
date: 2019-05-20
tags: [linux]
categories: [advanced, cli, terminal, images, linux]
instagram-id: BxspvJxCUYT
docs: https://imagemagick.org/script/command-line-options.php
---
{:.center}
# {{ page.title }}

{:.post-content}
We’ve mentioned it before when we talked about [progressive jpegs](/social-posts/progressive-jpeg-images/). Knowing some
basic commands can save you time and allow you to stay in the terminal.

{:.post-content}
To install on Linux:
{% highlight bash %}
sudo apt-get install imagemagick
{% endhighlight %}

{:.post-content}
To install on Mac:
{% highlight bash %}
brew update && brew install imagemagick
{% endhighlight %}

{:.post-content}
There are two commands that come out of the box when you install ImageMagick,
<a href="https://www.imagemagick.org/script/convert.php" target="_blank">convert</a> <a href="https://www.imagemagick.org/script/convert.php" target="_blank">mogrify</a>
and they both generally take the same arguments. Convert transforms the image
and creates a new one and mogrify replaces the image in place. With these examples
we'll show them being used with both commands, but you can use them interchangeably.

{:.post-content}
To resize an image

{% highlight bash %}
convert image.jpg -resize 1080x1080 updated-file.jpg
{% endhighlight %}

{:.post-content}
It might be useful to add in the `-gravity center` flag as well with the above command.

{% highlight bash %}
mogrify -resize 50% *.jpg
{% endhighlight %}

{:.post-content}
Trim whitespace from an image

{% highlight bash %}
mogrify -trim *.{jpg,png}
{% endhighlight %}


{:.post-content}
Note that ImageMagick will maintain aspect ratio so to enforce the resolution strictly
you can add in a exclamation symbol:

{% highlight bash %}
convert image.jpg -resize 1080x1080! updated-file.jpg
{% endhighlight %}

{:.post-content}
To reduce the quality and the image size you can pass in the `quality` flag:

{% highlight bash %}
mogrify image.jpg -quality 75
{% endhighlight %}

{:.post-content}
Convert a PNG to a JPG:

{% highlight bash %}
convert myimage.png myimage.jpg
{% endhighlight %}

{:.post-content}
Create a collage of images by using the montage command:

{% highlight bash %}
montage image1.jpg image2.jpg image3.jpg image4.jpg output-montage.jpg -geometry +2+2
{% endhighlight %}

{:.post-content}
Change colors in an image:

{% highlight bash %}
convert white.png -fill '#000' -opaque '#fff' black.png
{% endhighlight %}

{:.post-content}
Create a favicon

{% highlight bash %}
convert source.png -define icon:auto-resize favicon.ico
{% endhighlight %}

{:.post-content}
We used this on <a href="https://medium.com/@contactsunny/a-few-basic-but-powerful-imagemagick-commands-b5809b0a1076" target="_blank">Medium</a>
and this guide on <a href="https://hackernoon.com/save-time-by-transforming-images-in-the-command-line-c63c83e53b17" target="_blank">Hackernoon</a>
to compile these commands. Read more about ImageMagick <a href="{{page.docs}}" target="_blank">in the docs.</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
