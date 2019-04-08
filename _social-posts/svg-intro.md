---
layout: social-post
type: "SocialPosts"
title: "SVG: Intro & Overview"
cover-image: /assets/images/svg-star-cover.png
image: /assets/images/.gif
excerpt: "SVG or Scalable Vector Graphics is an XML based markup language and is a powerful way to display images."
date: 2019-04-07
categories: [intermediate, intro, graphics, html5]
instagram-id: Bv9cy8ZhXnx
docs: https://developer.mozilla.org/en-US/docs/Web/SVG
---
{:.center}
# {{ page.title }}

{:.post-content}
SVG or Scalable Vector Graphics is an XML based markup language and is a powerful way to display images. 
It is widely supported amongst browsers, can infinitely scale because it is built 
upon XML markup, and is more flexible than JPG or PNG’s we can use CSS and Javascript to 
interact with them. SVG’s are also easy to animate, see the last example as a teaser
of a much deeper rabbit hole of a topic.

{:.post-content}
<h2>Star:</h2>
<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lightblue;stroke:white;stroke-width:5;fill-rule:nonzero;"/>
</svg>

{% highlight html %}
<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lightblue;stroke:white;stroke-width:5;fill-rule:nonzero;"/>
</svg>
{% endhighlight %}

{:.post-content}
Check our <a href="https://codepen.io/the_dev_diaries/pen/XQjXmB" target="_blank">Codepen</a>

{:.post-content}
<h2>Ellipse:</h2>
<svg height="150" width="500">
  <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:blue" />
  <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:orange" />
  <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
</svg>

{% highlight html %}
<svg height="150" width="500">
  <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:blue" />
  <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:orange" />
  <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
</svg>
{% endhighlight %}

{:.post-content}
Check our <a href="https://codepen.io/the_dev_diaries/pen/JVRGEV" target="_blank">Codepen</a>

{:.post-content}
<h2>Shrinking rectangle:</h2>
<svg width="250" height="150">
<rect x="10" y="10" width="200" height="150" stroke="orange" fill="orange">
  <animate id="animation"
    attributeName="width"
    attributeType="XML"
    from="200" to="20"
    begin="0s" dur="5s"
    fill="freeze" />
</rect>
</svg>
<input id="js-refresh" type="button" value="Refresh"/>


<script>
const refresh = document.getElementById('js-refresh');

refresh.onclick = function() {
  document.getElementById('animation').beginElement();
}
</script>

{% highlight html %}
<svg width="250" height="150">
<rect x="10" y="10" width="200" height="150" stroke="orange" fill="orange">
  <animate id="animation"
    attributeName="width"
    attributeType="XML"
    from="200" to="20"
    begin="0s" dur="5s"
    fill="freeze" />
</rect>
</svg>
<input id="js-refresh" type="button" value="Refresh"/>


<script>
const refresh = document.getElementById('js-refresh');

refresh.onclick = function() {
  document.getElementById('animation').beginElement();
}
</script>
{% endhighlight %}

{:.post-content}
Check our <a href="https://codepen.io/the_dev_diaries/pen/XQjXpx" target="_blank">Codepen</a>

{:.post-content}
* Read the overview on Mozilla<a href="{{page.docs}}" target="_blank"> here</a>
* Check a good introduction from <a href="https://flaviocopes.com/svg/" target="_blank">flaviocopes</a>
* A good guide from <a href="https://css-tricks.com/lodge/svg/" target="_blank">CSS Tricks</a>
* SVG tutorial from <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial" target="_blank">Mozilla</a>
* SVG book from O'Reilly Media with some great examples can be found <a href="https://github.com/oreillymedia/svg-essentials-examples" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
