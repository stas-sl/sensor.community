---
title: Konfigurácia
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Šum je v beta verzii. Otázky posielajte na adresu
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>

### Získajte ID

1. Pripojte stanicu pomocou kábla USB, aby sa senzor napájal
2. Stanica sa pokúsi pripojiť ku konfigurovanému prístupovému bodu WiFi. Ak sa to nepodarí, senzor otvorí prístupový  bod s názvom `Particulate Matter ID` , `Feinstaubsensor-ID` alebo `airRohr-ID`. ID je **ChipID** (pre napríklad 13597771). **Poznamenajte si toto číslo, pretože ho potrebujete na registráciu**.
3. Pripojte sa k vytvorenému prístupovému bodu. Počkajte, kým sa vytvorí spojenie.<br>*Android*: Ak sa spojenie sa okamžite odpojí, možno budete musieť deaktivovať možnosť "Inteligentné prepínanie siete" v časti "Pripojenia -> WiFi -> Rozšírené".
4. Otvorte prehliadač a zadajte [http://192.168.4.1/](http://192.168.4.1/).


> ⚠️ **Upozornenie** Môže trvať niekoľko pokusov, kým sa zariadenie NodeMCU pripojí k domácej sieti WiFi. Nebuďte netrpezliví a skúšajte, kým sa to nepodarí. Snímač je možné konfigurovať aj prostredníctvom smartfónu. Ak konfigurácia snímača fungovala, stránka konfigurácie už nie je prístupná pod touto IP 192.168.4.1

#### Konfigurácia stanice
1. V časti "Configure" (Konfigurácia) zadajte SSID (názov domácej siete WiFi), bezpečnostný kľúč siete (v systéme Windows) alebo heslo WiFi.
2. V prípade snímačov hluku (DNMS) podľa tohto návodu nie sú potrebné žiadne ďalšie zmeny.
3. Po stlačení tlačidla Save (Uložiť) sa snímač reštartuje a po pripojení k sieti WLAN už nie je týmto spôsobom prístupný.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Otestujte stanicu
Ak neboli vykonané žiadne iné zmeny okrem zadania údajov siete WiFi, snímač môžete približne po 10 minútach "otestovať" na nasledujúcich stránkach. Na týchto stránkach musíte vyhľadať identifikátor čipu (v uvedenom príklade 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [Signál WLAN](www.madavi.de/sensor/signal.php) 
        


 
