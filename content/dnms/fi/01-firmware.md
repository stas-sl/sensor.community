---
title: Ajuri & laiteohjelma: Driver & firmware: Driver & firmware
---

Olemme jo valmistelleet laiteohjelmiston. Sinun tarvitsee vain asentaa ajurit ja flashata NodeMCU (ESP8266) ja Teensy 4.0 -levyt.

Kommunikoidaksesi ESP8266:n kanssa tarvitset [usb2serial](https://en.wikipedia.org/wiki/Serial_port) -ajurit ESP8266:lle.
käyttöjärjestelmää varten.

Piirisarja NocdeMCUs v3 on yleensä CH341, tarkista vain NodeMCU:n takaa löytääksesi teknisiä tietoja.
Valitse linkki, joka vastaa tietokoneesi käyttöjärjestelmää.

## Windows

### Ohjaimet mallille V2 (CP2102) Windowsille
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10:n pitäisi pystyä lataamaan nämä automaattisesti.
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bittinen versio - **ei** tue 64-bittistä käyttöjärjestelmäversiota.

### Ohjain mallille V3 (CH340/CH341) Windowsille
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10:n pitäisi pystyä lataamaan nämä automaattisesti.

### Pura ladattu tiedosto Windowsille
* V2:lle: Avaa kansio CP210x ja kaksoisnapsauta sovellusta CP210xVCPInstaller_x64 (tai x86).
* V3: avaa kansio CH341SER ja kaksoisnapsauta sovellusta SETUP.

---

## MacOS

### MacOS-ajurit
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

### Pura ladattu tiedosto MacOS-käyttöjärjestelmää varten.
* V2:n osalta: Pura kansio CP210x ja kaksoisnapsauta sovellusta CP210xVCPInstaller_x64 (tai x86).
* V3: Pura kansio CH341SER ja kaksoisnapsauta sovellusta SETUP.
* Käynnistä Mac uudelleen

---

## Linux
Ajureita ei tarvitse asentaa. Piirin pitäisi olla suoraan tuettu (todennettavissa dmesg:llä).

---

## Laiteohjelmisto Flasher NodeMCU
Tuki useille käyttöjärjestelmille: Windows, MacOS ja Linux.
* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Lähdekoodi](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Liitä NodeMCU tietokoneeseen lyhyellä micro-USB-kaapelilla (valitse lyhyempi kuin 1 metri, muuten asennus voi epäonnistua). Valitse `latest_en.bin` (tai jokin muu kieliversio) ja napsauta "Upload".
Odota, kunnes prosessi on valmis. Nyt voimme koota anturin.
<br>

Suuret kiitokset [Piotrille, Puolasta](https://dropbox.inf.re/), hänen avusta! 🙋♂️

---

## Firmware Flasher Teensy
[Helmut Bitterin Githubista](https://github.com/hbitter/DNMS/tree/master/Firmware) löytyy kahdenlaista firmwarea:
* .ino
* .hex

### Teensy Loader
Voit flashata .hex-tiedoston Teensy-levyihin erillisellä GUI-ohjelmistolla [Teensy Loader](https://www.pjrc.com/teensy/loader.html) Windowsille, Macille ja Linuxille.
Myös komentoriviversio on olemassa.

### Teensyduino
Voit flashata .ino-tiedoston Teensy-levyihin Arduino IDE -laajennuksella [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Tarvittaessa voit muokata laiteohjelmistoa suoraan Arduino IDE:ssä.