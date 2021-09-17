---
title: Introducere
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Zgomotul este în versiune beta. Trimiteți întrebări la
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>


> 🚧 Construiește-ți senzorul DIY și fă parte din rețeaua mondială, opendata & civictech. Cu DNMS (Digital Noise Measuring Sensor) puteți măsura singur poluarea fonică.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

Consultați instrucțiunile originale și versiunile anterioare ale senzorului de zgomot pe [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).
<br>

Acel depozit conține diferite configurații pentru a construi senzorul cu diferite tipuri de plăci și PCB-uri.
<br>

Există două tipuri diferite de configurații:

* o configurație în care NodeMCU cu unii senzori (PM, temperatură etc.) și DNMS sunt separate. PCB-urile se numesc AIRROHR V1.4 și DNMS - T4 V1.4
* o versiune combinată a NodeMCU și DNMS pe același PCB: DNMS - T4+NodeMCU V1.4

Aici este descrisă doar varianta în care NODEMCU și DNMS sunt separate. Aruncați o privire pe Github-ul lui Helmut pentru a găsi versiunea celelalte variante!
În acest caz, conexiunea dintre NodeMCU și DNMS poate avea o lungime de până la 10 m. Acest lucru este important deoarece aveți nevoie de să găsiți poziția corectă pentru DNMS pentru a obține măsurători precise ale zgomotului.

## Lista de cumpărături

### Componente unice

* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Alte vânzători: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board)
  , [Antratek](https://www.antratek.de/teensy-4-0)
  , [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* cabluri ultra flexibile din silicon cu un diametru de 0,15mm² (AWG 26) în 6 culori diferite
  <br>

Senzorul DNMS (Digital Noise Measuring Sensor) poate fi combinat cu un senzor PM-Sensor airRohr:

* [SPS30 fine dust sensor](https://www.sparkfun.com/products/15103). Alte vânzători: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1)
  , [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). The
  usual [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011)
  poate fi de asemenea utilizat.
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V)
  . Alte vânzători: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280)
  , [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB cable e.g.: flat 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Power supply USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cable straps](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

PCB-urile și protecția împotriva intemperiilor vor fi descrise mai jos.
<br>

🙌 Minunat, ați decis să cumpărați piesele online!
Din păcate, livrarea poate dura de la câteva zile până la trei săptămâni.
Până atunci bucurați-vă de viață️.
