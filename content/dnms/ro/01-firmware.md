---
title: Driver & firmware
---

Am pregătit deja firmware-ul. Nu trebuie decât să instalați driverele și să flashati NodeMCU (ESP8266) și Teensy 4.0 plăci.

Pentru a comunica cu ESP8266 aveți nevoie de drivere [usb2serial](https://en.wikipedia.org/wiki/Serial_port) pentru sistemul de operare.

Chipset-ul pentru NocdeMCU v3 este de obicei CH341, verificați doar partea din spate a NodeMCU-ului dvs. pentru a găsi unele informații tehnice.
Alegeți linkul care corespunde sistemului de operare al computerului dvs.

## Windows

### Drivere pentru modelul V2 (CP2102) pentru Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 ar trebui să le poată descărca automat
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versiunea pe 32 de biți - **nu** suportă versiunea pe 64 de biți a sistemului de operare

### Driver pentru modelul V3 (CH340/CH341) pentru Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 ar trebui să poată descărca automat acestea

### Extrageți fișierul descărcat pentru Windows
* pentru V2: Deschideți folderul CP210x și faceți dublu clic pe aplicația CP210xVCPInstaller_x64 (sau x86)
* pentru V3: deschideți folderul CH341SER și faceți dublu clic pe aplicația SETUP.

---

## MacOS

### MacOS Drivere
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

### Extrageți fișierul descărcat pentru MacOS
* pentru V2: Dezarhivați folderul CP210x și faceți dublu clic pe aplicația CP210xVCPInstaller_x64 (sau x86)
* pentru V3: Dezarhivați folderul CH341SER și faceți dublu clic pe aplicația SETUP.
* Reporniți Mac-ul

---

## Linux
Nu este necesară instalarea niciunui driver. Cipul ar trebui să fie suportat direct (verificabil cu dmesg)

---

## Firmware Flasher NodeMCU
Suport pentru mai multe sisteme de operare: Windows, MacOS și Linux.
* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Conectați NodeMCU la computer cu un cablu micro-USB scurt (alegeți unul mai scurt de 1 metru, altfel instalarea poate eșua). Selectați `latest_en.bin` (sau o altă versiune lingvistică) și faceți clic pe "Upload".
Așteptați până când procesul se încheie. Acum putem asambla senzorul.
<br>

Îi mulțumim mult lui [Piotr, din Polonia](https://dropbox.inf.re/), pentru ajutor! 🙋♂️

---

## Firmware Flasher Teensy
În [Github-ul lui Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Firmware) puteți găsi două tipuri de firmware:
* .ino
* .hex

### Teensy Loader
Poți să flashhezi fișierul .hex în plăcile Teensy cu software-ul independent GUI [Teensy Loader](https://www.pjrc.com/teensy/loader.html) pentru Windows, Mac și Linux.
Există și o versiune în linie de comandă.

### Teensyduino
Puteți introduce fișierul .ino în plăcile Teensy cu extensia Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Dacă este necesar, puteți modifica firmware-ul direct în Arduino IDE.