---
title: About
description: SimpleSportsCaster - Stream and record your games with a live scoreboard.
subtitle: Stream and record your games with a live scoreboard
featured_image: /images/social.jpg
permalink: /
hidetitle: true
---

With SimpleSportsCaster you can live stream and record your team's games with a scoreboard that's customizable and easy to operate.

<!-- need a screenshot here -->
<div align="center" class="gallery" data-columns="3">
    <img src="">
    <img src="/images/InGame1.png">
    <img src="">
</div>

Features:
* Customize the scoreboard with team colors and logos.
* Live stream to [YouTube](https://youtube.com) or any other service supporting RTMP.
* Record high definition video at up to 1080p and 60 frames per second.
* Tag important events during the game so you can quickly find them while reviewing your footage later.
* Show game information on the bottom third of the screen during pre-game, half time, or after the match.
* Experimental: Keep your [TeamSnap Live!](https://www.teamsnap.com/teams/features/teamsnap-live) scoreboard in sync with the video scoreboard.

SimpleSportsCaster runs on [Microsoft Surface Pro](https://www.microsoft.com/en-us/p/surface-pro-6/8ZCNC665SLQ5) and other Windows 10 devices and is available from the [Microsoft Store](https://www.microsoft.com/store/apps/9NRQMTPGS298).  

<br/>

<!-- Large badge -->
<!--
<a href='https://www.microsoft.com/store/apps/9NRQMTPGS298?cid=storebadge&ocid=badge'><img src='https://assets.windowsphone.com/85864462-9c82-451e-9355-a3d5f874397a/English_get-it-from-MS_InvariantCulture_Default.png' alt='English badge' style='width: 284px; height: 104px;'/></a>
-->

<!-- Small badge -->
<!--
<a href='https://www.microsoft.com/store/apps/9NRQMTPGS298?cid=storebadge&ocid=badge'><img src='https://assets.windowsphone.com/13484911-a6ab-4170-8b7e-795c1e8b4165/English_get_L_InvariantCulture_Default.png' alt='English badge' style='width: 127px; height: 52px;'/></a>
-->

<!-- normal banner -->
<div align="center" id="mspb-9nh4v22khyr3" class="9NRQMTPGS298"></div>
<script src="https://storebadge.azureedge.net/src/badge-1.8.3.js"></script>
<script>
  mspb('9NRQMTPGS298', function(badge) {
    document.getElementById('mspb-9nh4v22khyr3').innerHTML = badge;
  });
</script>

<!-- large banner -->
<!--
<div align="center" id="mspb-6lmsmry22ios" class="9NRQMTPGS298"></div>
<script src="https://storebadge.azureedge.net/src/badge-1.8.3.js"></script>
<script>
  mspb({ productId: '9NRQMTPGS298', badgeType: 'large' }, function(badge) {
    document.getElementById('mspb-6lmsmry22ios').innerHTML = badge;
  });
</script>
-->

## Beta Testing

SimpleSportsCaster is currently in beta testing. Everyone is encouraged to test the app, report bugs and make feature requests on the [contact page](/contact).  

The free version of SimpleSportsCaster puts a watermark over the upper-right corner of your video. While SimpleSportsCaster is in public beta testing, you can remove the watermark for free by clicking it and signing into the Microsoft Store to unlock the full version. The unlock will last for 30 days at which point you'll have to unlock again.  

In the future, SimpleSportsCaster will use a subscription model to unlock the full version. Pricing to be determined.

## Version History

### Version 1.1.136.0 (29 September 2019)
* Automatically set the YouTube live stream replay video title and description with game information after the live stream completes.
* Use external browser for YouTube authentication to meet Google security requirements. You will need to log into YouTube again for any accounts you added previously.
* Better error handling for lost connection to the camera and out of disk space.

### Version 1.1.129.0 (5 September 2019)
* New app logo.
* Add .webp, .bmp, .dib, .gif, .heic, .tif, and .tiff support to the logo picker.

### Version 1.1.126.0 (8 August 2019)
* Synchronize keyboard shortcuts between all devices sharing the same Microsoft Account.
* Expose video encoder profile setting for recording and streaming so users can fine-tune the balance between video quality and power consumption.
* Prevent accidental deletion of database records that are referenced by other records. For example, you can no longer delete a logo image that is current being used by one or more liveries.
* Disable wireless display support to reduce video preview startup time.

### Version 1.1.125.0 (1 August 2019)
* Automatically decrease streaming encoder bitrate if network bandwidth is too low
* Handle YouTube stream key resets more gracefully
* Disable streaming switch if capture devices aren't selected
* Fix crash when quitting the app while recording or streaming

### Version 1.1.122.0 (24 July 2019)
* Prevent the same team from being both home and away in the same game
* Improve game clock display update precision
* Add option to export YouTube video description from game log
* Set default h264 profile back to Main from High to save power

### Version 1.1.117.0 (19 July 2019)
* Configurable keyboard shortcuts for buttons and other scoreboard controls on the game screen.

### Version 1.1.116.0 (14 July 2019)
* Remove the "Subscribe Now!" banner as soon as purchase is complete.
* Limit the height of team label on scoreboard control panel.

### Version 1.1.115.0 (19 June 2019)
* Implement in-app purchase (free) to unlock the full version of the app for 30-days during beta testing.
* Simplified clock and score control.
* [List of supported video capture devices](https://www.simplesportscaster.com/help/capture-devices).
