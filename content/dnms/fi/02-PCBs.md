---
title: Piirilevyt ja piirikaaviot
---

Paras tapa rakentaa DNMS on käyttää yhtä piirilevyistämme. Nyt on olemassa melko paljon piirilevyjen valmistajia, jotka voivat valmistaa piirilevyjä muutamalla dollarilla ilman vähimmäismääriä. Esimerkiksi [JLCPCB](https:/jlcpcb.com/). Lataa vain piirikaaviomme ja/tai Gerber-tiedostomme alla, lataa ne valmistajan verkkosivustolle ja tilaa piirilevyt.
<br>

Piirilevyjen viimeiset versiot on kuvattu tässä. Katso [Helmut Bitterin Github](https://github.com/hbitter/DNMS/tree/master/PCBs) lisätietoja ja KiCad-tiedostojen käyttöä varten.

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
Piirilevy NodeMCU ESP8266 CPU / WLAN, jossa on I2C-väylän laajennus DNMS: n ja muiden antureiden (SDS011, BME280...) liittämiseksi.

* [Piirikaavio PDF](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [Gerber zip-tiedosto ladattavaksi piirilevyvalmistajan verkkosivustolle](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>
Piirilevy DNMS Teensy 4.0: lle, joka voidaan liittää suoraan NodeMCU ESP8266: hen tai edellä mainittuun AIRROHR-piirilevyyn.

* [Piirikaavio PDF](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [Gerber zip-tiedosto ladattavaksi piirilevyvalmistajan verkkosivustolle](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)

