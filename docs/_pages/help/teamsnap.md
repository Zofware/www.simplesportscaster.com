---
title: Using TeamSnap Live with SimpleSportsCaster
# description: 
# subtitle: 
featured_image: /images/social.jpg
permalink: /help/teamsnap
redirect_from: /teamsnap
tag: TeamSnap
comments: true
---

This is an experimental feature that takes a bit of work to set up. But if you have a TeamSnap account, an Android phone, and a willingness to tinker, you can automatically keep your TeamSnap Live scoreboard in sync with the scoreboard in SimpleSportsCaster.  

## Install Android Apps

SimpleSportsCaster sends scoreboard updates to TeamSnap Live running on an Android phone. For now, this only works on Android because the communication between SimpleSportsCaster and TeamSnap Live is handled by three Android-only apps you can get from the Play Store:

* [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) is a scripting engine for automating tasks on and Android phone
* [AutoInput](https://play.google.com/store/apps/details?id=com.joaomgcd.autoinput) is a plugin for Tasker that helps script button presses and other user interface operations for Android apps. We'll use it to automate the TeamSnap Live user interface.
* [AutoRemote](https://play.google.com/store/apps/details?id=com.joaomgcd.autoremote) is plugin for Tasker that accepts commands from the Internet to trigger actions in Tasker. We'll set this up to lsiten for commands from SimpleSportsCaster when the scoreboard needs updating.

Install all three apps on your Android phone. There are free trials for each of them but they only cost a few dollars to purchase.  

## Set Up Tasker



https://autoremotejoaomgcd.appspot.com/?key=this-is-your-key 