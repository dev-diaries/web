---
layout: social-post
type: "SocialPosts"
title: "Multi line terneray expression in terraform"
cover-image: /assets/images/multiline-ternary-terraform.png
image: /assets/images/.gif
excerpt: "Ternary operators can be nested in terraform's HCL. This post explains how!"
date: 2021-10-07
tags: [devops]
categories: [intermediate, terraform, infrastructure, devops]
instagram-id:
docs: https://www.terraform.io/docs/language/expressions/conditionals.html
---
{:.center}
# {{ page.title }}

{:.post-content}
If you're using <a href="https://www.terraform.io/" target="_blank">Terraform</a>
writing multi line ternary expressions can come in handy. They can also be nested which
can be useful – but be careful that it doesn't become unreadable!

{% highlight yaml %}
locals {
  iam_access_creds = (
    var.create ?
    var.create_both_creds ?
      [module.iam.access_key_id, module.iam.access_key_secret] :
      [module.iam.access_key_id] :
    []
  )
}
{% endhighlight %}

{:.post-content}
As seen in the above code snippet wrapping the entire expression in parenthesees
allows the nested ternary, otherwise terraform would throw an error. We'll
talk about what terraform is and why and how to use it in a later post!

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a> and HT to
this <a href="https://github.com/hashicorp/hcl/issues/343" target="_blank">Github issue</a>
where we first saw the answer!

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
