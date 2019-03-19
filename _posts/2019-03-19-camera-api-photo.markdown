---
layout: post
title:  "Camera API + Photo + Facial Recognition?"
date:   2019-03-20 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/snapshot.jpg
demo: /assets/images/scss-in-three.gif
categories: [html5, javascript, how-to, facial-recognition]
script: /assets/js/camera-api.js
excerpt: "Using the HTML5 Camera API you can take a picture using the user’s camera and use that on your webpage"
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
Using the #HTML5 #CameraAPI you can take a picture using the user’s camera and use that on your webpage.
Let's see some code!

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite resources

{:.resources-content}
* [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
* [Camera & Video Control with HTML5](https://davidwalsh.name/browser-camera)
</div>

{:.image .center}
![sass logo]({{page.image}})

{:.post-content}
By leveraging the navigator.mediaDevices.getUserMedia method you can prompt the 
user for access to their camera, listen for a click event to grab a photo and then you have a picture. 

{:.post-content}
First, we set our html:

{% highlight hmtl %}
<video id="video" class="video" autoplay></video>
<div id="button" class="button">Take Photo</div>
<div id="context"></div>
<canvas id="canvas" width="640" height="480"></canvas>
{% endhighlight %}

{:.post-content}
Then we set up our javascript:

{% highlight javascript %}
let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const params = { video: true };
    navigator.mediaDevices.getUserMedia(params).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}
{% endhighlight %}

{% highlight javascript %}
let button = document.getElementById('button');

button.addEventListener('click', function(e) {
    context.drawImage(video, 0, 0, 640, 480);
});
{% endhighlight %}

{:.post-content}
You could then convert that snapshot to a PNG data URI and even pass that along to the server for some facial recognition if you wish! Intrigued?

{:.post-content}
Want to see it in action?! <a href="#" id="js-show-demo">Click Me</a>

<div class="center camera-api--hide" id="demo">
    <video id="video" class="video camera-api--video" autoplay></video>
    <div id="button" class="camera-api--button">Take Photo</div>
    <div id="context"></div>
    <canvas id="canvas" width="640" height="480" class="camera-api--snapshot"></canvas>
</div>

