---
title: Asamblează
---
> ⚠️ NOTĂ IMPORTANTĂ <br> Înainte de asamblare instalați firmware-ul! Consultați secțiunea de instalare a firmware-ului.

## Unitatea de microfon

Unitatea de microfon se bazează pe o placă de descompunere Pesky Products cu un microfon MEMS ICS-43434. Puteți găsi o astfel de placă pe [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).
<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

### Carcasa pentru unitatea de microfon

Carcasa este realizată cu un tub de polistiren de 12,7 mm (0,500"). Acest diametru permite conectarea directă a celor mai multe dintre calibratoare pe unitate.

Prototipul a fost dezvoltat cu [tubulatura Evergreen nr. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Placa de conectare trebuie adaptată la diametrul tubului cu ajutorul unui fișier. Folosiți niște bandă adezivă pentru a proteja intrarea microfonului.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Apoi lipiți cele șase cabluri de silicon. Rețineți cu ce pin este conectat cablul!
<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Tăiați o bucată de tub de 115 mm lungime.
<br>
Lipiți placa microfonului pe niște bandă încrucișată. Puneți cablurile în tubulatură și fixați placa la extremitatea tubulaturii.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Strângeți extremitatea tubului cu ajutorul benzii.
<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" loading="lazy"/>

Acum puteți umple tubul cu puțină rășină. Acest pas este obligatoriu pentru a evita rezonanța și a obține date calibrate și reproductibile.
Prototipul a fost dezvoltat cu niște [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produsă de Copaltec GmbH.

#### Specificații
* Rezistență dielectrică: 28 kV/mm
* Rezistența specifică de înaintare: 5,8.1014 ohm/cm
* Rezistența de suprafață: 1,3.1016 ohm
* Raport de amestecare rășină/durtizor: 2 : 1
* Timp de preparare: 20 la 30 min.
* Timp de întărire: 16 à 30 h
* Stare finală de întărire: 10 à 14 zile
* Vâscozitate (amestec): 500 la 600 mPa.s
* Duritate Shore: D 50 până la 55 (ISO 868, DIN 53505)
* Conductivitate termică: 0,3 W/mK
* Temperaturi de aplicare: - 20 până la +130 °C

Ar trebui să funcționeze și [rășina poliuretanică UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) produsă de Electrolube. Pentru fiecare tubulatură ar trebui să fie suficiente 15 g de rășină.
<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Când rășina s-a întărit, îndepărtați banda. Unitatea dvs. de microfon este gata.

## DNMS Carcasa
Atunci când Teensy (DNMS) și NodeMCU (independent sau pe PCB) sunt separate: DNMS și airRohr. Aveți nevoie de o bucată de tub cu diametrul de 25 mm (de exemplu, tubulatură pentru aplicații electrice), un conector, un arc de 90° și un presetupe M25 IP68.
Tubul în sine trebuie să aibă o lungime de 160 mm. DNMS arată locul în. Carcasa microfonului este menținută de presetupa de cablu.
Arcul împiedică intrarea apei și a umidității în carcasă, lăsând în același timp să treacă cablul.
<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS este conectat la cel de-al doilea PCB printr-un cablu RJ12. Dacă acest cablu este mai lung de 250 mm, trebuie să utilizați o prelungire I²C.
<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

După ce totul este bine conectat, piesele sunt lipite împreună.
Rezultatul:
<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

PCB-ul care poartă NodeMCU poate fi pus în orice fel de cutie electrică.

### Protecție împotriva intemperiilor

Carcasele în sine trebuie să fie impermeabile. Doar intrarea microfonului ar putea fi sensibilă. TDK, producătorul a publicat câteva recomandări pentru etanșarea microfoanelor MEMS InvenSense cu port inferior împotriva pătrunderii prafului și a lichidelor, dar componentele sunt greu de găsit și nu au fost testate.
Este absolut necesară instalarea unei protecții împotriva intemperiilor sub forma unei huse din spumă. Dacă este necesar, chiar și un burete de uz casnic este suficient. Există mai multe motive pentru aceasta:
* protejează împotriva zgomotului produs de vânt (care poate crește măsurătorile de decibeli)
* protejează împotriva scurgerilor directe de apă pe microfon. Pentru a evita formarea condensului pe microfon trageți înapoi  capacul o bătaie după ce îl instalați pentru a crea o mică cavitate.
* protejează împotriva radiațiilor solare. Lumina solară intensă poate influența valorile măsurate și reduce durata de viață a  microfonului.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Acele huse din spumă sunt vândute în mod normal ca "huse pentru microfon de măsurare". Dar sunt scumpe. De asemenea, puteți lua o bilă de spumă normală și să faceți o gaură cu foarfeca.

Dacă aveți nevoie de mai multe ones [această sursă](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) vă poate fi de ajutor.

## Amplasarea microfonului

Este important să plasați microfonul într-o zonă cât mai "liberă", adică într-o locație cu cât mai puțin sunet suprafețe care reflectă sunetul cât mai puțin posibil. Distanța față de suprafețele reflectorizante trebuie să fie cât mai mare posibil. Încercați să nu montați microfonul direct pe peretele unei case, deoarece pereții reflectă puternic sunetele. Distanța față de perete trebuie să fi în mod ideal mai mare de 1 m. Desigur, acest lucru nu este întotdeauna ușor de realizat. Cu o distanță de aproximativ 50 cm de la vârful de microfonului la perete, eroarea indusă este încă rezonabilă. Locuri bune sunt, de exemplu, balcoanele sau terasele balustrade de terasă, sau un catarg mic pe acoperiș.

De asemenea, puteți încerca să plasați microfonul direct pe colțul casei pentru ca reflexiile să se anuleze parțial între ele. Un stâlp independent cu o înălțime de cel puțin 1 m ar putea fi, de asemenea, o soluție, dar atunci trebuie să aveți grijă la reflexiile de pe sol. Aceasta depinde de acoperirea podelei, bineînțeles.

De asemenea, este important să fim întotdeauna conștienți de faptul că măsurăm zgomotul ambiental. Putem face doar o aproximare a zgomotului emisia de zgomot a unor surse precum drumurile sau căile ferate. Cu toate acestea, cu cât vă apropiați mai mult de sursă, cu atât mai precisă este referință la sursă devine mai exactă. Actualizările firmware-ului ar trebui să permită obținerea unor măsurători precise pentru un tip de zgomot identificat.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
