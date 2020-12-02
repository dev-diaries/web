---
layout: social-post
type: "SocialPosts"
title: "Typescript Useful Compilation Options"
cover-image: /assets/images/tsc-compilation-options.png
image: /assets/images/.gif
excerpt: "If you’re using typescript (tsc) to compile your typescript files, there are some handy compilation options that can give you more insight into how compilation happens or why certain files are compiled."
date: 2019-10-05
tags: [javascript]
categories: [advanced, typescript, compilation, javascript]
instagram-id: B3O_JYEA7XE
docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
---
{:.center}
# {{ page.title }}

{:.post-content}
If you’re using typescript (tsc) to compile your typescript files, there are
some handy compilation options that can give you more insight into how compilation happens or why certain files are compiled.

{:.post-content}
Using the tsconfig.json you can change what the output directory or location
of the built javascript is. Sometimes if you're changing that location it can
be tedious to go back and delete all the files that were built. Use the `--build`
flag along with the `--clean` flags to delete all the built javascript files.

{% highlight bash %}
# delete all built javascript files
tsc --build --clean
{% endhighlight %}

{:.post-content}
Want to see the typescript files that are being built from in your codebase?
Use the `--listFiles` to build and also output a list of the files that were used
to build your javascript.

{% highlight bash %}
# list all the source typescript files being used to build your javascript
tsc --listFiles
{% endhighlight %}

{:.post-content}
With the tsconfig.json <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html" target="_blank">compilerOptions</a>
module setting you can set how the compiler decides to what to import. You can see
the log output of this process by using the `--traceResolution` flag. This verbose
output can be useful if there is a problem with some files being compiled that you
don't want or if you want to decide which module pattern you want to use in your
compilerOptions.

{% highlight bash %}
# see output of the module resolution from typescript
npx tsc --traceResolution
{% endhighlight %}

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
