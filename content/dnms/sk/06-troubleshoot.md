---
title: Odstraňovanie problémov
---

### Problémy s vysielaním?
Do prehliadača zadajte nasledujúce údaje:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] môžete vyhľadať aj vo vstupnom poli v ľavom hornom rohu [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Je snímač zaregistrovaný prostredníctvom [https://devices.sensor.community/register](https://devices.sensor.community/register) a je snímač viditeľný na mape?
  * Bola úroveň signálu siete WLAN v minulosti slabá? Tu je protokol signálu na strane servera:  `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
  
### Problémy s káblom USB?
* Skontrolujte napájanie: Kábel USB
* Reštartujte počítač (odpojte napájanie, napr. vytiahnite zástrčku USB)
* Je konfigurácia siete WLAN v poriadku (snímač sa pripojí ku konfigurovanej sieti WLAN) Ak nie:
  * Otvorí snímač prístupový bod (v prvých 2-7 minútach po reštarte)?
  * Vyhľadajte sieť WLAN `airrohr-[ID]`. Trpezlivosť, môže to trvať 1-2 minúty po štarte systému.
* Skontrolujte na vlastnom smerovači, či je snímač prihlásený do siete, potom si zapamätajte IP
  * prípadne použite "Discovery" v nástroji [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
  * Ak áno: pripojte sa k snímaču cez IP pomocou prehliadača `http://[ip-snímača]/` , malo by sa zobraziť rozhranie
  * Ak nie: ESP má problémy, napr. nedostatočné napájanie, reštartovacia slučka alebo podobne
* Pripojte USB k počítaču a zobrazte protokol
  * Sledujte text na sériovom rozhraní pomocou programu sériového terminálu (nastavenia: baud 9600, 8N1)
    * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
    * prípadne sú ešte potrebné vhodné ovládače usb2serial, pozri [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Tam by ste mali mať možnosť vidieť, čo senzor robí (štartovacie správy, pripojenie WLAN alebo AP, meranie - až po 3 minútach)

### Problémy s elektronikou?

* Vyberte elektroniku snímača z puzdra a pozorujte ju
* Skontrolujte/vymeňte znova napájací zdroj
  * Bliká ESP krátko po reštarte?
  * Teensy: bliká červená LED po reštarte?
  * znovu skontrolujte/vymeňte káble k snímačom



