---
layout: social-post
type: "SocialPosts"
title: "HTML5 Video Element"
cover-image: /assets/images/video-element-cover.png
image: /assets/images/videos-of-videos
excerpt: "The HTML5 video element is an easy and well supported way to play video on your website."
date: 2019-05-12 19:13:12 +0800
categories: [intermediate, html, video, javascript, terminal]
instagram-id: 
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
script: /assets/js/video-element.js
---
{:.center}
# {{ page.title }}

{:.post-content}
The HTML5 video element is an easy and well supported way to play video on your website.
It supports multiple video formats and accepts multiple attributes that can change the behavior.

{:.center .block}
<video autoplay loop muted playsinline>
  <source src="{{page.image}}.webm" type="video/webm">
  <source src="{{page.image}}.mp4" type="video/mp4">
</video>

{:.post-content}
The above is a video element set to autplay, on loop and muted with a playsinline
attribute:

{% highlight html %}
<video autoplay loop muted playsinline>
  <source src="/assets/images/videos-of-videos.webm" type="video/webm">
  <source src="/assets/images/videos-of-videos.mp4" type="video/mp4">
</video>
{% endhighlight %}

{:.post-content}
If you read our [camera api post](/blog/camera-api-photo/) you might remember that we used the video
element there as well. Let's check some attributes of the video element:

{:.image .center}
![video-attributes-1](/assets/images/video-attributes-cover-1.png)

{:.image .center}
![video-attributes-2](/assets/images/video-attributes-cover-2.png)

{:.post-content}
Similar to the [audio element](/social-posts/audio-element-html5/) the video
element emits some events which we can bind to so we know what the video
is doing.

{% highlight javascript %}
const videoEl = document.getElementById('js-video');
const status = document.querySelector('.js-status');
const seeking = document.querySelector('.js-seeking');
const PLAYING = 'Video is playing';
const NOT_PLAYING = 'Video is not playing';
const FINISHED_PLAYING = 'Video finished playing';
const SEEKING = 'Video is seeking';
const NOT_SEEKING = 'Video is not seeking';

videoEl.addEventListener('play', (event) => {
    status.innerHTML = PLAYING;
});
videoEl.addEventListener('pause', (event) => {
    status.innerHTML = NOT_PLAYING;
});

videoEl.addEventListener('ended', (event) => {
    status.innerHTML = FINISHED_PLAYING;
});

videoEl.addEventListener('seeking', (event) => {
    seeking.innerHTML = SEEKING;
});

videoEl.addEventListener('seeked', (event) => {
    seeking.innerHTML = NOT_SEEKING;
});
{% endhighlight %}

{:.center .block}
<video controls muted id="js-video">
  <source src="{{page.image}}.webm" type="video/webm">
  <source src="{{page.image}}.mp4" type="video/mp4">
</video>
<span class="js-status">Video is not playing</span><br>
<span class="js-seeking">Video is not seeking</span>

{:.post-content}
Are you looking to covert videos from different formats as well? You can use
<a href="https://ffmpeg.org/" target="_blank">ffmpeg</a> to easily convert
video and audio to multiple formats. For example to go from .mov to .mp4 in your temrinal
you can run:

{% highlight bash %}
ffmpeg -i my-video.mov -vcodec h264 -acodec mp2 my-video.mp4
{% endhighlight %}

{:.post-content}
You can convert .mp4 to .webm by running:

{% highlight bash %}
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm
{% endhighlight %}

{:.post-content}
Read more about the video element <a href="{{page.docs}}" target="_blank">here</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
