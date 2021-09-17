---
title: PCBs en schakelschema's
---

De beste manier om de DNMS te bouwen is door een van onze PCBs te gebruiken. Er zijn inmiddels aardig wat printplaatfabrikanten die
printplaten kunnen maken voor een paar dollar zonder minimum hoeveelheden. Bijvoorbeeld [JLCPCB](https:/jlcpcb.com/). Download gewoon onze
schakelschema's en/of Gerber-bestanden hieronder, upload ze naar de website van de fabrikant en bestel uw printplaten.
<br>

De laatste versies van de printplaten worden hier beschreven. Verwijzen
naar [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/PCBs) voor verdere informatie en om toegang te krijgen tot de KiCad bestanden.

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
PCB voor de NodeMCU ESP8266 CPU/WLAN met een I2C Bus uitbreiding om de DNMS op aan te sluiten alsook andere sensoren (SDS011, BME280...).

* [Schakelschema PDF](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [Gerber zip-bestand te uploaden naar de PCB fabrikant website](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>
PCB voor de DNMS Teensy 4.0 die rechtstreeks op een NodeMCU ESP8266 kan worden aangesloten of op de AIRROHR PCB hierboven.

* [Schakelschema PDF](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [Gerber zip bestand om te uploaden naar de website van de PCB fabrikant](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)

