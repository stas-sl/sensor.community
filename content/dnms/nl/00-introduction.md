---
title: Inleiding
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Ruis is in beta. Stuur vragen naar
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>



> 🚧 Bouw je eigen DIY sensor en maak deel uit van het wereldwijde, opendata & civictech netwerk. Met DNMS (Digitale Geluids Meet Sensor) kunt u zelf geluidsoverlast meten.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

Bekijk de oorspronkelijke instructies en eerdere versies van de geluidssensor op [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).
<br>

Die repository bevat verschillende opstellingen te bouwen van de sensor met verschillende soorten board en PCBs.
<br>

Er zijn twee verschillende soorten opstellingen:

* een opstelling waar de NodeMCU met sommige sensoren (PM, temperatuur enz.) en de DNMS zijn gescheiden. De PCBs heten AIRROHR V1.4 en DNMS - T4 V1.4
* een gecombineerde versie van de NodeMCU en DNMS op dezelfde PCB: DNMS - T4+NodeMCU V1.4

Alleen de variant waarbij de NODEMCU en DNMS gescheiden zijn wordt hier beschreven. Kijk eens op Helmut's Github voor de andere varianten!
In dit geval kan de verbinding tussen de NodeMCU en de DNMS maar liefst 10m lang zijn. Dit is belangrijk omdat je de juiste positie voor de DNMS te vinden om nauwkeurige geluidsmetingen te verkrijgen.

## Boodschappenlijstje

### Enkelvoudige componenten

* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Andere
  verkopers: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board)
  , [Antratek](https://www.antratek.de/teensy-4-0)
  , [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra flexibele siliconen kabels met een diameter van 0,15mm² (AWG 26) in 6 verschillende kleuren
  <br>

De DNMS (Digitale Ruis Meet Sensor) kan gecombineerd worden met een airRohr PM-Sensor:

* [SPS30 fine dust sensor](https://www.sparkfun.com/products/15103). Andere
  verkopers: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1)
  , [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). De gebruikelijke [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011)
  kan ook worden gebruikt.
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Andere verkopers: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280)
  , [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB cable e.g.: flat 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Power supply USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cable straps](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

De printplaten en de bescherming tegen weersinvloeden worden hieronder beschreven.
<br>

🙌 Geweldig, u heeft besloten om de onderdelen online te kopen!
Helaas kan de levering van dagen tot drie weken duren.
Tot dan geniet van je leven️.
