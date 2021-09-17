---
title: Úvod
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Hluk je v beta verzii. Otázky posielajte na adresu
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>



> 🚧 Zostavte si svoj DIY senzor a staňte sa súčasťou celosvetovej siete opendata & civictech. Pomocou DNMS (digitálny senzor na meranie hluku) môžete sami merať hlukové znečistenie.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

Pozrite si pôvodný návod a predchádzajúce verzie senzora hluku na [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).
<br>

Toto úložisko obsahuje rôzne nastavenia na zostavenie snímača s rôznymi druhmi dosiek a PCB.
<br>

Existujú dva rôzne druhy nastavení:

* zostava, v ktorej je oddelená jednotka NodeMCU s niektorými snímačmi (PM, teplota atď.) a DNMS. DPS sa nazývajú AIRROHR V1.4 a DNMS - T4 V1.4
* kombinovaná verzia NodeMCU a DNMS na tej istej doske plošných spojov: DNMS - T4+NodeMCU V1.4

Tu je opísaný len variant, v ktorom sú NODEMCU a DNMS oddelené. Pozrite sa na Helmutov Github, kde nájdete ostatné varianty!
V tomto prípade môže byť spojenie medzi NodeMCU a DNMS dlhé až 10 m. Je to dôležité, pretože potrebujete nájsť správnu polohu pre DNMS, aby ste získali presné merania šumu.

## Nákupný zoznam

### Jednotlivé komponenty

* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Ďalší predajcovia: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board)
  , [Antratek](https://www.antratek.de/teensy-4-0)
  , [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra flexibilné silikónové káble s priemerom 0,15 mm² (AWG 26) v 6 rôznych farbách
  <br>

DNMS (digitálny senzor na meranie hluku) je možné kombinovať so senzorom PM airRohr:

* [SPS30 fine dust sensor](https://www.sparkfun.com/products/15103). Ďalší predajcovia: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1)
  , [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). The
  usual [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011)
  možno použiť aj tento snímač.
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V)
  . Ďalší predajcovia: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280)
  , [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB cable e.g.: flat 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Power supply USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cable straps](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

DPS a ochrana proti poveternostným vplyvom budú opísané nižšie.
<br>

🙌 Skvelé, rozhodli ste sa kúpiť súčiastky online!
Bohužiaľ, dodanie môže trvať od niekoľkých dní až po tri týždne.
Dovtedy si užívajte život️.

