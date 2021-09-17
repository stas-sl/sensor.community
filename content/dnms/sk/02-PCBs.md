---
title: PCB a schémy zapojenia
---

Najlepší spôsob, ako zostaviť DNMS, je použiť jednu z našich dosiek plošných spojov. V súčasnosti existuje pomerne veľa výrobcov PCB, ktorí dokážu vyrobiť dosiek plošných spojov za pár dolárov bez minimálneho množstva. Napríklad [JLCPCB](https:/jlcpcb.com/). Stačí si stiahnuť náš schémy obvodov a/alebo súbory Gerber nižšie, nahrajte ich na webovú stránku výrobcu a objednajte si dosky plošných spojov.
<br>

Posledné verzie dosiek plošných spojov sú opísané tu. Pozri [Github Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/PCBs), kde nájdete ďalšie informácie a prístup k KiCad súbory.

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
DPS pre CPU/WLAN NodeMCU ESP8266 s rozšírením zbernice I2C na pripojenie DNMS, ako aj ďalších snímačov (SDS011, BME280...).

* [Schéma zapojenia PDF](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [Gerber súbor zip na nahratie na webovú stránku výrobcu PCB](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>
DPS pre DNMS Teensy 4.0, ktorú možno pripojiť priamo na NodeMCU ESP8266 alebo na vyššie uvedenú DPS AIRROHR.

* [Schéma zapojenia PDF](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [Gerber súbor zip na nahratie na webovú stránku výrobcu PCB](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)

