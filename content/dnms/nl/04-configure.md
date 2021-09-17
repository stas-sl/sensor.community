---
title: Configureer
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Ruis is in beta. Stuur vragen naar
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>

### Krijg de ID

1. Sluit het station aan met een USB-kabel om de sensor van stroom te voorzien

2. Het station probeert verbinding te maken met het geconfigureerde WiFi-toegangspunt. Als dit niet lukt, opent de sensor een toegangspunt met de naam `Particulate Matter ID` , `Feinstaubsensor-ID` of `airRohr-ID`. De ID is de **ChipID** (bijvoorbeeld voorbeeld 13597771). **Noteer dat nummer, want u heeft het nodig voor de registratie**

3. Maak verbinding met het aangemaakte toegangspunt. Wacht tot de verbinding tot stand is gebracht.<br>*Android*: Als de verbinding  onmiddellijk verbreekt, moet u misschien de optie 'Slimme netwerkswitch' onder 'Verbindingen -> WiFi ->  Geavanceerd'

4. Open uw browser en typ in [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Let op** Het kan een paar pogingen duren voordat de NodeMCU verbinding maakt met het WiFi-thuisnetwerk. Wordt alstublieft niet ongeduldig en probeer tot het werkt. De sensor kan ook worden geconfigureerd via een smartphone. Als de configuratie van de sensor is gelukt, is de configuratiepagina niet meer toegankelijk onder dit IP 192.168.4.1

#### Configureer het station
1. Voer onder 'Configureren' de SSID (naam van uw WiFi-thuisnetwerk), de netwerkbeveiligingssleutel (onder Windows) of het WiFi-wachtwoord in.

2. Voor geluidssensoren (DNMS) volgens deze handleiding zijn geen verdere wijzigingen nodig

3. Nadat u op save heeft geklikt, zal de sensor opnieuw opstarten en is niet meer op deze manier bereikbaar als hij verbinding maakt met het WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Test het station
Als er geen veranderingen zijn aangebracht, behalve het invoeren van de WiFi netwerkgegevens, kan de sensor na ongeveer 10 minuten worden 'getest' op de volgende pagina's. Op deze pagina's moet je zoeken naar de ChipID (in het voorbeeld hierboven de 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
