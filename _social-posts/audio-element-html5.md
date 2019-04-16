---
layout: social-post
type: "SocialPosts"
title: "HTML5 Audio Element"
cover-image: /assets/images/audio-element-cover.png
image: /assets/images/audio-element-options-cover.png
excerpt: "Using HTML5 you can embed audio on your website"
date: 2019-04-14
categories: [beginner, audio, html5, sound, javascript]
instagram-id: BwPxr5kBg-W
docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
script: /assets/js/audio-element.js
---
{:.center}
# {{ page.title }}

{:.post-content}
Using #HTML5 you can embed audio on your website. You can include several audio sources to help ensure the browser will be able to play your content. Swipe through to see available properties and events emitted from playing audio.

{% highlight html %}
<audio controls>
  <source src="sample.mp3" type="audio/mpeg">
  <source src="sample.ogg" type="audio/ogg">
</audio>
{% endhighlight %}

{:.post-content}
Will output this:
<audio controls>
  <source src="/assets/audio/sample.mp3" type="audio/mpeg">
  <source src="/assets/audio/sample.ogg" type="audio/ogg">
</audio>

{:.post-content}
Audio courtesy of <a href="http://techslides.com/sample-files-for-development" target="_blank">techslides.com</a>

{:.image .center}
![control-options]({{page.image}})

{:.post-content}
Using the events emitted by the audio element we can know when certain actions
have occurred.

{% highlight javascript %}
<span class="js-status">Audio is not playing</span>
<audio controls id="js-audio">
  <source src="sample.mp3" type="audio/mpeg">
  <source src="sample.ogg" type="audio/ogg">
</audio>
<script>
const audioEl = document.getElementById('js-audio');
const status = document.querySelector('.js-status');
const PLAYING = 'Audio is playing';
const NOT_PLAYING = 'Audio is not playing';

audioEl.addEventListener('play', (event) => {
    status.innerHTML = PLAYING;
});
audioEl.addEventListener('pause', (event) => {
    status.innerHTML = NOT_PLAYING;
});
audioEl.addEventListener('ended', (event) => {
    status.innerHTML = NOT_PLAYING;
});
</script>
{% endhighlight %}
<audio controls id="js-audio">
  <source src="/assets/audio/sample.mp3" type="audio/mpeg">
  <source src="/assets/audio/sample.ogg" type="audio/ogg">
</audio>
<span class="js-status">Audio is not playing</span>

{:.post-content}
Read more about <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events" target="_blank">media events</a>.
This <a href="https://stackoverflow.com/questions/9752983/setvolume-for-html5-audio-doesnt-work-on-mobile-android-or-safari-any-workaro" target="_blank">Stack Overflow</a>
answer might be useful in case you have issues with the setVolume event on mobile
android or Safari.

{:.post-content}
Read more about the <a href="{{page.docs}}" target="_blank">audio element</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
