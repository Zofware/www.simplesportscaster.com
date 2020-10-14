---
layout: release
title: "Version 2.276.0.0"
description: "SimpleSportsCaster Version 2.276.0.0"
date: "2020-10-14 12:00:00 -0700"
author: AdamZofware
version: 1.0.0
comments: true
image: /images/social.jpg
featured_image: /images/social.jpg
excerpt_separator: <!--more-->
---

### [Version 2.276.0.0 (October 14, 2020)]({{page.url}})
* New start page to help you get going quickly.
* Review previously recorded game footage and quickly find plays listed on the timeline.
* Apply scoreboard graphics to previously recorded raw camera footage and save as a new video.
* Possession can be tracked and displayed along with other statistics during your live stream.
* Basic support for lacrosse (four quarters with count-down clock).
* Team names, colors, logos, etc. can now be changed during a game.
* Keyboard shortcuts are easier to set and manage now.
* You can now hide individual buttons on the game page by right-clicking or long-pressing them and using the menu to turn them off.
* Your blink(1) status light will now flash orange if your internal battery is discharging.
* The scoreboard styling, including font and some colors, is now customizable (premium feature).
* An audio level meter is now included on the status bar.

<!--more-->

#### Known Issues
* On computers with an Nvidia GPU, transcoding to AVC (H.264) at UHD 2160p (3840x2160) doesn't work above 30 frames per second. HEVC (H.265) does work, however.
* The SVG support in Windows isn't always perfect. If your SVG file doesn't show up after you import it, then you might be able to get it to work by making a few simple edits to the SVG file in Notepad or another text editor. For example, look near the top of the file to see if the `svg` tag uses the `width` and `height` properties. If it does, then try removing them and see if the file imports successfully.
* The scoreboard and game clock don't redraw while SimpleSportsCaster is minimized. Game time still advances normally but it just doesn't show on the screen until SimpleSportsCaster is retored from the minimized state.
