---
title: Depanare
---

### Probleme de transmisie?
Introduceți următoarele în browser cu propriile date:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] poate fi căutat și în câmpul de introducere din colțul din stânga sus [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Este senzorul înregistrat prin [https://devices.sensor.community/register](https://devices.sensor.community/register) și este senzorul vizibil pe hartă?
  * Nivelul semnalului WLAN a fost slab în trecut? 
    * Iată jurnalul de semnal din partea serverului: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`


### Probleme cu cablul USB?
* Verificați alimentarea cu energie electrică: Cablul USB
* Reporniți (deconectați alimentarea, de exemplu, scoateți ștecherul USB)
* Este configurația WLAN OK (senzorul se conectează la WLAN-ul configurat) Dacă nu:
  * senzorul deschide un AP (în primele 2-7 minute după o repornire)?
  * Căutați rețeaua WLAN `airrohr-[ID]`. Răbdare, poate dura 1-2 minute după pornire.
* Verificați pe propriul router dacă senzorul este conectat la rețea, apoi rețineți IP-ul
  * alternativ, utilizați "Discovery" în [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
  * Dacă da: conectați-vă la senzor prin IP cu un browser `http://[ip-de-senzor]/` , ar trebui să apară interfața
  * Dacă nu: ESP-ul are probleme, de exemplu, alimentare insuficientă, buclă de repornire sau altele similare
* Conectați USB la un computer și vizualizați jurnalul
  * Urmăriți textul pe interfața serială cu programul terminal serial (Setări: baud 9600, 8N1)
    * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
    * sunt necesare în continuare drivere usb2serial eventual adecvate, vezi [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Acolo ar trebui să puteți vedea ce face senzorul (mesaje de pornire, conexiune WLAN sau AP, măsurători - doar după 3 minute)

### Probleme de electronică?

* Scoateți componentele electronice ale senzorului din carcasă și observați
* Verificați/înlocuiți din nou sursa de alimentare
  * ESP clipește la scurt timp după repornire?
  * Teensy: LED-ul roșu clipește după repornire?
  * verificați/înlocuiți din nou cablurile către senzori



