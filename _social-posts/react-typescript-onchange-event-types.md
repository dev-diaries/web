---
layout: social-post
type: "SocialPosts"
title: "React + Typescript onChange Event Types"
cover-image: /assets/images/react-typescript-onchange-events.png
image: /assets/images/.gif
excerpt: "It is useful to know the different onChange event types when working with React and Typescript"
date: 2021-11-18
tags: [react, typescript]
categories: [intermediate, react, typescript]
instagram-id:
docs: https://reactjs.org/docs/forms.html
---
{:.center}
# {{ page.title }}

{:.post-content}
We've written about [typescript](/social-posts/typescript-basic-types/) quite a
[few](/social-posts/typescript-useful-compilation-options/) [times](https://www.dev-diaries.com/social-posts/using-create-react-app-to-start-a-project/)
and we're big fans. When working with typescript and forms it is useful to know
the `onChange` event types. We've collected them here in one place for reference
and convenience

{% highlight js %}
<select
   name="mySelect"
   onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelect(e)}
></select>

<input
  name="myIput"
  type="text"
  onChange={(e: React.FormEvent<HTMLInputElement>) => setIput(e)}
/>

<input
  name="myCheckbox"
  type="checkbox"
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckbox(e)}
/>

<input
  name="myRadio"
  type="radio"
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadio(e)}
/>

<textarea
  name="myTextarea"
  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e)}
/>
{% endhighlight %}


{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>. This
<a href="https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c" target="_blank">Medium</a>
article is a good reference as well.

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
