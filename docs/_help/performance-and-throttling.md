---
layout: help
title: Performance and Throttling
description: "Tuning for best performance and avoiding CPU throttling"
featured_image: /images/social.jpg
permalink: /help/perf-throttling
tag: performance throttling
comments: true
---
Encoding video, especially if you're recording and streaming simultaneously, can be demanding on your computer. To get the best results, you want your computer operating at peak performance. Otherwise, it may start to act sluggish and your viewers may see jittery video.

### Power Mode Slider

The first step to getting the best performance from your laptop or tablet is to let Windows know that's what you want. Tap the battery icon in the notification area in the lower right corner of your screen to open the power mode slider.

{% include image.html url="/assets/help/perf-throttling/tray.png" description="Tap the battery icon in the notification area to open the power mode slider." %}

Drag the slider all the way to the right to choose the best performance mode.

{% include image.html url="/assets/help/perf-throttling/perf-mode-slider-1.png" description="Drag the performance mode slider all the way to the right when plugged in." %}

Windows remembers two positions for the power mode slider so you'll need to do this twice: once when plugged in (as above) and again when running on battery (as below).

{% include image.html url="/assets/help/perf-throttling/perf-mode-slider-2.png" description="Repeat when running on battery." %}

### Keeping Cool

Unfortunately, portable computers like laptops and tablets are not always the best at dissipating the heat they generate when operating in high performance mode. As they heat up, they'll lower, or throttle, their performance to keep their temperatures from getting too high. If your computer throttles its performance enough, you'll notice the video preview getting jittery or laggy and your viewers may start to see jittery, glitchy video as well.

The best way to avoid throttling is to keep your computer cool. Avoid exposing it to direct sunlight, especially on warm days. Use an umbrella like the [Versa-Brella](https://www.amazon.com/Sport-Brella-Versa-Brella-Swiveling-Umbrella-Midnight/dp/B00HA2ZKCO) to keep your computer in the shade.

<figure class="image">
    <a href="https://www.amazon.com/Sport-Brella-Versa-Brella-Swiveling-Umbrella-Midnight/dp/B00HA2ZKCO/ref=as_li_ss_il?ref_=bl_dp_s_web_3043383011&linkCode=li3&tag=zofwarellc-20&linkId=b57ff33239fcc3a7d69913348247f1c5&language=en_US" target="_blank">
        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HA2ZKCO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=zofwarellc-20&language=en_US" >
    </a>
    <img src="https://ir-na.amazon-adsystem.com/e/ir?t=zofwarellc-20&language=en_US&l=li3&o=1&a=B00HA2ZKCO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    <figcaption>Versa-Brella by Sport-Brella</figcaption>
</figure>

On really hot days an umbrella might not be enough. Sometimes a small fan can make all the difference. The [ARCTIC Breeze Mobile USB fan](https://www.amazon.com/gp/product/B003XN24GY) is great for this. Its powered via USB and has a flexible neck that lets you aim the fan at the hottest part of your tablet.

<figure class="image">
    <a href="https://www.amazon.com/gp/product/B003XN24GY/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=zofwarellc-20&linkId=8a623e05ff3a5f99cea26a4b39edab59&language=en_US" target="_blank">
        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B003XN24GY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=zofwarellc-20&language=en_US" >
    </a>
    <img src="https://ir-na.amazon-adsystem.com/e/ir?t=zofwarellc-20&language=en_US&l=li3&o=1&a=B003XN24GY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    <figcaption>ARCTIC Breeze Mobile USB Fan</figcaption>
</figure>

### Monitoring Performance Throttling

So how do you know when your computer is throttling its performance? Fortunately there's a free tool named [ThrottleStop](https://www.techpowerup.com/download/techpowerup-throttlestop/) that will tell you.

After you install ThrottleStop, you can configure it to show your CPU temperature and speed in the notification area. If performance throttling occurs, the CPU speed will drop so you can see right away when it happens.

{% include image.html url="/assets/help/perf-throttling/throttlestop-options-1.png" description="Open the ThrottleStop Options by clicking the Options button." %}

Enable the CPU speed display by checking the box next to CPU MHz and choose a color like green. You can also display CPU temperature and power and pick colors for them like red and yellow.

{% include image.html url="/assets/help/perf-throttling/throttlestop-options-2.png" description="Showing CPU temperature, speed, and power in the system tray." %}

Once you've configured ThrottleStop to show CPU speed, temperature, and power, they'll show up in the notification area with the colors you chose.

{% include image.html url="/assets/help/perf-throttling/throttlestop-high-perf-0.png" description="Notification area showing peak performance of 4.2 GHz (42) for a Surface Pro 7+." %}

If your computer begins to throttle its performance under load, you'll notice the CPU speed begin to drop. During throttling, the temperature and power may also drop which indicates that throttling is working to keep the computer from overheating. However, the true measure of performance that you want to monitor is the CPU speed. If the CPU speed is lower than normal then you're not getting the best performance from your computer.

{% include image.html url="/assets/help/perf-throttling/throttlestop-throttled-0.png" description="Notification area showing throttled performance of 1.5 GHz (15) for a Surface Pro 7+." %}

To confirm that throttling is occurring, tap the CPU speed value in the notification area to show the ThrottleStop window and look for the telltale red text as shown in the red box below.

{% include image.html url="/assets/help/perf-throttling/throttlestop-throttled-1.png" description="ThrottleStop indicating that power limit throttling is occurring." %}

The throttling behavior shown in the images above was observed on a Surface Pro 7+ running in a fairly warm 76°F room while simultaneously recording and streaming using SimpleSportsCaster. The throttling subsided in less than a minute after aiming a fan at the back of the tablet just below the back-facing camera.

You'll want to test how your computer, laptop, or tablet behaves while running SimpleSportsCaster to see when performance throttling occurs for you. That way you can be prepared with a fan or other cooling measures to keep things running smoothly.
