---
layout: social-post
type: "SocialPosts"
title: "Database: dump query as CSV"
cover-image: /assets/images/mysql-poster.png
image: /assets/images/.gif
excerpt: "Someone from business development asking you to dump a query as a csv from the database?"
date: 2019-03-23
categories: [intermediate, database, mysql, postgresql, postgres]
instagram-id: BvWIsobnHya
docs: https://dev.mysql.com/doc/refman/8.0/en/mysql.html
---
{:.center}
# {{ page.title }}

{:.post-content}
Someone from business development asking you to dump a query as a csv from the
database? You can run the query and output it as a CSV using the command line.
If you’re using postgres you can first connect to psql and then run:

{% highlight linux %}
    COPY
    (SELECT * from users WHERE active = 'true')
    TO '/files/active_users.csv'
    WITH (FORMAT CSV, HEADER);
{% endhighlight %}

{:.post-content}
That will put the file with headers on your system at the absolute path that you specify. It
is important to note that you can use relative paths so ./my-folder/file.csv would
not work and psql would complain.

{:.post-content}
If you’re running MySQL, you connect to the mysql CLI and then run:

{% highlight linux %}
    SELECT *
    FROM users
    INTO OUTFILE '/var/lib/mysql-files/users.csv'
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n';
{% endhighlight %}

{:.post-content}
Note that this will not output the file with headers. If you want to do that,
it’s a bit more complicated...You’ll have to generate a custom query to specify
the column names and add those (via a UNION) to the query:

{% highlight linux %}
SELECT 'id','name','active','created_at','updated_at'

UNION ALL

SELECT *
FROM users
INTO OUTFILE '/var/lib/mysql-files/users.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
{% endhighlight %}

{:.post-content}
Read more about <a href="{{page.docs}}" target="_blank">MySQL</a>
Read more about <a href="https://www.postgresql.org/docs/9.2/app-psql.html" target="_blank">PostgreSQL</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
