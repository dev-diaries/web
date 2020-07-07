---
layout: post
title: "On Implementing Pull Request Feedback: A Short Story"
date: 2020-07-07 13:13:12 +0800
type: "Short Stories"
image: /assets/images/pr-review-comment.png
author-image: /assets/images/khaliq-gant.jpg
categories: [code-reviews, github, pull-request, web-developer, short-stories]
excerpt: "Pull request reviews are typically an important part of the development process. What follows is a short pull request review short story (PR RSS) that is contrived but not really that contrived."
---

{:.center}
# {{ page.title }}

{:.author-image-container .center}
![kjg]({{page.author-image}})

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.author-intro}
Khaliq Gant is the creator of this website and a full stack web developer of over 8 years.
He enjoys writing code, learning, growing and saying jokes with a dead pan tone of voice and a serious face.
He works for <a href="https://www.happycog.com/" target="_blank">Happy Cog</a>
and currently resides in Paris where he attempts to speak French with varying
degrees of success.

{:.intro}
Pull request reviews are typically an important part of the development process.
Writing code is often done in a bubble so getting feedback from fellow
developers can be extremely beneficial in avoiding introducing bugs and pointing
out flaws in logic or missed constraints. However, sometimes well intentioned
pull request review feedback can introduce issues if care is not taken when
receiving that feedback. What follows is a short pull request review short story (PR RSS)
that is contrived but not really _that contrived_.

{:.image .center .top-space}
![research](/assets/images/intense-coding.jpg)

## Blood Rushing, Keyboard Pounding, Intense Code Writing

{:.post-content}
The sprint just started today and you have two weeks to finish the high priority
task PROJ-5777 which is to implement the MIB component to use the JiggyWit pattern
instead of the now deprecated MiamiConnector pattern. You were adamant about
the 5 story point estimate and are confident you'll be able to wrap it up efficiently.
Your music is bumping, you're in the zone and the code is flowing with ease
as you dig into the MIB component. By the end of the week you're done and are ready
to open up a pull request. You've fully tested it and the JiggyWit pattern that
you've implemented is much cleaner and readable -- a clear improvement to the codebase.

{:.post-content}
It is a Friday so you open up a pull request with full knowledge that no one will
get around to reviewing your PR until Monday. That is totally fine since you
still have a week left in the sprint and you assume the pull request review process
won't take longer than a couple of days...

## Reviews Incoming

{:.gravatar-image-comment}
![research](/assets/images/reviewer-1-avatar.png)

{:.post-content .quote .quote--with-image}
Are you sure that the JiggyWit pattern is the best use case here? I've read
that the BigWillie styled pattern is more flexible and resistant against
upstream API changes.

{:.post-content}
OK, you think. Clearly this reviewer didn't read the ticket because the whole
premise of the ticket is to use the JiggyWit pattern. You fire back a response
linking to the ticket and resolve the conversation.

{:.gravatar-image-comment}
![research](/assets/images/reviewer-2-avatar.png)

{:.post-content .quote .quote--with-image}
I think in line 12 you're missing a parameter definition which could improve
clarity of your changes.

{:.post-content}
Yes, very valid feedback. You quickly implement the request change and re-request
a review.

{:.post-content}
You still need two more reviews and approvals for your pull request to be merged
into master. Even though you have another task to work on it took an entire day
for those two comments and now it is Tuesday and you are itching to get your code in
so it can be reviewed by QA. You ping a couple of team members:

{:.post-content .quote}
Hey, do you mind reviewing the pull request for PROJ-5777 when you get a chance?
Just want to get it into the QA environment so it can be tested there. Thanks!

## Approvals!...but wait...

{:.post-content}
You finally get an approval at the end of the day Tuesday and just need one more
and then you can merge in your PR. By Wednesday you're itching to get your PR
in since the sprint ends soon and you still need to get it verified by QA. You hope
there are no issues in the QA process...

{:.post-content}
You see one more review trickle in...

{:.gravatar-image-comment}
![research](/assets/images/reviewer-3-avatar.png)

{:.post-content .quote .quote--with-image}
This is a nitpick but the JiggyWit pattern allows for an optional class injector
which we might need in the future for PROJ-5999 which can reduce complexity. Can
you add in that injector option to this PR?

{:.post-content}
Hmm, yeah, that is a good idea. This change should be quick. You jump back into your
IDE without spinning up your environment to fully test since that class injector
seems harmless. You push up the code, get approval and get that into QA. Phew! Your feelings
of angst quickly dissipate as you were still able to get your ticket into QA before
the end of the day and hopefully can get your ticket done before the end of the sprint.

## Boom! In Production...but hold on a second...

{:.post-content}
QA tests the work you did in PROJ-5777 and signs off on it. Phew! A week goes by and then
suddenly bugs start pouring into your error monitoring solution all related
to the feature the JiggyWit pattern. Curiously the JiggyWit pattern is touching the feature, but not directly related to it. You dig
into those bugs and notice that there is some weird caching going on with the JiggyWit pattern...

{:.post-content}
As you dig deeper you see that the class injector is causing the responses to get
cached all because you added the optional class injector into the JiggyWit pattern.
You remember you didn't _actually_ test the optional class injector change you made
from the nitpick comment from your colleague...

{:.post-content}
That one change from the nitpick
comment caused additional cycles and a bug ticket that caused the next sprint to be
taken up by your investigation into this bug and ultimately the fix.

{:.image .center .top-space}
![research](/assets/images/coding-regret.jpg)

## What Have We Learned?

{:.post-content}
😡 WTF QA?! You should have caught this...

{:.post-content}
Well, no...not quite. There are a few take aways here:

### Calmez-Vous

{:.post-content}
You should never be so antsy to get your pull request that you skip the all important
task of testing any changes you make. Even if the change is tiny and seemingly
inconsequential there is no excuse to not quickly test that everything works
as expected. This anxiousness of getting your code into master is the sign
of an immature developer who would skip steps to make things go faster.

### Provide As Much Information As Possible in Your PR's

{:.post-content}
The first comment example in this post might be eye roll worthy but it happens more often
than you think and can be potentially avoided by providing more information in
the pull request. Your fellow developers are busy and may not have time to reference
the original ticket that this pull request is for. They also might not have the bandwidth
from sprint grooming to remember the constraints of some work you're doing. Therefore,
make it as easy as possible for them to quickly read all the information they
need to know to be able to thoroughly review your pull request. This avoids any
potential miscommunication and can save cycles by providing all the necessary information
upfront.

### Allow Adequate Time For Discussions Around Changes/Pull Requests

{:.post-content}
In this short story the PR opener was stressing because he wanted to get his/her PR
into production ASAP. Instead, the pull request review process should have proper time
allocated to it so the feedback can be fully understood and implemented *and then tested*.
PR feedback can be extremely valuable, but if not enough importance and time is allocated
to it, it can become a needless formality.

### No One Knows Your Code Better Than You

{:.post-content}
While seemingly obvious it is still worth saying: you know your code better than
any of your teammates. Any suggestions for small changes or tweaks should be carefully
weighed by you and gauged within the larger scope of the work you're doing. A "small parameter change"
can actually be more detrimental than upon first glance and you, as the pull request
opener,must be watchful for those seemingly innocuous changes that actually
are potentially changing more than they appear.


## Treat The Pull Request Process With The Respect That It Deserves

{:.post-content}
Changes made after you have a working version of a feature should be heavily tested
and vetted. When you're in the zone and writing code and testing it might be
difficult to go back through all your test cases when making a small feedback based
change. _Of course_ your feature has automated tests so any breaking changes will be caught,
but even then we all know that tests aren't always perfect either. It is still
important to review changes made even if they might seem harmless. The pull request
reviewer is looking at your code with fresh eyes which can be a positive and a negative thing.
Ultimately it is up to you - the person who opened up the pull request - to equip your
teammates with enough context to review your pull request thoroughly. It is then up to
you to implement changes as you see fit without introducing any new bugs.
