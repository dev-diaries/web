---
layout: post
title:  "Terminal History Auto Suggestions As You Type With Oh My Zsh"
date:   2019-04-11 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/autocomplete-as-you-type-cover.png
categories: [terminal, cli, shortcuts, efficiency, how-to, advanced, oh-my-zsh, zsh]
excerpt: "Oh-My-Zsh is a framework for Zsh, the Z shell. It is an efficiency boom for anyone that works in the terminal. There are a few auto suggest libraries that when combined can give you a fantastic suggestion to what you want to type to save you time and increase your efficiency 10-fold."
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
<a href="https://ohmyz.sh/" target="_blank">Oh-My-Zsh</a> is a framework for <a href="http://www.zsh.org/" target="_blank">Zsh</a>, the 
<a href="https://en.wikipedia.org/wiki/Z_shell" target="_blank">Z</a> shell. 
It is an efficiency boom for anyone that works in the terminal. 
There are a few auto suggest libraries that when combined can give you a 
fantastic suggestion to what you want to type to save you time and increase your efficiency tenfold.
In our <a href="https://www.instagram.com/p/BwCyLslBKBM/" target="_blank">instagram post</a>
we had some questions about how to get autocomplete like we show in the screencast:
![insta-questions](/assets/images/auto-suggest-question.png)

{:.intro}
Well...let's find out!

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite resources

{:.resources-content}
* <a href="https://laravel-news.com/zsh-auto-suggestions" target="_blank">Laravel Zsh Auto Suggestions Writeup</a>
* <a href="https://medium.com/wearetheledger/oh-my-zsh-made-for-cli-lovers-installation-guide-3131ca5491fb" target="_blank">Overview of oh-my-zsh features</a>
* <a href="https://gist.github.com/dogrocker/1efb8fd9427779c827058f873b94df95" target="_blank">Gist with step by step instructions</a>
</div>

## #Goals

{:.post-content}
This is what we're aiming for. As seen below the suggestions show up in a light blue
color and those suggestions are based on commands previously typed in that directory.
If there are no matches to what has been previously typed in that directory, it then
suggests commands that have been previously typed on this computer at any point
in any directory.

{:.image .center}
![exxample gif](/assets/images/zsh-autocomplete-example.gif)

{:.post-content}
As a bonus, we also have the commmands "show_local_history" with a number to show
the last number of X commands used in this directory. "search_local_history" will
then use all the commands typed in this present working directory (PWD) to search
based on the string we're looking for.

## What is this based on?

{:.post-content}
This leverages a few excellent libraries which are very useful just by themselves.
<a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank">zsh-autosuggestions</a>
provide us with "Fish like autosuggestions for zsh" based on the command history.
It provides a <a href="https://github.com/zsh-users/zsh-autosuggestions#suggestion-strategy" target="_blank">
suggestion strategy</a> that you can provide to guide it how to exactly suggest
what to autocomplete with. What we're doing is overriding the strategy
and providing our own custom strategy.

## Extending the suggestions

{:.post-content}
To be able to just use the present working directories history we have to track that
in a different way. To do that, we leverage <a href="https://github.com/larkery/zsh-histdb" target="_blank">zsh-histdb</a>
which provides us with a <a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a>
database to track our commands and store them in the database. If we were to look
at the schema zsh-histdb provides we would see that it has three tables:

{:.post-content}
* commands: which provides us with an argv column
* places: which provides us with a host (computer host) and a dir which is the present working directory that command was used in
* history: which provides us with a session id, a command_id which links with the commands table, a place_id which links with the places table, an exit_status, a start_time, and a duration
