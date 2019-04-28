---
layout: post
title:  "Terminal History Auto Suggestions As You Type With Oh My Zsh"
date:   2019-04-14 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/autocomplete-as-you-type-cover.png
categories: [terminal, cli, shortcuts, efficiency, how-to, advanced, oh-my-zsh, zsh, homebrew, sqlite]
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

{:.image .center}
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
It accepts a <a href="https://github.com/zsh-users/zsh-autosuggestions#suggestion-strategy" target="_blank">
suggestion strategy</a> that you can specify to guide it how to exactly suggest
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

{:.post-content}
With some SQL querying to we can use all of that data to accomplish directory
specific suggestions with a fallback to all directory suggestions. Ok, let's roll
up our sleeves and get some things installed.

## Installing Zsh & Oh My Zsh

{:.post-content}
This is a <a href="https://medium.com/swlh/power-up-your-terminal-using-oh-my-zsh-iterm2-c5a03f73a9fb" target="_blank">good guide</a>
to installing Zsh and Oh My Zsh as is the <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH" target="_blank">official oh-my-zsh</a>
directions.

{:.post-content}
First, we need to install Zsh since oh my zsh is a framework that sits on top of Zsh.
We're going to use <a href="https://brew.sh/" target="_blank">homebrew</a>
which you can install by running this in your terminal

{% highlight bash %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

{:.post-content}
Once that finishes, we'll install zsh using homebrew

{% highlight bash %}
brew install zsh
{% endhighlight %}

{:.post-content}
And finally, let's install oh my zsh

{% highlight bash %}
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
{% endhighlight %}

{:.post-content}
If you get an error that says:

{% highlight bash %}
invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
{% endhighlight %}

{:.post-content}
You need to install xcode's devleoper tools before you can install oh-my-zsh. Run this
in your terminal:

{% highlight bash %}
xcode-select --install
{% endhighlight %}

## Installing Autosuggestions & histdb

{:.post-content}
Next, we need to install zsh-autosuggestions. We're going to follow their <a href="https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md">official guide</a>

{% highlight bash %}
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
{% endhighlight %}

{:.post-content}
Next, we need to list that as a plugin in our .zshrc. So we'll need to edit our .zshrc

{% highlight bash %}
nano ~/.zshrc
{% endhighlight %}

{:.post-content}
Let's add it as a plugin by adding or editing this line. If you have more than one plugin 
they need to be separated by a space.

{% highlight bash %}
plugins=(zsh-autosuggestions)

- OR if you have multiple -

plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
{% endhighlight %}

{:.post-content}
One thing I like to do since I use a lot of plugins is to have all the plugins listed
in a file and just include that file, like so

{% highlight bash %}
plugins=($(<~/zshes/plugins.txt))
{% endhighlight %}

{:.post-content}
The contents of zshes/plugins.txt is like this:

{% highlight bash %}
aws
bower
brew
docker
git
git-extras
history
jira
jsontools
last-working-dir
npm
osx
terminalapp
vi-mode
zsh-256color
zsh-autosuggestions
{% endhighlight %}

{:.post-content}
Next we need to install sqlite3 since zsh-histdb has that as a dependency. Homebrew
to the rescue

{% highlight bash %}
brew install sqlite3
{% endhighlight %}

{:.post-content}
We're now going to follow this <a href="https://github.com/larkery/zsh-histdb#installation" target="_blank">guide</a>
for the install.

{% highlight bash %}
mkdir -p $HOME/.oh-my-zsh/custom/plugins/
git clone https://github.com/larkery/zsh-histdb $HOME/.oh-my-zsh/custom/plugins/zsh-histdb
{% endhighlight %}

{:.post-content}
We then need to edit our .zshrc again and add this to it:

{% highlight bash %}
source $HOME/.oh-my-zsh/custom/plugins/zsh-histdb/sqlite-history.zsh
autoload -Uz add-zsh-hook
add-zsh-hook precmd histdb-update-outcome
{% endhighlight %}

{:.post-content}
Restart your terminal and you should now see auto suggestions working!

## Customizing Histdb

{:.post-content}
We now have auto suggestions and zsh-histdb working, but we still want to customize
it so that we get suggestions specific to our directory. To do that we need to tell
zsh-autosuggestions to use our history sqlite database instead of the regular
zsh history. To do that we can take advantage of the ZSH_AUTOSUGGEST_STRATEGY
hook and provide a query and list of suggestions to pass along to zsh-autosuggestions.

{:.post-content}
Somewhere in your .zshrc file you can copy the below to edit how zsh-autosuggestions
sends back suggestions. <a href="https://github.com/larkery/zsh-histdb#installation" target="_blank">zsh-histdb</a>
has some queries you can use.

{:.post-content}
This will find the most frequently issued command issued exactly in this directory, or if there are no matches it will find the most frequently issued command in any directory. 

{% highlight bash %}
_zsh_autosuggest_strategy_histdb_top() {
    local query="select commands.argv from
history left join commands on history.command_id = commands.rowid
left join places on history.place_id = places.rowid
where commands.argv LIKE '$(sql_escape $1)%'
group by commands.argv
order by places.dir != '$(sql_escape $PWD)', count(*) desc limit 1"
    suggestion=$(_histdb_query "$query")
}

ZSH_AUTOSUGGEST_STRATEGY=histdb_top
{% endhighlight %}

{:.post-content}
This query is fine, however, the issue I have is that it doesn't order the results
by the most recently used. So I have added another to use query so that it orders by what 
was also most recently used in that directory:

{% highlight bash %}
# Query to pull in the most recent command if anything was found similar
# in that directory. Otherwise pull in the most recent command used anywhere
# Give back the command that was used most recently
_zsh_autosuggest_strategy_histdb_top_fallback() {
    local query="
    select commands.argv from
    history left join commands on history.command_id = commands.rowid
    left join places on history.place_id = places.rowid
    where places.dir LIKE 
        case when exists(select commands.argv from history 
        left join commands on history.command_id = commands.rowid 
        left join places on history.place_id = places.rowid 
        where places.dir LIKE '$(sql_escape $PWD)%' 
        AND commands.argv LIKE '$(sql_escape $1)%') 
            then '$(sql_escape $PWD)%' 
            else '%'
            end
    and commands.argv LIKE '$(sql_escape $1)%'
    group by commands.argv
    order by places.dir LIKE '$(sql_escape $PWD)%' desc,
        history.start_time desc
    limit 1"
    suggestion=$(_histdb_query "$query")
}

ZSH_AUTOSUGGEST_STRATEGY=histdb_top_fallback
{% endhighlight %}

{:.post-content}
Experiment with both and see what fits your needs best! I'm open to any suggestions
to improve the above query as well.

## Bonus Commands

{:.post-content}
Let's add in a command to show the local history only. So once again we'll edit
our .zshrc:

{% highlight bash %}
show_local_history() {
    limit="${1:-10}"
    local query="
        select history.start_time, commands.argv 
        from history left join commands on history.command_id = commands.rowid
        left join places on history.place_id = places.rowid
        where places.dir LIKE '$(sql_escape $PWD)%'
        order by history.start_time desc
        limit $limit
    "
    results=$(_histdb_query "$query")
    echo "$results"
}
{% endhighlight %}

{:.post-content}
This command defaults to showing 10 commands, but we could also pass in a number
to get a desired number of results:

{% highlight bash %}
# will show 10 results
show_local_history 

# will show 50 results
show_local_history 50
{% endhighlight %}

{:.post-content}
We also want to be able to search that history. I personally use <a href="https://beyondgrep.com/" target="_blank">ack</a>
but you can also use grep for this. We'll build on our search local history command
pass a limit of 100 and come out with this:

{% highlight bash %}
# Grep
search_local_history() {
    show_local_history 100 | grep "$1"
}

# if you use ack
search_local_history() {
    show_local_history 100 | ack "$1"
}
{% endhighlight %}

{:.post-content}
Phew! That should be it! Feel free to <a href="https://twitter.com/the_dev_diaries" target="_blank">tweet</a> 
at us or <a href="https://instagram.com/thedevdiaries" target="_blank">DM us on instagram</a> with questions!
