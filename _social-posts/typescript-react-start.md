---
layout: social-post
type: "SocialPosts"
title: "Typescript + React: Getting Started"
cover-image: /assets/images/ts-react-cover.png
image: /assets/images/.gif
excerpt: "Want to get up and running with Typescript & React? Let's do it!"
date: 2019-08-25
tags: [javascript]
categories: [intermediate, typescript, react, javascript]
instagram-id: B1mR_1hgtlw
docs: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
---
{:.center}
# {{ page.title }}

{:.post-content}
You might remember our [#behind-the-scenes](/tags/behind-the-scenes/) [post on
adding search to a static site](/social-posts/bts-edition-two-adding-search-part-2/) where we showed
how we used Typescript & React to make a dynamic search bar and display the
results to the user. Let's rewind that and show how to get started with a Typescript
and React to make a simple page.

{:.post-content}
Let's first declare our dependencies. We want some dependencies that we only need
for development and some dependencies we need for our application to run. The development
dependencies are needed to build out our application on our development environment.
Our development dependencies are:
- webpack
- webpack-cli
- typescript
- @types/react
- @types/react-dom
- ts-loader
- source-map-loader

{:.post-content}
We can install all of those by using yarn or npm:

{% highlight bash %}
npm install --save-dev webpack webpack-cli typescript @types/react @types/react-dom ts-loader source-map-loader
- OR -
yarn add --dev webpack webpack-cli typescript @types/react @types/react-dom ts-loader source-map-loader
{% endhighlight %}

{:.post-content}
We need webpack, webpack, webpack-cli, and ts-loader to be able to bundle
our application into a small executable javascript file. We use the @types to be sure
that Typescript understands the definitions of the packages and can detect issues
ahead of time. Read more about <a href="https://basarat.gitbooks.io/typescript/docs/types/@types.html" target="_blank">@types</a>.

{:.post-content}
The packages we need to actually allow our application to run are:
- react
- react-dom

{:.post-content}
We can install those using yarn or npm:

{% highlight bash %}
npm install --save react react-dom
- OR -
yarn add react react-dom
{% endhighlight %}

{:.post-content}
Next, let's specify our Typescript config to specify how our application should
be compiled:

{% highlight json %}
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es6",
        "jsx": "react"
    }
}
{% endhighlight %}

{:.post-content}
We're telling typescript where to output our built files with the "outDir"
and what our target EMCAScript version will be, whch is how JavaScript is standardized.
<a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html" target="_blank">Read more</a> about the typescript config

{:.post-content}
Let's make some basic files with React to get it started. We're going to make an
src directory with an App.ts file within it. Then within src we're going to make a
components directory and make a world.tsx file within that.

{% highlight bash %}
> mkdir src && cd ./src
> touch App.ts
> mkdir components && cd ./components
> touch world.tsx
{% endhighlight %}

{:.post-content}
Now we want to edit our App.ts file to make an entry point to our application. We'll
create our React element, and target an element in HTMl for that to replace and inject
our React code.

{% highlight javascript %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import World from './components/world';

ReactDOM.render(React.createElement(World), document.getElementsByClassName('js-world')[0]);
{% endhighlight %}

{:.post-content}
Now we need to edit our world.tsx file so that something can be rendered:

{% highlight html %}
import * as React from "react";

export interface WorldProps {}

// State is never set so we use the '{}' type.
export class Hello extends React.Component<WorldProps, {}> {
    render() {
        return <h1>Hello World ;)</h1>;
    }
}
{% endhighlight %}

{:.post-content}
Let's create the index.html file that references that `.js-world`
class:

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello World</title>
    </head>
    <body>
        <div class="js-world"></div>

        <script src="./dist/main.js"></script>
    </body>
</html>
{% endhighlight %}

{:.post-content}
Next let' make our webpack file to be able to build the application, called
webpack.config.js:

{% highlight javascript %}
module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};
{% endhighlight %}

{:.post-content}
That should be it! Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
