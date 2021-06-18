---
layout: post
title:  "Searching All Your Clipboard History EVER Via Alfred In The Terminal"
date:   2021-06-18 13:13:12 +0800
type: "HowToGuides"
image: /assets/images/searching-alfred-history.png
tags: [cli]
categories: [terminal, cli, shortcuts, efficiency, how-to, advanced, alfred, history, clipboard, sqlite]
excerpt: "Oh-My-Zsh is a framework for Zsh, the Z shell. It is an efficiency boom for anyone that works in the terminal. There are a few auto suggest libraries that when combined can give you a fantastic suggestion to what you want to type to save you time and increase your efficiency 10-fold."
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
We have [written in the past](/blog/terminal-history-auto-suggestions-as-you-type) about auto suggestions
as you type using your shell history. A recent tip from <a href="https://twitter.com/mrw" target="_blank">@mrw</a>
led us to learn that Alfred actually stores ALL of your clipboard history in a file. So if you're an Alfred user, you can access your
clipboard history data in a <a href="https://www.sqlite.org/index.html" target="_blank">sqlite</a>
table. Leveraging that you can actually search your clipboard history in the terminal
by connecting to that sqlite database and querying against it. Let's check it out!

## Inspiration

{:.post-content}
As mentioned in the [auto suggestion post](/blog/terminal-history-auto-suggestions-as-you-type)
we leverage <a href="https://github.com/larkery/zsh-histdb" target="_blank">zsh-histdb</a>
their to be able to query from a sqlite table. We use similar logic to pull in the
Alfred sqlite file and query that.

## Let's Get To The Code

{:.post-content}
The first thing we need to do is to load in the sqlite file, so we set that to
a variable to reference later:

{% highlight bash %}
CLIPBOARDDB_FILE="${HOME}/Library/Application Support/Alfred/Databases/clipboard.alfdb"
{% endhighlight %}

{:.post-content}
Next we need to make a function that uses that sqlite file location and passes
any arguments to it. The arguments in this instance will be the query which we
will get to later:

{% highlight bash %}
clipboard_query () {
    sqlite3 ${CLIPBOARDDB_FILE} "$@"
    [[ "$?" -ne 0 ]] && echo "error in $@"
}
{% endhighlight %}

{:.post-content}
Now let's write the actual query logic to select from our alfred clipboard history:

{% highlight bash %}
search_clipboard_history() {
    local query="
        select Item
        from clipboard
        where Item LIKE '$(sql_escape $1)%'
        order by ts desc
        limit 10
    "
    results=$(clipboard_query "$query")
    echo "$results"
}
{% endhighlight %}

{:.post-content}
And that's it! We have a function that can now take in a search query and that runs
the query against our Alfred sqlite database file. The entire script looks like this:

{% highlight bash %}
which sqlite3 >/dev/null 2>&1 || return;

CLIPBOARDDB_FILE="${HOME}/Library/Application Support/Alfred/Databases/clipboard.alfdb"

clipboard_query () {
    sqlite3 ${CLIPBOARDDB_FILE} "$@"
    [[ "$?" -ne 0 ]] && echo "error in $@"
}

search_clipboard_history() {
    local query="
        select Item
        from clipboard
        where Item LIKE '$(sql_escape $1)%'
        order by ts desc
        limit 10
    "
    results=$(clipboard_query "$query")
    echo "$results"
}
{% endhighlight %}

{:.post-content}
This is what the usage looks like:

{:.image .center}
![search-history](/assets/images/search-clipboard-history.png)

{:.post-content}
Phew! That should be it! Feel free to <a href="https://twitter.com/the_dev_diaries" target="_blank">tweet</a>
at us or <a href="https://instagram.com/thedevdiaries" target="_blank">DM us on instagram</a> with questions!

