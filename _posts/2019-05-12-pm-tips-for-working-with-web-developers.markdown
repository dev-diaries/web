---
layout: post
title:  "Matt Brown with Project Management Tips For Working With Web Developers"
date:   2019-05-12 13:13:12 +0800
type: "GuestPost"
image: /assets/images/guest-post.png
author-image: /assets/images/guests/mb.png
categories: [guest-post, web-developer, project-managers, management]
excerpt: "As a digital project manager, I get the opportunity to work and interact with all different types of people in different roles on a daily basis. Over the years, I have been lucky to have worked with many talented web developers and, during that time, I have picked up a few tips on how to better manage projects and the developers behind them."
---

{:.center}
# {{ page.title }}

{:.author-image-container .center}
![mb]({{page.author-image}})

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.author-intro}
Matt is an outgoing and creative Project Manager at 
<a href="https://www.happycog.com/" target="_blank">Happy Cog</a> with five 
years of industry experience, and his passions lie in digital web development, 
advertising and marketing strategies. He works closely with other project managers, 
designers, front-end and backend developers, and QA Engineers to achieve project 
goals by organizing and customizing project plans for stakeholders to report on 
budgets and schedule status for the duration of a project. Outside of the office, 
Matt has a passion for travel and also enjoys photography, concerts, sports and hiking.

{:.author-intro}
Matt is currently working on building a content-driven travel and photography 
website. The purpose is to provide world travelers with detailed 
itineraries and advice on how to navigate the world’s greatest cities and 
their most popular attractions.

{:.image .center .top-space}
![header](/assets/images/pm-featured-image.jpg)
## Overview

{:.post-content}
As a digital project manager, I get the opportunity to work and interact with all different types of people in different roles on a daily basis. Over the years, I have been lucky to have worked with many talented web developers and, during that time, I have picked up a few tips on how to better manage projects and the developers behind them. In this article, I will cover tips that I have picked up so far in my career with web developers - I hope you find them helpful!

## Communication and Responding to Each Developers Workflow

{:.post-content}
Two of the most important project management skills to acquire are communication and flexibility. You need to be able to adjust your communication style depending on the person, since each developer can have a specific workflow or personality that allows them to get things done more efficiently. By finding a balance and learning how to manage your team as you work with them more, you will start seeing your projects go much smoother.

{:.post-content}
Some developers will want to work through an issue for three hours uninterrupted, while others may opt to collaboratively discuss potential solutions and progress on a call or via Slack. It’s about understanding what works best for each person’s style and catering to their needs to effectively get things done.

## Working with Remote Developers as a Project Manager

{:.post-content}
There are many project managers that work with remote development teams and it’s important to understand how to best communicate and manage them from afar. 

### Make It Personal

{:.post-content}
When you’re not working in an office with your team on a daily basis, it can be difficult to get to know them and build a rapport. For the most part, you communicate with remote teams via email, or messaging apps, and a lot of things can get lost in text conversations. To help with this, I highly recommend having daily contact with your team on video calls so that you can see and talk to each other! It feels more personable and I have found that even just talking on a video call for even 5-10 minutes a day to have a check-in goes a long way.

### Time Zones

{:.post-content}
Working with remote developers in different time zones can be very tough, especially when you don’t overlap for a large part of the day. Depending on if the team is ahead of you or behind you geographically, it changes the approach for when to organize your notes so that the team knows what to work on and what is due. For example, if you work in Los Angeles and your remote development team is 3 hours ahead in New York, you will want to make sure that the New York team has what they need when they get into the office. In this case, I would make sure to send an email to the New York team before I leave the office the night before, so they have everything they need and don’t need to wait for me to arrive in the office to get official directions and start their day. Conversely, if you work in Los Angeles and have a team in New York, make sure you spend time in the morning organizing tasks so that you have everything queued up for the team and are available to discuss when they arrive in the morning.

{:.image .center .top-space}
![requirements](/assets/images/requirements.jpg)

## Requirements Gathering

{:.post-content}
Developers need structure and support in order to do their job efficiently. As a project manager, you need to be that support system and gather the necessary details in order for them to easily dive into a task and avoid confusion of what the expected goal is. There are two main types of tickets that I find I encounter on a daily basis: bug reports and feature requests.

{:.post-content}
For a reported bug, developers want to be able to find a quick way to easily replicate where and how the issue is occuring. Here is a list of details I try to add to all of my tickets:

{:.post-content}
* Summary of the issue
* Steps to replicate
* Direct link where the issue was occuring
* CMS link to the entry (if applicable)
* Annotated screenshot or video recording of the specific issue
    * This is the most important element, as you should try to pinpoint the issue exactly so the developer knows what you’re referencing
* Browser and version (if necessary)

{:.post-content}
For a feature request, it’s important to not only understand the goal of the task, but also outline acceptance criteria that makes it easy to confirm if the ticket is complete or not by the time it gets to the QA team. New feature tickets are usually created for either one-off projects or full websites redesigns, and setting your team up for success at the beginning of a project will go a long way. Here is a list of details I try to add to all of my tickets:

{:.post-content}
* Summary
* Design Links (if applicable)
    * Direct links to desktop, tablet and mobile designs
* Zeplin Links (if applicable)
* Acceptance Criteria

{:.post-content}
When it comes to acceptance criteria, you should try your best to review the designs thoroughly and include all elements in order to break down their purpose from both a CMS and Front-End perspective. As an example, let’s say a client wants to build a slider on their home page. Here are some initial questions I would ask:

{:.post-content}
* How many slides need to be available? Will there be a max amount of slider images?
* Should the slider automatically rotate or only on click?
* If automatically, how many seconds before the next slide appears?
* What should the slide transition look like?
* Will the slider just support images, or videos too?
* If videos are needed, do they need to be self-hosted or embedded from YouTube or Vimeo?
* Which fields need to be available in the CMS to edit this content? 

{:.post-content}
While this isn’t an exhaustive list, these are the types of things you need to consider as a project manager and get answered prior to a developer getting started on a task. If not, one of two things will happen 1) developers will ask these questions along the way anyway or 2) the client won’t get a correct deliverable. Doing this will save time, define the scope of the task, reduce headaches and cut back on the type of back and forth developers don’t want to interrupt their workflow.

## Reviewing Work

{:.post-content}
In my experience, most developers tend to think that once they fix an issue on their local instance, they will push that work to staging (or even worse, production) and expect it to work. Then they hand off the ticket to the project manager or QA team before confirming it’s fixed in the environment they pushed the work to. I’ve found that there is a 50/50 chance that they are handing off incomplete work and there can be obvious bugs in their code by just looking at it for 10 seconds.

{:.post-content}
This...can be frustrating. One major thing I would like to see more of is developers being accountable for their work and considering handing off work as their “signature” on what they are delivering. Quickly asking yourself questions like: "Am I proud of this update?" or "Would I accept this work if I was on the other end of the email?", should be your last gut check before submitting code. These are the types of things it would be great to see more of before handing off code for review.

{:.post-content}
Will all of your code be perfect and bug-free every time? No. And I don’t expect it to be. But it should, at a minimum, meet the acceptance criteria outlined in the request and have no obvious flaws sticking out that would prompt your project manager to send the ticket right back into your queue. It is all too often that I receive incomplete work that I send back to a developer with some notes and screenshots. This can be frustrating because it displays a lack of attention to detail and adds unnecessary time to get the feature to a point where it is ready to hand off to the client. It really goes a long way when developers take the time to review their code in all appropriate environments and confirm things are working before officially handing something off for the project manager or QA team to review.

{:.image .center .top-space}
![handing-off-work](/assets/images/handing-off-work.jpg)

## Handing Off Work

{:.post-content}
After a developer has reviewed their work thoroughly, project managers expect to receive a message that says a bit more than “This is now ready to review on staging”. I tend to roll my eyes when I get a message with just that and no other context. As a project manager, I’m expecting to receive information that will be useful for me to actionably test the feature and not have to reach back out to the developer to understand how to test something. Types of details I would expect to see are:

{:.post-content}
* Steps to test
* Links
* Screenshots or video screen recording (if necessary)
* If a bug has been fixed, identifying and sharing a brief note about what the core issue was in the code

{:.post-content}
The goal here is to provide as many details as possible so that anyone who might need to test what you’re handing off has what they need. This reduces the amount of back and forth and it is also helpful to have this information if someone looked back on this feature a year later, should something related to it break. This type of information is also a good reminder of what was done in the ticket and how to easily test it to ensure it’s working as expected.

## Documentation

{:.post-content}
I feel like documentation is every developer’s most and least favorite thing to do at the same time. On the one hand, it is extremely important and lays out a foundational picture of how a website works. With a solid collection of documentation, you can easily ramp up new developers on a project, understand dependencies across the system and refer back to why you created features a certain way. The benefits of solid documentation are clear and save a lot of headaches down the line.

{:.post-content}
On the other hand, documentation can take a very, very long time to put together and, as long as the website your working on keeps expanding, it’s a never-ending activity. It also takes away from actual development time and, if you’re up against a deadline or budget, that can make it tough to deliver solid documentation. Many developers I’ve spoken to have related documentation to homework back in grade school - no one wants to do it, but you’ll be glad the next day that you did.

{:.post-content}
If you can, you should get into the habit of setting aside an hour or two (or more) on your calendar at the end of each week to solely focus on documenting the work you have done across your projects. If you incrementally chip away at a task as big as documentation, it’s not as daunting compared to writing a full documentation suite of information after a project is completed. I get nightmares just thinking about that.

{:.post-content}
The message here: Create great documentation as you go. Your future self will thank you.

{:.image .center .top-space}
![give-your-team-space](/assets/images/give-your-team-space.jpg)

## Give Your Team Space

{:.post-content}
One rule of thumb to live by when working with developers is to make sure to give them space. They need the freedom to work, uninterrupted, for periods of time so that they can keep their train of thought focused on a task. If you’re constantly pinging your team for updates, not only will your developers be annoyed with you, but they won’t get any work done because they need to constantly respond to you with a progress report. We all understand deadlines are important and there are always the “I need this ASAP” or “Where are we on this?” client emails that come in, but pulling a developer away from resolving the issue to provide a progress report will only delay its delivery.

{:.post-content}
For urgent issues, I give my team at least a 30 minute window to review and evaluate a reported issue to see if they can identify any initial leads. After that initial check in, I completely leave them be for 1-2 hour intervals so they can dive into it more - unless they need me to test certain things or follow up with additional information that might be helpful. As a project manager, you need to be the buffer between the client and your team. Give your team breathing room to work and they will thank you for it. Developers should develop. Managers should manage. Clients tend to be pushy to get things done, but make sure that you don’t put that pressure onto your team because it will only stress them out, which helps no one.

{:.post-content}
Taking on that role as a buffer between the client and your development team also goes a long way to building trust with your team and increases efficiency. Clients always want to know why or how something broke as soon as possible, but it’s always more important to get it resolved first, then follow up with a post-mortem of what happened and next steps. Not only will the development team not know what was wrong until a fix goes live, but if they need to stop and respond as to what the problem is, it will only prolong a solution from getting live.

{:.post-content}
Overall, I’ve learned that it’s important to provide a safe zone for your development team to get things done while you handle the communication and expectations. With Slack and other messaging platforms creeping further and further into work environments everywhere, instant gratification and expecting immediate responses is becoming a new normal - but it shouldn’t be. Respect your team’s boundaries.

## But Not Too Much Space

{:.post-content}
There is a delicate balance between giving your team the room to work on a project, while also needing to check in on progress and understand where things stand. This is where daily stand-ups come in handy. While this is a normal practice for Agile development teams, it should really be a practice that is used by all digital teams in order to have time set aside at the beginning of each day to touch base and understand the day’s priorities.

{:.post-content}
I have the privilege of working with a team of 25+ full-time developers, both remote and in-office, and our stand-ups tend to only last a quick 10-15 minutes every morning. It’s a simple and easy practice that gives a lay of the land for the day. This time is spent listening to what the development team is planning on working on at a high level and, if a developer shares their plans for the day and they differ from the appropriate priorities, this is the time to mention it and make sure their focus is in the correct place.

{:.post-content}
Since this stand-up time is spent with every developer on the team, many of which work on different projects, be sure to schedule project-focused conversations or discussions separately. As a project manager, you should know what the priorities are on a project (based on the client’s needs and/or requests) and you should go into these project-focused meetings with an agenda. There’s nothing developers hate more than wasting time in a meeting that could’ve been used towards getting some actual development done. Know the difference between when to call a meeting or handle over email. These types of project-based check-ins are also a good exercise in giving your team space, but reconvening to review work at appropriate times.

{:.post-content}
Lastly, I feel like we all know and have experienced that “developer that goes rogue” for a few hours, or an entire day, and then comes up for air with no progress on a task and can’t get past a specific issue. I think we’re all guilty of this at some point in time. In cases like this, I try to really push the practice of reaching out to other team members to help solve a problem before too much time is spent. This way, there aren’t a lot of lost hours on a project spent trying to get over an issue that another team member has experience with and would have helped them solve it. As you work more with your team, you identify who those who do this more than others and I’ve found that it’s a good idea to give them more attention and check in a little more often.

{:.post-content}
I tend to tell my development team to timebox these 🤦 moments to 30 minutes - 1 hour max before reaching out to other team members for help. That span of time tells me that they 1) tried to find a solution 2) can summarize where the issue lies to another developer for help and 3) need a break so they can come back to it with a fresh mind. The ultimate goal here is to avoid spending over an hour on a head scratching issue that will eat up budget on a project. Which leads me to...

{:.image .center .top-space}
![logging-time](/assets/images/logging-time.jpg)
## Logging Time

{:.post-content}
Developers don’t like to log time. It’s not fun - I get it - but it’s probably the most important thing outside of actually coding. It’s a never ending struggle to get my team to consistently log their hours and I constantly have to remind them of its importance. I’ve been in too many circumstances where developers say that they will just log at the end of the week and then, at the end of the week, they forget where their hours went and just insert blocks of time. This leads to inaccuracies in reporting and is something that makes billing very difficult. I barely remember what I had for lunch two days ago, so if I’m logging hours at the end of a week and trying to remember what I did on Monday from 1-3pm, that’s next to impossible. It’s just not gonna happen. This is why a daily end of day recap of logged hours from each developer is needed and will go a long way for understanding where the project budget stands at any point in time.

{:.post-content}
Project budgets depend on accurate hours accounting on a daily basis. As an example, let’s say you have a smaller client that has a 10 hour per month retainer and there isn’t a lot of wiggle room, so the hours need to be planned out carefully. If a team logs hours every day, you can easily review and flag to the client along the way as you approach the set 10 hours. Contrast that with a developer who only logs their hours once a week. Perhaps an issue comes up during the first week of the month and your team ends up spending 15 hours on it over the course of five days. Now, not only are you over budget for the entire month and need to figure out how you’re going to tell the (soon to be angry) client, but you’re also caught completely off guard and have to have a tough conversation with your team about how you got there.

{:.post-content}
Understandably, people just simply forget to log hours sometimes, but I’ve found that setting up two reminders in my calendar each day - one at 1pm and one at 5pm - solves that problem for me to quickly stop what I’m doing and input time. It’s much easier to do this in smaller intervals, as it can become daunting having to catch up on a week’s worth of logging. At that point, logging time becomes a task in and of itself! Do yourself, and your project manager, a favor and keep up with your hours.

## Conclusion

{:.post-content}
Thanks for spending the time to read through this post and getting a glimpse of things to consider when working with a development team. This certainly doesn’t cover everything, but does begin to touch the surface for what to expect, things to keep in mind and what it’s like to work with web developers. I have a massive amount of respect for the web development community and have learned so much in working with the awesome team at <a href="https://www.happycog.com/team/" target="_blank">Happy Cog</a>.

{:.post-content}
Thinking about becoming a digital project manager and have any questions about where to start? Feel free to <a href="https://twitter.com/mbrownumd" target="_blank">reach out to me on Twitter @mbrownumd</a>.






