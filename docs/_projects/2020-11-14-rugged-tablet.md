---
layout: project
title: Rugged Tablet Project
subtitle: Build a rugged tablet system for SimpleSportsCaster
description: Build a rugged tablet system for SimpleSportsCaster
date: "2020-11-14 00:00:00"
author: AdamZofware
version: 1.0.0
comments: true
image:
featured_image:
excerpt_separator: <!--more-->

---

[Seattle United FC](https://www.seattleunited.com) asked us to build three SimpleSportsCaster live streaming tablets to go with the [Hi-Pod](https://www.hipod.com) systems they already use to record their [ECNL](https://www.theecnl.com/) games. Beyond needing to work with the Hi-Pod cameras, the main requirement was that the tablets had to be rugged enough to handle frequent use by parent volunteers in rainy Seattle weather.

After some discussion with the club, we decided build around the [Dell Rugged Extreme Tablet](https://www.dell.com/en-us/work/shop/laptops/12-7220-rugged-extreme/spd/latitude-12-7220-tablet) because of its durability and weather resistance. We attached the tablet and all the accessories to the [PadHoldr Iron L7202](https://padholder.com/products/rugged-12-mount) mounting plate and then the entire system clamps onto the Hi-Pod pole using parts from [Ram Mounts](https://www.rammount.com) and [Manfrotto](https://www.manfrotto.com).

The end result was a durable, one-piece unit that quickly attaches to the Hi-Pod and gets the club live and on-the-air with minimal fuss.

![Completed Project](/assets/projects/rugged/completed-project.jpg)

<!--more-->

Each system we built for Seattle United included the tablet, mount and video connections, an on-air light, and external batteries with a custom switchbox to toggle between them. You may choose to mix and match the system components differently depending on your needs so we've split the system design into several sections, some of which are optional.

<!-- Tables converted from Excel by https://tabletomarkdown.com/convert-spreadsheet-to-markdown/ -->

## Parts Lists

The parts lists are broken into several sections, the latter of which are optional. Prices shown were current as of November 2020.

* [Main Tablet Parts](#main-tablet-parts)
* [External Battery Parts](#external-battery-parts) (optional)
* [On-Air Light Parts](#on-air-light-parts) (optional)
* [Battery Switchbox Parts](#battery-switchbox-parts) (optional)

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
|                 | misc tools and hardware                                                                                                                                                                                                      |          |           |            | nuts, bolts, screwdrivers, wrenches, thread lock glue, zip ties                                                                    |
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

Adding an on-air light is a friendly way to remind people nearby that their voices might be heard on your live stream. SimpleSportsCaster can also flash the light as a low battery warning to the camera operator. We plug the light into a USB gooseneck extension to lift it above the tablet high enough to be visible from all sides. We also add a USB/network/HDMI hub as a convenience since the tablet has limited number of ports.

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

## Assembly Instructions

1. [Battery Mounting Plate](#battery-mounting-plate)
2. [Clamp Arm](#clamp-arm)
3. [Tablet Mount](#tablet-mount)
4. [Video Capture and On-Air Light](#video-capture-and-on-air-light)
5. [Video and USB Cabling](#video-and-usb-cabling)
6. [Attach Tablet to Mount](#attach-tablet-to-mount)

### Battery Mounting Plate

If you choose to add the Dell [external batteries](#external-battery-parts) to your system, use the RAM 2461U VESA plate as a template to drill four holes through the KS257 aluminum plate as shown here:

![Battery Plate Holes](/assets/projects/rugged/battery-plate-holes.jpg)

Use a metal file to smooth the sharp edges of the aluminum sheet and round the corners to make them safer to touch.

Sandwich the battery mounting plate between the PadHolder Iron L7202 and the RAM 2461U VESA plate and join all three pieces together with four nuts and bolts. If the bolts included with the PadHoldr kit are too long or too short then you'll need to visit a hardware store to buy some bolts of the proper length.

See the two images below for reference. Also note the location of the adhesive Velcro hook strips. Some of the Velcro is optional depending upon whether or not you plan to install the on-air light with Anker USB hub or the battery switchbox.

![Battery Plate Ball Side](/assets/projects/rugged/battery-plate-ball-side.jpg)

![Battery Plate Tablet Side](/assets/projects/rugged/battery-plate-tablet-side.jpg)

### Clamp Arm

Assemble the clamp and tablet mount parts as shown below.

You may want to apply some thread lock glue on the Manfrotto 2907 short stud where it screws into the back of the RAM 202CNSU ball.

If you chose to build the battery mounting plate then you will have already joined the RAM 2461U to the PadHoldr Iron L7202 with the battery plate sandwiched in between.

![Clamp Arm](/assets/projects/rugged/clamp-arm.jpg)

If you haven't already done so, unscrew and separate the two halves of the PadHoldr Iron L7202. Place a strip of Velcro hooks on the inside of the half of the L7202 that is bolted to the RAM 2461U VESA plate. This Velcro strip will hold the Elgato HD60 S+ video capture device. This image shows where to place the Velcro.

![Velcro hooks for Elgato HD60 S+](/assets/projects/rugged/video-capture-velcro-hooks.jpg)

### Tablet Mount

If you haven't already done so, unscrew and separate the two halves of the PadHoldr Iron L7202. Attach the tablet bracket of the L7202 to the back of the Dell tablet using the included screws.

![Tablet Bracket](/assets/projects/rugged/tablet-bracket.jpg)

### Video Capture and On-Air Light

Attach a length of Velcro strip (loop side) to the back of the Elgato HD60 S+ video capture device. Then press it onto the Velcro hooks that you already attached to the inside of the PadHoldr Iron L7202 as shown below.

![Velcro loops for Elgato HD60 S+](/assets/projects/rugged/video-capture-velcro-loops.jpg)

If you are building the on-air light option, plug the blink(1) LED light into one end of the USB gooseneck and the right angle USB adapter into the other end as shown below.

![On-air light and gooseneck](/assets/projects/rugged/on-air-light-gooseneck.jpg)

Attach a thin strip of Velcro loops on the back of the Anker USB hub. Plug the open end of the right angle adapter into the USB hub. Finally, attach the USB hub to the KS257 aluminum sheet by pressing the Velcro together as shown below.

![Velcro for USB hub and on-air light](/assets/projects/rugged/on-air-light-velcro.jpg)

### Video and USB Cabling

Now it's time to connect the HDMI and USB cables to the accessories that you previously attached to the PadHoldr Iron L7202 tablet mount. Start by plugging the two CableCreation angled HDMI cables into the Elgato HD60 S+ as pictured below. Route them down toward the open holes at the bottom of the Iron L7202 and secure them with zip ties. This helps relieve the strain on the cables and where they connect to the HD60 S+.

Next, add the two USB extension cables from UsbFireWire.com. Plug the USB-C end of the RR-ADCS-15GRC cable into the HD60 S+. Also connect the female end of the RR-CVCF-10GRNTP cable to the male USB-C connection on the Anker USB hub.

Note: The image below includes a stereo microphone cable. This was necessary in the case of the Seattle United build because the Sony HDR-CX405 Hi-Pod cameras don't send audio via HDMI. This was solved by mounting a small lapel microphone next to the camera and running a long microphone lead down to the bottom of the Hi-Pod pole. That lead was then plugged into a 3 foot audio extension cable, one end of which is pictured below and is plugged into the microphone input on the Dell Rugged Extreme Tablet. Most cameras send both audio and video via HDMI so the extra microphone isn't usually necessary.

![Video and USB cabling](/assets/projects/rugged/video-and-usb-cabling.jpg)

### Attach Tablet to Mount

With all the video and data connections in place, you can now join the two halves of the PadHoldr Iron L7202 back together again. Lay the tablet face down and slide the slots on the other half of the L7202 onto the hooks on the tablet bracket as shown below.

![Attach tablet to mount step 1](/assets/projects/rugged/attach-tablet-to-mount-1.jpg)

Use a long Allen wrench to screw in the bolt that locks the two halves of the PadHoldr Iron L7202 together.

![Attach tablet to mount step 2](/assets/projects/rugged/attach-tablet-to-mount-2.jpg)

This image shows the locking bolt in position after being tightened.

![Attach tablet to mount step 3](/assets/projects/rugged/attach-tablet-to-mount-3.jpg)