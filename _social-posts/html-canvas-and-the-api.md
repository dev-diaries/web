---
layout: social-post
type: "SocialPosts"
title: "Canvas API: Introduction & Basic Usage"
cover-image: /assets/images/canvas-api-cover.png
image: /assets/images/.gif
excerpt: "The canvas API allows you to draw graphics using Javascript & the HTML &lt;canvas&gt; element. It can do a ton and can be used for animation, game graphics, data visualization, photo manipulation, and real time video processing."
date: 2019-03-31
categories: [intermediate, html, canvas, api, intro, graphics]
instagram-id: BvqhCktB5Pl
docs: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
script: /assets/js/canvas-api.js
---
{:.center}
# {{ page.title }}

{:.post-content}
The canvas API allows you to draw graphics using Javascript & the HTML 
&lt;canvas&gt; element. It can do a ton and can be used for animation, 
game graphics, data visualization, photo manipulation, and real time video processing.
We mentioned it earlier in our [MediaDevices API](/blog/camera-api-photo/) post so you might remember it 
some. Swipe through to see some simple examples of it’s usage. 
This is just the tip of the iceberg. 

{% highlight js %}
<canvas id="simple-canvas"></canvas>

<script>
const canvas = document.getElementById('simple-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 150, 200);
</script>
{% endhighlight %}

{:.post-content}
Will show this:
<canvas id="simple-canvas"></canvas>

{:.post-content}
Let's make a pie chart. Note, this example is copied from <a href="https://joshondesign.com/p/books/canvasdeepdive/toc.html" target="_blank">HTML Canvas Deep Dive</a> by Josh Marinacci

{% highlight js %}
<canvas id="pie-canvas"></canvas>

<script>
//initialize data set
let data = [ 100, 68, 20, 30, 100 ];

const pieCanvas = document.getElementById('pie-canvas');
let c = pieCanvas.getContext('2d');
//draw background
c.fillStyle = "white";
c.fillRect(0,0,500,500);

//a list of colors
let colors = [ "orange", "green", "blue", "yellow", "teal"];

//calculate total of all data
let total = 0;
for(let i=0; i < data.length; i++) {
    total += data[i];
}

//draw pie data
let prevAngle = 0;
for(let i = 0; i < data.length; i++) {
    //fraction that this pieslice represents
    let fraction = data[i]/total;
    //calc starting angle
    let angle = prevAngle + fraction * Math.PI*2;

    //draw the pie slice
    c.fillStyle = colors[i];

    //create a path
    c.beginPath();
    c.moveTo(250,250);
    c.arc(250,250, 100, prevAngle, angle, false);
    c.lineTo(250,250);

    //fill it
    c.fill();

    //stroke it
    c.strokeStyle = "black";
    c.stroke();

    //update for next time through the loop
    prevAngle = angle;
}

//draw centered text
c.fillStyle = "black";
c.font = "24pt sans-serif";
let text = "Sales Data from 2025";
let metrics = c.measureText(text);
c.fillText(text, 250-metrics.width/2, 400);
</script>
{% endhighlight %}

{:.post-content}
Will show this:
<canvas id="pie-canvas" width="500" height="500"></canvas>

{:.post-content}
* Read more about it <a href="{{page.docs}}" target="_blank">here</a>
* Play with our codepen <a href="https://codepen.io/the_dev_diaries/pen/wOVLrL" target="_blank">here</a>
* We would also be remiss if we didn't mention the extremely popular library 
<a href="https://d3js.org/" target="_blank">D3</a> which allows you to manipulate
documents based on data. 

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
