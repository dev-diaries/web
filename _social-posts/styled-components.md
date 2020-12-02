---
layout: social-post
type: "SocialPosts"
title: "Intro To Styled Components"
cover-image: /assets/images/styled-components-cover.png
image: /assets/images/.gif
excerpt: "The idea of CSS in JS was a concept that was first talked about in 2014 and some dismissed it as nonsense..."
date: 2019-07-02
tags: [javascript]
categories: [intermediate, react, styled-components, css-in-js, css, javascript]
instagram-id: BzbKzy7n7u_
docs: https://www.styled-components.com/
---
{:.center}
# {{ page.title }}

{:.post-content}
The idea of CSS in JS was a concept that was first talked about in 2014 and 
some dismissed it as nonsense. However, there are some really well supported 
and active libraries that can you use in your project that take advantage of 
CSS in JS. One of those is styled-components. If you remember our JavaScript 
[template literals post](/social-posts/tagged-template-literals/) you might remember we mentioned styled-components there. 
Using styled-components allow you to keep your styles very tightly coupled 
with your individual components, and can make components more readable. Another 
plus is that components can be very testable for stylistic properties. Using 
something like <a href="https://github.com/styled-components/jest-styled-components" target="_blank">jest styled components</a> 
you can directly test for styling properties that your components should have.

{:.post-content}
A styled component looks like this:

{% highlight javascript %}
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;
{% endhighlight %}

{:.post-content}
Overall, there are pros and cons to using styled components, and like most things in 
web development the answer if you should use it or not, is "it depends...".
Play around with it, and see if it fits your use case! Read more about <a href="{{page.docs}}" target="_blank">styled components</a>.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
