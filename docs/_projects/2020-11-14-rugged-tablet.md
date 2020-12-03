---
layout: project
title: Rugged Tablet Project
subtitle: Build a rugged tablet system for SimpleSportsCaster
description: Build a rugged tablet system for SimpleSportsCaster
date: "2020-12-01 12:00:00"
author: AdamZofware
version: 1.0.1
comments: true
image: /assets/projects/rugged/completed-project-5.jpg
featured_image: /assets/projects/rugged/completed-project-5.jpg
excerpt_separator: <!--more-->
---

[Seattle United FC](https://www.seattleunited.com) asked us to build three SimpleSportsCaster live streaming tablets to go with the [Hi-Pod](https://www.hipod.com) systems they already use to record their [ECNL](https://www.theecnl.com/) games. Beyond needing to work with the Hi-Pod cameras, the main requirement was that the tablets had to be rugged enough to handle frequent use by parent volunteers in rainy Seattle weather.

After some discussion with the club, we decided to build around the [Dell Rugged Extreme Tablet](https://www.dell.com/en-us/work/shop/laptops/12-7220-rugged-extreme/spd/latitude-12-7220-tablet) because of its durability and weather resistance. We attached the tablet and all the accessories to the [PadHoldr Iron L7202](https://padholder.com/products/rugged-12-mount) mounting plate and then clamped the entire system onto the Hi-Pod pole using parts from [Ram Mounts](https://www.rammount.com) and [Manfrotto](https://www.manfrotto.com).

The end result was a durable, one-piece unit that quickly attaches to the Hi-Pod and gets the club live and on-the-air with minimal fuss.

<!--more-->

{% include image.html url="/assets/projects/rugged/completed-project-1.jpg" description="Completed rugged tablet project" %}

Each system we built for Seattle United included the tablet, mount and video connections, an on-air light, and external batteries with a custom switchbox to toggle between them. You may choose to mix and match the system components differently depending on your needs so we've split the system design into several sections, some of which are optional.

<!-- Tables converted from Excel by https://tabletomarkdown.com/convert-spreadsheet-to-markdown/ -->

* [Parts Lists](#parts-lists)
* [Assembly Instructions](#assembly-instructions)
* [Final Thoughts](#final-thoughts)

## Parts Lists

The parts lists are broken into several sections, the latter of which are optional. Prices shown were current as of November 2020.

* [Main Tablet Parts](#main-tablet-parts)
* [External Battery Parts](#external-battery-parts) (optional)
* [On-Air Light Parts](#on-air-light-parts) (optional)
* [Battery Switchbox Parts](#battery-switchbox-parts) (optional)
* [Microphone for Sony HDR-CX405 Camcorder](#microphone-for-sony-hdr-cx405-camcorder) (optional)

### Main Tablet Parts

This is the core of the system with the main components you need to run SimpleSportsCaster on a rugged tablet attached to a Hi-Pod pole. It doesn't include some of the optional components like the on-air light or the external batteries. To be clear, even if you don't add the [external batteries](#external-battery-parts), you'll still need some kind of external power source to make it through a 2 hour game.

The single most expensive piece of the system is the Dell Rugged Extreme Tablet itself. We recommend a configuration with the Intel Core i7 processor, especially if you want to live stream and record simultaneously.

For live streaming, it's extremely convenient to include one of the mobile broadband options but you can also tether your phone or use some other external mobile hotspot.

If you intend to record your games to the tablet, you'll want a reasonably large hard drive or solid state storage. Recording high quality HD 1080p60 video at 50 mbps consumes over 20 gigabytes of storage per hour. Think about how many games you'll want to save on the tablet before transferring them elsewhere and plan accordingly. Seattle United chose the 512 GB option which let's them record an entire weekend worth of ECNL games without running out of space.

After the tablet, one of the most important components is the video capture device that allows the tablet to recieve the video feed from the camera on top of the Hi-Pod. We choose the [Elgato HD60 S+](https://www.elgato.com/en/gaming/game-capture-hd60-s-plus) because it's a high-quality device from a well-known manufacturer. It also has two HDMI ports which allows you to view the video feed on the tablet and on the Hi-Pod's monitor at the same time. This is great if you have a two-person crew where one person operates the camera while viewing the Hi-Pod monitor and another operates the scoreboard and keeps statistics on the tablet.

| Manufacturer    | Part                                                                                                                                                                                                                         | Quantity | Unit Cost | Total Cost | Description                                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| Dell            | [7220 Rugged Extreme Tablet](https://www.dell.com/en-us/work/shop/2-in-1-laptops-tablets/latitude-7220-rugged-extreme-tablet/spd/latitude-12-7220-tablet/xctol722012us?configurationid=b17d0f41-7b06-4492-b081-631ae5811bfe) | 1        | $2,542    | $2,542     | Intel Core i7-8665U model                                                                                                 |
| Elgato          | [HD60 S+](https://www.elgato.com/en/gaming/game-capture-hd60-s-plus)                                                                                                                                                         | 1        | $200      | $200       | Video capture device with HDMI passthrough (Important! Get the S+ because the S model won't work.)                        |
| PadHoldr        | [Iron L7202](https://padholder.com/products/rugged-12-mount)                                                                                                                                                                 | 1        | $73       | $73        | VESA adapter plate that screws to back of tablet                                                                          |
| Manfrotto       | [Manfrotto 2909+2907](https://www.amazon.com/gp/product/B00009R6BO)                                                                                                                                                          | 1        | $34       | $34        | Super clamp and short stud                                                                                                |
| Ram Mounts      | [RAM-201U-B](https://www.rammount.com/part/RAM-201U-B)                                                                                                                                                                       | 1        | $22       | $22        | Short double socket arm for 1.5" ball bases                                                                               |
| Ram Mounts      | [RAM-2461U](https://www.rammount.com/part/RAM-2461U)                                                                                                                                                                         | 1        | $19       | $19        | 75mm VESA plate with 1.5" ball                                                                                            |
| UsbFireWire.com | [RR-ADCS-15GRC](https://www.usbfirewire.com/parts/rr-adcs-xxg.html#RR-ADCS-15GRC)                                                                                                                                            | 1        | $19       | $19        | 15" USB 3.1 down angle A-to-C cable to connect Elgato to tablet USB port                                                  |
| Ram Mounts      | [RAM-202CNSU](https://www.rammount.com/part/RAM-202CNSU)                                                                                                                                                                     | 1        | $18       | $18        | 1.5" ball base with 3/8"-16 female threads                                                                                |
| CableCreation   | [Right Angle HDMI cable](https://www.amazon.com/CableCreation-Vertical-Support-Ethernet-Channel/dp/B01LA6U9FI?ref_=ast_sto_dp&th=1)                                                                                          | 1        | $8        | $8         | 3' right angle HDMI cable to connect Elgato pass-through to back-up monitor while shedding water.                         |
| CableCreation   | [HDMI angle adapters](https://www.amazon.com/Female-Adapter-CableCreation-Converter-Extender/dp/B07C2Q834L?ref_=ast_sto_dp&th=1)                                                                                             | 1        | $7        | $7         | pair of HDMI angle adapters to keep cables pointing down to shed rain                                                     |
| CableCreation   | [Left Angle HDMI cable](https://www.amazon.com/Extension-CableCreation-Vertical-Ethernet-Channel/dp/B01LA6TZGW?ref_=ast_sto_dp&th=1)                                                                                         | 1        | $6        | $6         | 3' left angle HDMI cable extension to connect HDMI cable from camera to Elgato while relieving strain and shedding water. |
| Velcro          | [Heavy Duty 4x2 Inch strips (4 pack)](https://www.amazon.com/VELCRO-Brand-Industrial-Fasteners-Professional/dp/B0010HADEA)                                                                                                   | 1        | $6        | $6         | For mounting video capture device but also the USB hub, batteries and switch box if you include them                      |
|                 | misc tools and hardware                                                                                                                                                                                                      |          |           |            | nuts, bolts, screwdrivers, wrenches, thread lock glue, zip ties, label maker                                              |
| **Total**       |                                                                                                                                                                                                                              |          |           | **$2,954** |                                                                                                                           |

### External Battery Parts

One requirement we wanted to satisfy was the ability to broadcast and record two complete games without needing to plug in or recharge. We determined that adding two Dell 65 watt-hour external batteries was enough to meet that requirement. The 4"x10" aluminum sheet provides a mounting surface for the batteries. You can use a different material like plastic if you prefer.

| Manufacturer | Part                                                                                                                                               | Quantity | Unit Cost | Total Cost | Description                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | ---------- | ------------------------------------------------------------------------------------- |
| Dell         | [PW7015L 65 WHr Power Bank Plus](https://www.dell.com/en-us/work/shop/dell-notebook-power-bank-plus-18000-mah-pw7015l/apd/451-bbkv/pc-accessories) | 2        | $110      | $220       | 2 external batteries per system, to allow recording and broadcasting two full games   |
| ksmetals.com | [KS257 4"x10"x0.064" aluminum sheet](https://www.amazon.com/Precision-Metals-257-Aluminum-Thickness/dp/B004AFAZNS)                                 | 1        | $3        | $3         | mounting plate for batteries, USB hub, switch box                                     |
|              | misc tools and hardware                                                                                                                            |          |           |            | drill press, drill bits, clamps, Velcro strips from above                             |
| **Total**    |                                                                                                                                                    |          |           | **$223**   |                                                                                       |

### On-Air Light Parts

Adding an on-air light is a friendly way to remind people nearby that their voices might be heard on your live stream. SimpleSportsCaster can also flash the light as a low battery warning to the camera operator. We plug the light into a USB gooseneck extension to lift it above the tablet high enough to be visible from all sides. We also add a USB/network/HDMI hub as a convenience since the tablet has a limited number of ports.

| Manufacturer    | Part                                                                                                                          | Quantity | Unit Cost | Total Cost | Description                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | ---------- | ---------------------------------------------------------------------- |
| Anker           | [PowerExpand+ 5-in-1 USB-C Ethernet Hub](https://www.anker.com/products/variant/powerexpand--5in1-usbc-ethernet-hub/A83380A1) | 1        | $36       | $36        | USB port for on-air light plus extra ports for future use              |
| ThingM          | [blink(1) mk3 USB RGB LED](https://buy.thingm.com/blink1)                                                                     | 1        | $30       | $30        | on-air light                                                           |
| UsbFireWire.com | [RR-CVCF-10GRNTP](https://www.usbfirewire.com/parts/rr-cvcf-xxg.html)                                                         | 1        | $20       | $20        | 10" USB 3.1 down angle C-to-C cable to connect Anker USB hub to tablet |
| CableMatters    | [USB right angle adapter](https://www.amazon.com/gp/product/B00J4NLOOU)                                                       | 1        | $4        | $4         | connect gooseneck to USB hub                                           |
| pccables.com    | [70431 USB gooseneck cable](https://www.pccables.com/search?q=70431)                                                          | 1        | $3        | $3         | holder for on-air light                                                |
|                 | misc tools and hardware                                                                                                       |          |           |            | Velcro strips from above                                               |
| **Total**       |                                                                                                                               |          |           | **$93**    |                                                                        |

### Battery Switchbox Parts

To simplify switching between the two external batteries, we built a little switch box that attaches to the back of the tablet. It has one position for each of the external batteries plus a third position that allows charging both batteries and the tablet from a single power adapter.

| Manufacturer | Part                                                                        | Quantity | Unit Cost | Total Cost | Description                                                                        |
| ------------ | --------------------------------------------------------------------------- | -------- | --------- | ---------- | ---------------------------------------------------------------------------------- |
| Njuone       | [5 pack of Dell power cables](https://www.amazon.com/gp/product/B0823DYYP1) | 1        | $13       | $13        | battery switch box connectors                                                      |
| Mouser.com   | [1591MSBK plastic box](https://www.mouser.com/ProductDetail/546-1591MSBK)   | 1        | $4        | $4         | battery switch enclosure                                                           |
| Mouser.com   | [4P3T slider switch](https://www.mouser.com/ProductDetail/629-G660S6010)    | 1        | $3        | $3         | battery switch                                                                     |
|              | misc tools and hardware                                                     |          |           |            | screws, nuts, solder, wires, drill, bits, screwdriver, soldering iron, wire cutter |
| **Total**    |                                                                             |          |           | **$20**    |                                                                                    |

### Microphone for Sony HDR-CX405 Camcorder

Many Hi-Pods come with the Sony HDR-CX405 camcorder. One quirk of this camcorder is that it doesn't send any microphone audio out via HDMI. Unfortunately, this means you have to provide your own microphone if you want to have game audio in your live streams and recordings. If your camera provides live audio then you don't need to purchase these parts.

| Manufacturer  | Part                                                                                                                                        | Quantity | Unit Cost | Total Cost | Description                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | ---------- | ---------------------------------------------------------------------------- |
| CableCreation | [right angle 3.5mm headphone extension 3ft](https://www.amazon.com/Extension-CableCreation-Silver-Plating-Compatible-iPhones/dp/B0793M4WJ9) | 1        | $7        | $7         | Stays plugged into tablet to receive audio feed from pole mounted microphone |
| YCS Basics    | [3.5mm headphone extension 25 ft](https://www.amazon.com/YCS-Basics-Stereo-Headphone-Extension/dp/B00A6VYQFS)                               | 1        | $7        | $7         | Brings microphone feed down the camera pole                                  |
| PowerDeWise   | [Omnidirectional label microphone](https://www.amazon.com/dp/B01AG56HYQ/ref=cm_sw_r_cp_api_fabt1_eseXFbC5P9CA6)                             | 1        | $36       | $36        | Mount next to Sony HDR-CX405 camera to provide audio feed                    |
| **Total**     |                                                                                                                                             |          |           | **$50**    |                                                                              |

## Assembly Instructions

1. [Battery Mounting Plate](#battery-mounting-plate)
2. [Clamp Arm](#clamp-arm)
3. [Tablet Mount](#tablet-mount)
4. [Video Capture and On-Air Light](#video-capture-and-on-air-light)
5. [Video and USB Cabling](#video-and-usb-cabling)
6. [Attach Tablet to Mount](#attach-tablet-to-mount)
7. [Attach Batteries](#attach-batteries)
8. [Battery Switchbox](#battery-switchbox)

### Battery Mounting Plate

If you choose to add the Dell [external batteries](#external-battery-parts) to your system, use the RAM 2461U VESA plate as a template to drill four holes through the KS257 aluminum plate as shown here:

{% include image.html url="/assets/projects/rugged/battery-plate-holes.jpg" description="Battery mounting plate holes" %}

Use a metal file to smooth the sharp edges of the aluminum sheet and round the corners to make them safer to touch.

Sandwich the battery mounting plate between the PadHolder Iron L7202 and the RAM 2461U VESA plate and join all three pieces together with four nuts and bolts. If the bolts included with the PadHoldr kit are too long or too short then you'll need to visit a hardware store to buy some bolts of the proper length.

See the two images below for reference. Also note the location of the adhesive Velcro hook strips. Some of the Velcro is optional depending upon whether or not you plan to install the on-air light with Anker USB hub or the battery switchbox.

{% include image.html url="/assets/projects/rugged/battery-plate-ball-side.jpg" description="Battery mounting plate (ball side)" %}

{% include image.html url="/assets/projects/rugged/battery-plate-tablet-side.jpg" description="Battery mounting plate (tablet side)" %}

### Clamp Arm

Assemble the clamp and tablet mount parts as shown below.

You may want to apply some thread lock glue on the Manfrotto 2907 short stud where it screws into the back of the RAM 202CNSU ball.

If you chose to build the battery mounting plate then you will have already joined the RAM 2461U to the PadHoldr Iron L7202 with the battery plate sandwiched in between.

{% include image.html url="/assets/projects/rugged/clamp-arm.jpg" description="Assmbled clamp arm" %}

If you haven't already done so, unscrew and separate the two halves of the PadHoldr Iron L7202. Place a strip of Velcro hooks on the inside of the half of the L7202 that is bolted to the RAM 2461U VESA plate. This Velcro strip will hold the Elgato HD60 S+ video capture device. This image shows where to place the Velcro.

{% include image.html url="/assets/projects/rugged/video-capture-velcro-hooks.jpg" description="Velcro hooks for Elgato HD60 S+" %}

### Tablet Mount

If you haven't already done so, unscrew and separate the two halves of the PadHoldr Iron L7202. Attach the tablet bracket of the L7202 to the back of the Dell tablet using the included screws.

{% include image.html url="/assets/projects/rugged/tablet-bracket.jpg" description="PadHoldr Iron L7202 tablet bracket installed" %}

### Video Capture and On-Air Light

Attach a length of Velcro strip (loop side) to the back of the Elgato HD60 S+ video capture device. Then press it onto the Velcro hooks that you already attached to the inside of the PadHoldr Iron L7202 as shown below.

{% include image.html url="/assets/projects/rugged/video-capture-velcro-loops.jpg" description="Velcro loops for Elgato HD60 S+" %}

If you are building the on-air light option, plug the blink(1) LED light into one end of the USB gooseneck and the right angle USB adapter into the other end as shown below.

{% include image.html url="/assets/projects/rugged/on-air-light-gooseneck.jpg" description="On-air light and gooseneck" %}

Attach a thin strip of Velcro loops on the back of the Anker USB hub. Plug the open end of the right angle adapter into the USB hub. Finally, attach the USB hub to the KS257 aluminum sheet by pressing the Velcro together as shown below.

{% include image.html url="/assets/projects/rugged/on-air-light-velcro.jpg" description="Velcro for USB hub and on-air light" %}

### Video and USB Cabling

Now it's time to connect the HDMI and USB cables to the accessories that you previously attached to the PadHoldr Iron L7202 tablet mount. Start by plugging the two CableCreation angled HDMI cables into the Elgato HD60 S+ as pictured below. Route them down toward the open holes at the bottom of the Iron L7202 and secure them with zip ties. This helps relieve the strain on the cables and where they connect to the HD60 S+.

Next, add the two USB extension cables from UsbFireWire.com. Plug the USB-C end of the RR-ADCS-15GRC cable into the HD60 S+. Also connect the female end of the RR-CVCF-10GRNTP cable to the male USB-C connection on the Anker USB hub.

Note: The image below includes a stereo microphone cable. This was necessary in the case of the Seattle United build because the Sony HDR-CX405 Hi-Pod cameras don't send audio via HDMI. This was solved by mounting a small lapel microphone next to the camera and running a long microphone lead down to the bottom of the Hi-Pod pole. That lead was then plugged into a 3 foot audio extension cable, one end of which is pictured below and is plugged into the microphone input on the Dell Rugged Extreme Tablet. Most cameras send both audio and video via HDMI so the extra microphone isn't usually necessary.

{% include image.html url="/assets/projects/rugged/video-and-usb-cabling.jpg" description="Video and USB cabling" %}

To make things easier for your film crew, it's nice to label the video cables. Note: If you added an external microphone for your Sony HDR-CX405 Hi-Pod camera then it's nice to label that too.

{% include image.html url="/assets/projects/rugged/cable-labels.jpg" description="Cable labels" %}

### Attach Tablet to Mount

With all the video and data connections in place, you can now join the two halves of the PadHoldr Iron L7202 back together again. Lay the tablet face down and slide the slots on the other half of the L7202 onto the hooks on the tablet bracket as shown below.

{% include image.html url="/assets/projects/rugged/attach-tablet-to-mount-1.jpg" description="Fitting the two halves of the PadHoldr Iron L7202 back together" %}

Use a long Allen wrench to screw in the bolt that locks the two halves of the PadHoldr Iron L7202 together.

{% include image.html url="/assets/projects/rugged/attach-tablet-to-mount-2.jpg" description="Reinstalling the locking bolt" %}

This image shows the locking bolt in position after being tightened.

{% include image.html url="/assets/projects/rugged/attach-tablet-to-mount-3.jpg" description="Close-up of locking bolt after tightening" %}

Open the data port door on the side of the tablet and plug in the USB cables and, if used, the microphone cable as shown below.

{% include image.html url="/assets/projects/rugged/plug-in-usb-and-mic-cables.jpg" description="Plugging the cables into the side of the tablet" %}

### Attach Batteries

If you chose to use the external Dell batteries then you can attach them now. Start by placing the tablet face down on a table.

Attach a strip of Velcro loops over the regulatory label of the first battery. Then flip it over and orient it so that the power plug is facing down and the power cable is directed toward the center of the tablet. Press it onto the Velcro hooks on the left side of the KS257 aluminum sheet as shown below.

{% include image.html url="/assets/projects/rugged/velcro-battery-1.jpg" description="Attaching battery #1" %}

Attach a strip of Velcro loops over the Dell logo on the second battery. Note that the Velcro for battery #2 goes on the opposite side that you used for battery #1. The reason is so the power output for battery #2 will also be on the bottom and directed toward the center of the tablet. Press the second battery onto the Velcro hooks on the right side of the KS257 aluminum sheet as shown below.

{% include image.html url="/assets/projects/rugged/velcro-battery-2.jpg" description="Attaching battery #2" %}

If you don't plan to buld the battery switchbox, then you can route the battery power cables from the batteries to near the power plug on the tablet. Without the switchbox, you'll switch batteries by swapping plugs.

If you put the clamp arm back on at this point then the back of the tablet will look like this. (Note, when this photo was taken the on-air light wasn't installed.)

{% include image.html url="/assets/projects/rugged/back-view-batteries-installed.jpg" description="Back view of tablet with batteries installed (on-air light not installed in this photo)" %}

### Battery Switchbox

The battery switchbox makes it easy to toggle between the two external Dell batteries without having to move power plugs around. The switchbox also has a third (middle) position that makes it possible to charge both external batteries and the tablet's internal batteries with just one power supply.

Start with the 1591MSBK plastic box and cut holes in the lid so you can mount the switch as far to one end of the box as possible. We used black nylon nuts and bolts to secure the switch to the lid.

{% include image.html url="/assets/projects/rugged/switchbox-lid.jpg" description="Switch mounted on switchbox lid" %}

Next, grab two of the Njuone Dell-compatible power cables and cut the male end off and strip the three wires inside the cable. Like this:

{% include image.html url="/assets/projects/rugged/female-battery-cable.jpg" description="Female battery cable" %}

Cut the female end off two more Dell power cables and strip those wires too.

{% include image.html url="/assets/projects/rugged/male-battery-cable.jpg" description="Male battery cable" %}

Drill 2 holes on each side of the 1591MSBK plastic box to allow you to insert the stripped ends of the power cables. Then solder the wires to the switch leads as shown below.

{% include image.html url="/assets/projects/rugged/switchbox-wiring.jpg" description="Switchbox wiring" %}

Here are a couple views of the switchbox with the wiring complete and the cover open.

{% include image.html url="/assets/projects/rugged/switchbox-internals-1.jpg" description="Close-up of switch wiring" %}

{% include image.html url="/assets/projects/rugged/switchbox-internals-2.jpg" description="Closing the switchbox lid" %}

If you have a label printer, you can print these labels for the outside of the box.

{% include image.html url="/assets/projects/rugged/switchbox-labels.png" description="Switchbox labels" %}

Cut a piece of Velcro loops to put on the outside of the box lid above the switch. Here is a view showing where to put the Velcro on the lid. It also shows the label for the switch.

{% include image.html url="/assets/projects/rugged/switchbox-exterior-1.jpg" description="Switchbox exterior (front)" %}

The following two views show where to place the labels on the sides of the box.

{% include image.html url="/assets/projects/rugged/switchbox-exterior-2.jpg" description="Switchbox exterior (right side)" %}

{% include image.html url="/assets/projects/rugged/switchbox-exterior-3.jpg" description="Switchbox exterior (left side)" %}

Slide the switchbox between the tablet and the battery mounting plate near the tablet's power jack as shown below. Press the Velcro together to hold it in place.

{% include image.html url="/assets/projects/rugged/switchbox-installed.jpg" description="Switchbox installed" %}

The rightmost three labels on the label strip above are for the batteries. In the image above you can see the label for battery #1. Put the label for battery #2 on the other battery. 

The last label with the battery, lightning bolt, and arrow also goes on battery #2 with the arrow pointing to the power jack.
When you want to charge both external batteries and the tablet's internal battery at the same time, move the switchbox switch to the center position and plug an external battery charger into battery #2. Power will flow through battery #2, to battery #1, then into the tablet, charging all three batteries at once.

## Final Thoughts

Here are a few views of the completed tablet project.

{% include image.html url="/assets/projects/rugged/completed-project-5.jpg" description="Completed rugged tablet in operation" %}

{% include image.html url="/assets/projects/rugged/completed-project-3.jpg" description="Close-up of completed rugged tablet in operation" %}

{% include image.html url="/assets/projects/rugged/completed-project-2.jpg" description="Back view of completed rugged tablet clamped onto Hi-Pod pole" %}

<!--{% include image.html url="/assets/projects/rugged/completed-project-4.jpg" description="Completed project 4" %}-->

These tablets have been great for Seattle United, especially during 2020 when games have been extremely limited due to COVID restrictions. Having video of intra-team scrimmages has been crucial for athletes in the club hoping to play in college. Since spectators haven't been allowed at most of these scrimmages, parents have enjoyed being able to watch the live streams broadcast from the club tablets.

We'd like to add one final word about the weather. Even though the Dell Rugged Extreme Tablets are able to operate in wet environments, they lose some of their moisture resistance with the data and power doors open on the side. Also, the USB devices, HDMI video connections, and batteries still need to be kept dry.

To help keep the rain off, we made three custom-fit, clear vinyl covers for each of the tablet systems. If there's sufficient interest we can share those plans with you. Otherwise, plan to keep the tablets out of the rain as much as possible with an umbrella or tent overhead.
