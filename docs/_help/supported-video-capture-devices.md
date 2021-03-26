---
layout: help
title: Supported Video Capture Devices
description: ""
# subtitle: 
featured_image: /images/social.jpg
permalink: /help/capture-devices
redirect_from: /capture-devices
tag: video capture
comments: true
---

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 100px;
  max-width: 100px;
  width: auto;
  height: auto
}
</style>

SimpleSportsCaster supports USB Video Class (UVC) web cams and capture devices. DirectShow capture devices are not supported.

Please leave a comment at the bottom of this page if you know of other devices that work (or don't work) with SimpleSportsCaster and we will update the table. Thank you! 

Note: As an Amazon Associate this web site earns from qualifying purchases.

| Device | Supported? | Notes |
|:------:|------------|-------|
| [<img border="0" height="128" class="center" src="/assets/help/u-tap-hdmi.png"/><br/>AJA U-TAP HDMI](https://www.aja.com/products/u-tap-hdmi) | yes | Up to 1080p60. Great device! See [additional notes](#aja-u-tap-hdmi). |
| [<img border="0" height="128" class="center" src="/assets/help/Cam_Link_4K.png"/><br/>Elgato Cam Link 4k](https://www.elgato.com/gaming/cam-link-4k) | yes but with reservations | Up to 2160p30 or 1080p60. See [additional notes](#elgato-camlink-4k-and-hd60-s). |
| [<img border="0" height="128" class="center" src="/assets/help/HD60s.png"/><br/>Elgato HD60 S](https://www.elgato.com/gaming/game-capture-hd60-s) | no | Not a UVC device |
| [<img border="0" height="128" class="center" src="/assets/help/hd60splus.png"/><br/>Elgato HD60 S+](https://www.elgato.com/gaming/game-capture-hd60-s-plus) | yes | Up to 2160p30 or 1080p60 with HDMI passthrough. See [additional notes](#elgato-camlink-4k-and-hd60-s). |
| [<img border="0" height="128" class="center" src="/assets/help/MiraBox-HSV321.png"/><br/>MiraBox HSV321](https://amzn.to/2ZmYvma) | yes | Up to 1080p60. |
| [<img border="0" height="128" class="center" src="/assets/help/MiraBox-HSV323.png"/><br/>MiraBox HSV323](https://amzn.to/2HkKTOj) | yes | Up to 2160p30 or 1080p60. Also rebranded by [ShuOne](https://amzn.to/2HjFSW2). See [additional notes](#shuone-hsv323). |

## Additional Notes

### AJA U-TAP HDMI
* This device supports a huge number of resolutions and frame rates up to 1080p60.
* It can scale video from your camera to a different resolution before sending it to your computer.
* Very reliable. Shows color bars if the video signal is lost.

### Elgato CamLink 4K and HD60 S+
If you use an Elgato capture device with with a Sony Handycam such as the HDR-CX440, you should change the Handycam's HDMI Resolution setting to either 1080p or 720p. The Auto setting seems to confuse the CamLink by making the camera output 60 frames per second when the CamLink is expecting 30. Find this setting in the Handycam menu under Setup -> Connection (double arrows) -> HDMI Resolution. 

The CamLink seems to be very sensitive to loose HDMI cables and can freeze up if the connection is poor. BE VERY CAREFUL. Make sure your HDMI cable is good quality and is adequately secured at both ends with good strain relief to keep it from wiggling.

### ShuOne HSV323
* Might have problems with audio/vidio sync with cameras that output 59.94 frames per second. This might also be bug in SimpleSportsCaster but more investigation is necessary.
* In limited testing had trouble with dropped frames but, again, more investigation is necessary.

<br/>
