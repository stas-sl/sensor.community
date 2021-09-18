---
title: Johdanto
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Noise on beta-versiossa. Lähetä kysymyksiä osoitteeseen
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>



> 🚧 Rakenna DIY-anturi ja tule osaksi maailmanlaajuista, opendata & civictech -verkostoa. DNMS:n (Digital Noise Measuring Sensor) avulla voit mitata melusaastetta itse.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

Tutustu melusensorin alkuperäisiin ohjeisiin ja aiempiin versioihin [Helmut Bitterin Githubissa](https://github.com/hbitter/DNMS/tree/master/Manual).
<br>

Tuo arkisto sisältää erilaisia asetelmia anturin rakentamiseksi erilaisilla levyillä ja piirilevyillä.
<br>

Asetelmia on kahta erilaista:

* asetelma, jossa NodeMCU, jossa on joitain antureita (PM, lämpötila jne.) ja DNMS on erotettu toisistaan. Piirilevyt ovat nimeltään AIRROHR V1.4 ja DNMS - T4 V1.4.
* NodeMCU:n ja DNMS:n yhdistetty versio samalla piirilevyllä: DNMS - T4+NodeMCU V1.4.

Tässä kuvataan vain se vaihtoehto, jossa NODEMCU ja DNMS on erotettu toisistaan. Katso Helmutin Githubista muut vaihtoehdot!  
Tässä tapauksessa NodeMCU:n ja DNMS:n välinen yhteys voi olla jopa 10 metriä pitkä. Tämä on tärkeää, koska DNMS:lle on löydettävä oikea sijainti tarkkojen melumittausten saamiseksi.

## Ostoslista

### Yksittäiset komponentit

* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Muut
  myyjät: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board)
  , [Antratek](https://www.antratek.de/teensy-4-0)
  , [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* erittäin joustavat silikonikaapelit, joiden halkaisija on 0,15 mm² (AWG 26), 6 eri väriä.
  <br>

DNMS (Digital Noise Measuring Sensor) voidaan yhdistää airRohr PM-anturiin:

* [SPS30 fine dust sensor](https://www.sparkfun.com/products/15103). Muut
  myyjät: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1)
  , [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). The
  Tavallinen [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011)
  voidaan myös käyttää.
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V)
  . Muut myyjät: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280)
  , [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB cable e.g.: flat 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Power supply USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cable straps](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Piirilevyt ja sääsuojaus kuvataan jäljempänä.
<br>

🙌  Hienoa, päätit ostaa osat netistä!
Valitettavasti toimitus voi kestää päivistä jopa kolmeen viikkoon.
Siihen asti nauti elämästäsi️.
