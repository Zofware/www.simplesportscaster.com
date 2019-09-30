---
layout: post
title: "Live Stream Metadata"
description: ""
date: "2019-09-29 16:40:00 -0700"
author: AdamZofware
version: 1.0.0
comments: true
---

As of version 1.1.136.0, SimpleSportsCaster will automatically set the title and description of the archive video created on YouTube when your live stream finishes. To enable this feature, check the box in the YouTube streaming settings that says "Upload game details to the live stream archive".

![Enable Live Stream Metadata](/assets/posts/live-stream-metadata-1.png)

If you use the buttons to tag events during the game, the description will contain clickable timestamps for each event to make it easy to view the part of the game where the event occurred. Here's an example, highlighted in the red box:

![Live Stream Metadata Example](/assets/posts/live-stream-metadata-2.jpg)

If you manually upload your game recordings to YouTube, you can generate a similar game description by using the Export button in the Log tab of the Game page and choosing "YouTube Video Description (*.txt)" as the type of export. Then just open the file you exported and copy and paste the text into your video description field on YouTube. In the future, I hope to make this as automatic for uploaded recordings as it is now for live streams.

