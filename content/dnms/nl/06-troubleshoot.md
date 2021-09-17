---
title: Problemen oplossen
---

### Problemen met de transmissie?
Voer het volgende in de browser in met uw eigen gegevens:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

De [ID] kan ook worden opgezocht in het invoerveld linksboven [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Is de sensor geregistreerd via [https://devices.sensor.community/register](https://devices.sensor.community/register) en is de sensor zichtbaar op de kaart?
  * Was het WLAN signaal niveau zwak in het verleden? Hier is het signaal log server-side: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### USB kabel problemen?
* Controleer de stroomvoorziening: USB kabel
* Herstart (stroomtoevoer verbreken, b.v. USB stekker eruit trekken)
* Is de WLAN Config OK (de sensor maakt verbinding met het geconfigureerde WLAN) Zo niet:
  * opent de sensor een AP (in de eerste 2-7 minuten na een reboot)?
  * Zoek naar `airrohr-[ID]` WLAN netwerk. Geduld, het kan 1-2 minuten duren na het opstarten.
* Controleer op je eigen router of de sensor is aangemeld op het netwerk, onthoud dan het IP
  * gebruik anders "Discovery" in de [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
  * Zo ja: maak verbinding met de sensor via IP met een browser `http://[ip-van-de-sensor]/` , de interface zou moeten verschijnen
  * Zo nee: de ESP heeft problemen, bijv. onvoldoende stroomvoorziening, reboot loop of iets dergelijks
* Sluit USB aan op een computer en bekijk het log
  * Volg tekst op seriële interface met serieel terminalprogramma (Instellingen: baud 9600, 8N1)
    * Linux: scherm, minicom, cutecom; Windows: Tera Term; MacOS: scherm, minicom, ...
    * eventueel zijn nog geschikte usb2serial drivers nodig, zie [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * daar zou je moeten kunnen zien wat de sensor aan het doen is (opstartberichten, WLAN verbinding of AP, meting - pas na 3 minuten)

### Elektronica problemen?

* Verwijder de sensorelektronica uit de behuizing en observeer
* Voeding opnieuw controleren/vervangen
  * Knippert ESP kort na herstart?
  * Teensy: rode LED knippert na herstart?
  * controleer/vervang de kabels naar de sensoren opnieuw


