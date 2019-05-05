---
layout: social-post
type: "SocialPosts"
title: "Use Progressive JPEGS To Improve Your Website Load Time"
cover-image: /assets/images/progressive-jpeg-cover.jpg
image: /assets/images/.gif
excerpt: "If you have high quality images that might be slow to load, you might want to use a progressive jpeg which can decrease load time for your website and improve the user experience"
date: 2019-05-04
categories: [advanced, images, usability, website-speed]
instagram-id: BxDQ7AOBmZP
docs: https://www.thewebmaster.com/dev/2016/feb/10/how-progressive-jpegs-can-speed-up-your-website/
---
{:.center}
# {{ page.title }}

{:.post-content}
If you have high quality images that might be slow to load, you might want to 
use a progressive jpeg which can decrease load time for your website and improve the user experience.
A progressive jpeg is an image using compression algorithms that load the image 
in waves until the entire image is downloaded vs a normal jpeg which loads the image from top to bottom line by line.
The progressive image makes it so the perceived load time is quicker. 

{:.post-content}
This is the regular image:

{:.image .center}
![original](/assets/images/original-image.jpg)

{:.post-content}
This is the progressive image:

{:.image .center}
![progressive](/assets/images/progressive-image.jpg)

{:.post-content}
Check the gif below to see the difference in loading. The progressive image has the initial load 
and then gets better in quality as time goes by, versus the regular image at the top
loads in at top quality but from top to bottom and finishes loading much slower.

## Example

{:.image .center}
![progressive](/assets/images/progressive-comparison.gif)

{:.post-content}
Curious how you can convert images to be a progressive jpeg? There is this website
<a href="https://www.jpeg.io/" target="_blank">jpeg.io</a> which can do it for you.
Command line fan? You can also use <a href="https://imagemagick.org/index.php" target="_blank">ImageMagick</a>
which you can install a number of ways. Check the <a href="https://imagemagick.org/script/download.php" target="_blank">download page</a>
Then you can run this command to convert:

{% highlight bash %}
convert original-image.jpg -interlace plane progressive-image.jpg
{% endhighlight %}

{:.post-content}
The convert command is a part of the ImageMagick suite and comes with the 
ImageMagick installation.

{:.post-content}
Read more about it in this <a href="{{page.docs}}" target="_blank">guide</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
