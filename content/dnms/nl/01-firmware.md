---
title: Stuurprogramma & firmware
---

We hebben de firmware al voorbereid. U hoeft alleen de drivers te installeren en uw NodeMCU (ESP8266) en Teensy 4.0 borden.

Om te communiceren met je ESP8266 heb je [usb2serial](https://en.wikipedia.org/wiki/Serial_port) drivers nodig voor je besturingssysteem.

De chipset voor NocdeMCUs v3 is meestal CH341, kijk maar eens op de achterkant van je NodeMCU om wat technische informatie te vinden.
Kies de link die overeenkomt met het besturingssysteem van je computer.

## Windows

### Stuurprogramma's voor model V2 (CP2102) voor Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 zou in staat moeten zijn om deze automatisch te downloaden
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bits versie - **niet** ondersteuning voor 64-bits versie OS

### Stuurprogramma voor model V3 (CH340/CH341) voor Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - WWindows 10 zou in staat moeten zijn om deze automatisch te downloaden

### Pak het gedownloade bestand uit voor Windows
* voor V2: Open de map CP210x en dubbelklik op de toepassing CP210xVCPInstaller_x64 (of x86)
* voor V3: open de map CH341SER en dubbelklik op de toepassing SETUP.

---

## MacOS

### MacOS-stuurprogramma's
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

### Pak het gedownloade bestand uit voor MacOS
* voor V2: Unzip de map CP210x en dubbelklik op de toepassing CP210xVCPInstaller_x64 (of x86)
* voor V3: Unzip de map CH341SER en dubbelklik op de toepassing SETUP.
* Start uw Mac opnieuw op

---

## Linux
Er hoeven geen drivers geïnstalleerd te worden. Chip zou rechtstreeks ondersteund moeten worden (controleerbaar met dmesg)

---

## Firmware Flasher NodeMCU
Ondersteuning voor meerdere besturingssystemen: Windows, MacOS en Linux.
* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Verbind NodeMCU met je computer met een korte micro-USB kabel (kies er een korter dan 1 Meter, anders kan de installatie mislukken). Selecteer `latest_en.bin` (of een andere taalversie) en klik op "Upload". Wacht tot het proces klaar is. Nu kunnen we de sensor in elkaar zetten.
<br>

Veel dank gaat uit naar [Piotr, uit Polen](https://dropbox.inf.re/), voor zijn hulp! 🙋‍♂️

---

## Firmware Flasher Teensy
In [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) kun je twee soorten firmware vinden:
* .ino
* .hex

### Teensy Loader
Je kan het .hex bestand in de Teensy boards flashen met de standalone GUI software [Teensy Loader](https://www.pjrc.com/teensy/loader.html) voor Windows, Mac en Linux.
Er bestaat ook een opdrachtregel-versie.

### Teensyduino
Je kunt het .ino bestand in de Teensy boards flashen met de Arduino IDE extensie [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Indien nodig, kunt u de firmware direct in de Arduino IDE wijzigen.