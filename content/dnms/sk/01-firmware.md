---
title: Driver & firmware
---

Firmvér sme už pripravili. Musíte len nainštalovať ovládače a flashnúť NodeMCU (ESP8266) a Teensy 4.0 dosky.

Na komunikáciu s vaším ESP8266 potrebujete ovládače [usb2serial](https://en.wikipedia.org/wiki/Serial_port) pre váš operačný systém.

Čipová súprava pre NodeMCU v3 je zvyčajne CH341, stačí sa pozrieť na zadnú stranu vašej NodeMCU a nájsť nejaké technické informácie. Vyberte odkaz, ktorý zodpovedá operačnému systému vášho počítača.


## Windows

### Ovládače pre model V2 (CP2102) pre systém Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - systém Windows 10 by ich mal byť schopný automaticky stiahnuť
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitová verzia - **nepodporuje** 64-bitovú verziu OS

### Ovládač pre model V3 (CH340/CH341) pre Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - systém Windows 10 by ich mal byť schopný automaticky stiahnuť

### Rozbaľte stiahnutý súbor pre systém Windows
* pre V2: Otvorte priečinok CP210x a dvakrát kliknite na aplikáciu CP210xVCPInstaller_x64 (alebo x86)
* pre V3: otvorte priečinok CH341SER a dvakrát kliknite na aplikáciu SETUP.

---

## MacOS

### Ovládače pre MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

### Rozbaľte stiahnutý súbor pre MacOS
* pre V2: Rozbaľte priečinok CP210x a dvakrát kliknite na aplikáciu CP210xVCPInstaller_x64 (alebo x86)
* pre V3: Rozbaľte priečinok CH341SER a dvakrát kliknite na aplikáciu SETUP.
* Reštartujte Mac

---

## Linux
Nie je potrebné inštalovať žiadne ovládače. Čip by mal byť podporovaný priamo (overiteľné pomocou dmesg)

---

## Firmware Flasher NodeMCU
Podpora viacerých operačných systémov: Windows, MacOS a Linux.
* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Zdrojový kód](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Pripojte jednotku NodeMCU k počítaču pomocou krátkeho kábla micro-USB (vyberte kratší ako 1 meter, inak môže inštalácia zlyhať). Vyberte súbor `latest_en.bin` (alebo inú jazykovú verziu) a kliknite na tlačidlo "Upload". Počkajte, kým sa proces ukončí. Teraz môžeme snímač zostaviť.
<br>

Veľká vďaka patrí [Piotrovi, z Poľska](https://dropbox.inf.re/), za jeho pomoc! 🙋‍♂️

---

## Firmware Flasher Teensy
Na [Githube Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Firmware) nájdete dva druhy firmvéru:
* .ino
* .hex

### Teensy Loader
Súbor .hex môžete flashovať do dosiek Teensy pomocou samostatného softvéru s grafickým rozhraním [Teensy Loader](https://www.pjrc.com/teensy/loader.html) pre Windows, Mac a Linux. Existuje aj verzia pre príkazový riadok.

### Teensyduino
Súbor .ino môžete flashovať v doskách Teensy s príponou Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
V prípade potreby môžete firmvér upraviť priamo v prostredí Arduino IDE.