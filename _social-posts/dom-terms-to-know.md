---
layout: social-post
type: "SocialPosts"
title: "DOM Terms To Know"
cover-image: /assets/images/repaint-cover.png
image: /assets/images/.gif
excerpt: "If you’re working with CSS or JavaScript there are some terms that are important to know. With either you’re going to be affecting the DOM (Document Object Model) which is an API to a webpage, allowing users of that API to read and manipulate the page’s content, structure, and styles.."
date: 2019-07-15
categories: [intermediate, dom, css, javascript, reflow, repaint]
instagram-id:
docs:
---
{:.center}
# {{ page.title }}

{:.post-content}
If you’re working with CSS or JavaScript there are some terms that are important
to know. With either you’re going to be affecting the DOM (Document Object Model)
which is an API to a webpage, allowing users of that API to read and manipulate
the page’s content, structure, and styles. The DOM is represented by a node tree
with a parent stem and several branches which are nested elements.

{:.post-content}
**Layout** is the process where the browser figures out the size and location
for all elements on the page. Layout is normally scoped to the entire document.

{:.post-content}
A **reflow** is the name of the web browser process for recalculating the layout
of the page. It recompute the dimensions and position of the element and
triggers reflows on the elements children, ancestors, and elements that appear
after it in the DOM. Some examples of what cause a reflow is changing the width,
height, font-family, font-size.

{:.post-content}
A **paint** is the process to fill pixels for every visual part of an element
which includes color, border, outline, visibility, background.

{:.post-content}
A **repaint** occurs when changes are made to an elements skin that changes it visibly, but does not affect its layout.

{:.post-content}
**Composite** is the step where the browser needs to draw layers in the correct order.
Since elements can overlap each other, this step is important to make sure elements appear in the order intended.

{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about <a href="https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing" target="_blank">layout</a>.
Read more about <a href="https://developers.google.com/speed/docs/insights/browser-reflow" target="_blank">reflow</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
