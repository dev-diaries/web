---
layout: post
title: "Use the camera from your webpage, take a snapshot and use for facial recognition. Whatt?"
date:   2019-03-20 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/snapshot.jpg
demo: /assets/images/scss-in-three.gif
categories: [html5, javascript, how-to, facial-recognition]
script: /assets/js/camera-api.js
excerpt: "Using the User Media HTML5 (Camera) API you can take a picture using the user’s camera and use that on your webpage"
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
Using the #HTML5 getUserMedia method from the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices" target="_blank">MediaDevices API</a> 
you can take a picture using the user’s camera and use that on your webpage.
Let's see some code!

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite resources

{:.resources-content}
* [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
* [Camera & Video Control with HTML5](https://davidwalsh.name/browser-camera)
* [Html5 Rocks - GetUserMedia Intro](https://www.html5rocks.com/en/tutorials/getusermedia/intro/)
</div>

{:.image .center}
![sass logo]({{page.image}})

{:.post-content}
By leveraging the navigator.mediaDevices.getUserMedia method you can prompt the 
user for access to their camera, listen for a click event to grab a photo and 
take a snapshot of the user!

{:.post-content}
First, we set our html:

{% highlight hmtl %}
<video id="video" class="video" autoplay></video>
<div id="button" class="button">Take Photo</div>
<canvas id="canvas" width="640" height="480"></canvas>
{% endhighlight %}

{:.post-content}
In the above we're making a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank">video element</a>,
a button to show that user can click that to take a picture. Finally, we have a 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas" target="_blank">canvas element</a>
which allows us to draw graphics and animations. In this case, we use this 
to render the snapshot we're going to take.

{:.post-content}
Then we set up our javascript:

{% highlight javascript %}
let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

// make sure the browser supports accessing the user's media - in our case camera
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const params = { video: true };
    navigator.mediaDevices.getUserMedia(params).then(function(stream) {
        // set the video element to the stream object
        video.srcObject = stream;
        video.play();
    });
}
{% endhighlight %}

{:.post-content}
In the above we make sure the browser the user is on supports the getUserMedia
method and we pass in the params to let the getUserMedia method know we want
video. We then get the user's media aka access the camera and set the video
element's property srcObject to the stream coming from the camera and then we
"play" the video meaning we show the output from our camera 👀.

{% highlight javascript %}
let button = document.getElementById('button');

button.addEventListener('click', function(e) {
    context.drawImage(video, 0, 0, 640, 480);
});
{% endhighlight %}

{:.post-content}
In the above we grab the button element that we created in our HTML and using the
context from our canvas element and use that to draw the image from the video
element that now has an srcObject from what we set above. This is what allows the
drawImage to draw the snapshot we just took.

{:.post-content}
You could then convert that snapshot to a PNG data URI and even pass that along 
to the server for some facial recognition if you wish! Intrigued? Read on for more!

{:.post-content}
Want to see it in action?! <a href="#" id="js-show-demo">Click Me</a>

<div class="center camera-api--hide" id="demo">
    <video id="video" class="video camera-api--video" autoplay></video>
    <div id="button" class="camera-api--button">Take Photo</div>
    <canvas id="canvas" width="640" height="480" class="camera-api--snapshot"></canvas>
    <div>
        Credit to <a href="https://codepen.io/chris22smith/pen/PbBwjp" target="_blank">https://codepen.io/chris22smith/pen/PbBwjp</a>
        for the picture frame CSS.
    </div>
</div>

{:.post-content.camera-api--code}
{% highlight html %}
<!-- Dev Diaries: Here is all the the code so you can copy and paste it and get started right away! -->
<video id="video" class="video" autoplay></video>
<div id="button" class="button">Take Photo</div>
<canvas id="canvas" width="640" height="480"></canvas>

<script>
let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const params = { video: true };
    navigator.mediaDevices.getUserMedia(params).then(function(stream) {
        // set the video element to the stream object
        video.srcObject = stream;
        video.play();
    });
}

let button = document.getElementById('button');
button.addEventListener('click', function(e) {
    context.drawImage(video, 0, 0, 640, 480);
});
</script>
{% endhighlight %}

<div id="js-no-access" class="camera-api--error-parent center">
    <span class="camera-api--error">Sorry, this won't work on your device. Trying going to a newer desktop computer!</span>
</div>

<div id="js-denied" class="camera-api--denied-parent center">
    <span class="camera-api--error">
    Uh oh, looks like you denied us camera access. If you go to the address bar and click
    on the camera icon and change the settings to allow this site to access your 
    camera, you can view the demo after you refresh the page!
    </span>
</div>



