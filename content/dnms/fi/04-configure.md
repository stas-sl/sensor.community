---
title: Määritä
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

### Get the ID

1. Kytke asema USB-kaapelilla anturin virran kytkemiseksi.
2. Asema yrittää muodostaa yhteyden määritettyyn WiFi-yhteyspisteeseen. Jos tämä ei onnistu, tunnistin avaa yhteyshenkilön pisteen nimellä `Particulate Matter ID` , `Feinstaubsensor-ID` tai `airRohr-ID`. Tunnus on **ChipID** (kun kyseessä on esimerkiksi 13597771). **Kirjoita tämä numero muistiin, sillä tarvitset sitä rekisteröintiä varten**.
3. Muodosta yhteys luotuun yhteyspisteeseen. Odota, kunnes yhteys on muodostettu.<br>*Android*: Jos yhteys yhteys katkeaa välittömästi, sinun on ehkä poistettava vaihtoehto 'Älykäs verkonvaihto' käytöstä kohdassa 'Yhteydet -> WiFi ->'. Lisäasetukset'
4. Avaa selain ja kirjoita [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Huomaa** Saattaa kestää muutaman yrityksen, ennen kuin NodeMCU muodostaa yhteyden kodin WiFi-verkkoon. Älä ole kärsimätön ja yritä, kunnes se toimii. Anturi voidaan konfiguroida myös älypuhelimen kautta. Jos anturin konfigurointi on toiminut, konfigurointisivu ei ole enää käytettävissä tällä IP-osoitteella 192.168.4.1

#### Aseman konfigurointi
1. Kirjoita kohtaan "Configure" SSID (kodin WiFi-verkon nimi), verkon suojausavain (Windowsissa) tai WiFi-salasana.
2. Tämän käyttöohjeen mukaisille meluantureille (DNMS) ei tarvita muita muutoksia
3. Tallennuksen painamisen jälkeen anturi käynnistyy uudelleen, eikä siihen pääse enää tällä tavoin käsiksi, kun se muodostaa yhteyden WLANiin.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Testaa asema
Jos mitään muita muutoksia ei ole tehty kuin WLAN-verkon tietojen syöttäminen, anturi voidaan "testata" seuraavilla sivuilla noin 10 minuutin kuluttua. Näillä sivuilla on haettava ChipID (yllä olevassa esimerkissä 13597771).

 * [Anturitiedot](www.madavi.de/sensor/graph.php) 
 * [WLAN-signaali](www.madavi.de/sensor/signal.php) 
        


 
