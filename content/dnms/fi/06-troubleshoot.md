---
title: Vianmääritys
---

### Lähetysongelmia?
Kirjoita selaimeen seuraavat tiedot omilla tiedoillasi:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] voidaan hakea myös vasemmassa yläkulmassa olevasta syöttökentästä  [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Onko anturi rekisteröity [https://devices.sensor.community/register](https://devices.sensor.community/register) kautta ja näkyykö anturi kartalla?
    * Oliko WLAN-signaalin taso aiemmin heikko?
      Tässä on signaaliloki palvelimen puolella: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        


### USB-kaapeliongelmia?
* Tarkista virtalähde: USB-kaapeli
* Käynnistä uudelleen (katkaise virransyöttö, esim. vedä USB-pistoke irti).
* Onko WLAN-konfiguraatio OK (anturi muodostaa yhteyden konfiguroituun WLANiin) Jos ei:
    * avaako tunnistin AP:n (ensimmäisten 2-7 minuutin aikana uudelleenkäynnistyksen jälkeen)?
    * Etsi `airrohr-[ID]` WLAN-verkko. Kärsivällisyyttä, se voi kestää 1-2 minuuttia käynnistyksen jälkeen.
* Tarkista omasta reitittimestäsi, onko anturi kirjautunut verkkoon, muista sitten IP:n
    * Vaihtoehtoisesti käytä [flashtoolin] (https://github.com/opendata-stuttgart/airrohr-firmware-flasher//) "Discovery" -ohjelmaa.
    * Jos kyllä: muodosta yhteys anturiin IP:n kautta selaimella `http://[ip-of-the-sensor]/` , käyttöliittymän pitäisi näkyä.
    * Jos ei: ESP:ssä on ongelmia, esim. virransyöttö on riittämätön, uudelleenkäynnistyssilmukka tai vastaavaa.
* Kytke USB-portti tietokoneeseen ja tarkastele lokia.
    * Seuraa tekstiä sarjaliitännästä sarjapääteohjelmalla (asetukset: baud 9600, 8N1).
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * Tarvitaan vielä mahdollisesti sopivia usb2serial-ajureita, katso [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
    * Sieltä pitäisi näkyä, mitä anturi tekee (käynnistysviestit, WLAN-yhteys tai AP, mittaus - vasta 3 minuutin kuluttua).
    

### Elektroniikkaongelmia?

* Poista anturin elektroniikka kotelosta ja tarkkaile
* Tarkista/vaihda virtalähde uudelleen
    * Vilkkuu ESP pian uudelleenkäynnistyksen jälkeen?
    * Teensy: punainen LED vilkkuu uudelleenkäynnistyksen jälkeen?
    * Tarkista/vaihda antureiden kaapelit uudelleen.



