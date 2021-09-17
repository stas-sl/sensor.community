---
title: Configurați
---

<div class="relative bg-brand-yellowLight">
  <div class="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-4">
    <div class="pr-16 sm:text-center sm:px-16 ">
        <p class="text-brand-black">
          Zgomotul este în versiune beta. Trimiteți întrebări la
            <span aria-hidden="true">&rarr;</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="mailto:Noise@Sensor.Community" class="text-white font-bold underline"> Noise@Sensor.Community</a>
        </span>
        </p>
    </div>
  </div>
</div>

### Obțineți ID-ul

1. Conectați stația cu un cablu USB pentru a alimenta senzorul
2. Stația încearcă să se conecteze la punctul de acces WiFi configurat. Dacă acest lucru nu funcționează, senzorul deschide o fereastră de acces
   punct de acces cu numele `Particulate Matter ID` , `Feinstaubsensor-ID` sau `airRohr-ID`. ID-ul este **ChipID** (pentru
   exemplu 13597771). **Vă rugăm să notați acest număr, deoarece aveți nevoie de el pentru înregistrare**.
3. Conectați-vă la punctul de acces creat. Așteptați până când se stabilește conexiunea.<br>*Android*: În cazul în care conexiunea
   se deconectează imediat, este posibil să trebuiască să dezactivați opțiunea "Smart network switch" (Comutare inteligentă a rețelei) din "Connections -> WiFi -> WiFi ->
   Advanced'
4. Deschideți browserul și tastați [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Atenție** Este posibil să dureze câteva încercări pentru ca NodeMCU să se conecteze la rețeaua WiFi de acasă. Vă rugăm să nu vă impacientați și să încercați până când funcționează. Senzorul poate fi configurat și prin intermediul unui smartphone. În cazul în care configurarea senzorului a funcționat, pagina de configurare nu mai este accesibilă sub acest IP 192.168.4.1

#### Configurați stația
1. La "Configure" (Configurare) introduceți SSID (numele rețelei WiFi de acasă), cheia de securitate a rețelei (în Windows) sau parola WiFi.
2. Pentru senzorii de zgomot (DNMS) în conformitate cu acest manual, nu sunt necesare alte modificări
3. După ce apăsați Salvare, senzorul se va reporni și nu mai este accesibil în acest mod atunci când se conectează la WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Testați stația
Dacă nu au fost făcute alte modificări decât introducerea datelor rețelei WiFi, senzorul poate fi "testat" pe paginile următoare după aproximativ 10 minute. Pe aceste pagini trebuie să căutați ChipID (în exemplul de mai sus 13597771).

* [Date senzoriale](www.madavi.de/sensor/graph.php)
* [Semnal WLAN](www.madavi.de/sensor/signal.php) 
        


 
