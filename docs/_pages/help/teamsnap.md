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

Tasker needs a few profiles and tasks created. To do this:
1. Download this [Tasker project file](https://raw.githubusercontent.com/Zofware/simplesportscaster-teamsnap/master/SimpleSportsCaster_TeamSnap.prj.xml) onto your Android phone.
2. Launch the Tasker app on your phone.
3. Tap the Home icon in the lower left corner of the Tasker app.
4. Choose Import Project.
5. Navigate to the location where you saved the project file from step 1 and then select it.

If the import succeeded, you'll have these profiles:

![](/assets/help/tasker-profiles.jpg) 

And these tasks:

![](/assets/help/tasker-tasks.jpg)

## Set Up AutoRemote

To send messages to TeamSnap on your Android phone, SimpleSportsCaster needs a key for AutoRemote. The key is just a long sequence of letters and numbers. Here's how to get the key and what to do with it.
1. Launch AutoRemote on your Android phone.
2. You'll see a link and a QR code.
3. Open that link on the tablet or computer where you are running SimpleSportsCaster.
4. After the link opens in your browser, look at the address bar where you'll see an address that looks like this: `https://autoremotejoaomgcd.appspot.com/?key=this-is-your-key`. Everything after `key=` is your AutoRemote key.
5. Copy your key and paste it into the AutoRemote Key box on the TeamSnap page in SimpleSportsCaster (visible when you have a game open).

## Activating Everything

After you've configured everything above, you need to turn it on.
1. Open the Tasker app on your phone, choose the 3-dot menu in the upper right corner, then choose Enable Tasker if it's not already enabled.
2. Open the AutoRemote app on your phone, choose the preferences button in the lower left corner, then make sure the Active setting has a checkbox next to it.
3. Start the TeamSnap app on your phone and open the TeamSnap Live event for today's game.
4. In SimpleSportsCaster open today's game and select the TeamSnap page.
5. Select your team and make sure you have your AutoRemote key pasted into the key box.
6. Flip the Enable TeamSnap Live switch to the On position.
7. Type a test message into the Send Message Now box and tap the send button. You should see your message appear in TeamSnap Live within a few seconds. If not, then something isn't configured correctly. (Or perhaps this guide needs improvement!)
8. During the game, as you change periods, start and stop the clock, and record goals in SimpleSportsCaster, the TeamSnap live scoreboard should update to match within a few seconds.

