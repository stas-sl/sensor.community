---
title: Zostavte
---
> ⚠️ DÔLEŽITÉ UPOZORNENIE <br> Pred montážou nainštalujte firmvér! Pozrite si časť o flashovaní firmvéru.

## Mikrofónová jednotka

Mikrofónová jednotka je založená na rozbočovacej doske Pesky Products s mikrofónom MEMS ICS-43434. Takúto dosku môžete nájsť na [Trhovisko Tindie](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).
<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

### Puzdro pre jednotku mikrofónu

Puzdro je vyrobené z polystyrénovej rúrky s priemerom 0,500" (12,7 mm). Tento priemer umožňuje priamo zapojiť väčšinu kalibrátory na jednotku.

Prototyp bol vyvinutý s [Evergreen No. 236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Rozbočovaciu dosku je potrebné prispôsobiť priemeru rúrky pomocou pilníka. Na ochranu vstupu mikrofónu použite pásku.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Potom spájkujte šesť silikónových káblov. Všimnite si, s ktorým kolíkom je kábel spojený!
<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Odrežte 115 mm dlhý kus rúrky.
<br>
Prilepte mikrofónovú dosku na prekríženú pásku. Vložte káble do hadičky a pripevnite dosku na konci hadičky.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Koniec rúrky utiahnite páskou.
<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" loading="lazy"/>

Teraz môžete rúrku naplniť živicou. Tento krok je povinný, aby sa zabránilo rezonancii a získali sa kalibrované a reprodukovateľné údaje.
Prototyp bol vyvinutý s použitím niektorých [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produced by Copaltec GmbH.

#### Špecifikácie
* Dielektrická pevnosť: 28 kV/mm
* Špecifický priamy odpor: 5,8.1014 ohm/cm
* Povrchový odpor: 1,3.1016 ohm
* Pomer miešania živice a tvrdidla: 2 : 1
* Čas zavárania: 20 až 30 min.
* Čas vytvrdzovania: 16 až 30 h
* Konečný vytvrdnutý stav: 10 à 14 dní
* Viskozita (zmiešaná): 500 až 600 mPa.s
* Tvrdosť podľa Shoreho: D 50 až 55 (ISO 868, DIN 53505)
* Tepelná vodivosť: 0,3 W/mK
* Teploty použitia: * Teplota vzduchu: 0,5 °C - 20 až +130 °C

Mala by fungovať aj [polyuretánová živica UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) od spoločnosti Electrolube.
Na každú rúrku by malo stačiť 15 g živice.
<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Po vytvrdnutí živice odstráňte pásku. Vaša mikrofónna jednotka je pripravená.

## Puzdro DNMS
Keď sú Teensy (DNMS) a NodeMCU (samostatne alebo na doske plošných spojov) oddelené: DNMS a airRohr. Potrebujete kus rúrky s priemerom 25 mm (napríklad rúrky pre elektrické aplikácie), konektor, 90° oblúk a káblovú priechodku M25 IP68.
Samotná rúrka by mala byť dlhá 160 mm. DNMS vyzerá miesto v. Puzdro mikrofónu sa udržiava pomocou káblovej vývodky.
Oblúk zabraňuje vnikaniu vody a vlhkosti do puzdra a zároveň prepúšťa kábel.
<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS je pripojený k druhej doske plošných spojov pomocou kábla RJ12. Ak je tento kábel dlhší ako 250 mm, musíte použiť predĺženie I²C.
<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Keď je všetko dobre zapojené, diely sa zlepia.
Výsledok:
<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Doska plošných spojov nesúca jednotku NodeMCU sa môže umiestniť do ľubovoľnej elektrickej krabice.

### Ochrana proti poveternostným vplyvom

Samotné kryty by mali byť vodotesné. Citlivý by mohol byť len vstup pre mikrofón. Výrobca TDK zverejnil niekoľko odporúčaní na utesnenie mikrofónov InvenSense MEMS so spodným portom pred vniknutím prachu a kvapaliny, ale komponenty sa ťažko hľadajú a neboli testované.
Je bezpodmienečne nutné nainštalovať ochranu proti poveternostným vplyvom vo forme penového krytu. V prípade potreby postačí aj domáca špongia. Existuje na to niekoľko dôvodov:
* chráni pred hlukom vetra (ktorý môže zvýšiť namerané decibely)
* chráni pred priamym zatekaním vody na mikrofón. Ak chcete zabrániť kondenzácii vody na mikrofóne, stiahnite  kryt po jeho inštalácii tak, aby sa vytvorila malá dutina.
* chráni pred slnečným žiarením. Intenzívne slnečné žiarenie môže ovplyvniť namerané hodnoty a znížiť životnosť  mikrofónu.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Tieto penové kryty sa normálne predávajú ako "kryty na meracie mikrofóny". Sú však drahé. Môžete si tiež vziať normálnu penovú guľôčku a nožnicami vystrihnúť otvor.

Ak potrebujete viac ones [tento zdroj](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) môže byť užitočný.

## Umiestnenie mikrofónu

Je dôležité umiestniť mikrofón na čo "najvoľnejšie" miesto, to znamená na miesto s čo najmenším počtom zvukových odrážajúcich povrchov. Vzdialenosť od odrazových plôch by mala byť čo najväčšia. Snažte sa nemontovať mikrofón priamo na stenu domu, pretože steny silno odrážajú zvuky. Vzdialenosť od steny by mala byť byť v ideálnom prípade viac ako 1 m. Samozrejme, nie je vždy jednoduché to zrealizovať. Pri vzdialenosti približne 50 cm od hrotu mikrofónu k stene je indukovaná chyba stále primeraná. Vhodnými miestami sú napríklad balkóny alebo terasy zábradlia alebo malý stožiar na streche.

Môžete tiež skúsiť umiestniť mikrofón priamo na roh domu, aby sa odrazy čiastočne vyrušili navzájom. Riešením by mohol byť aj voľne stojaci stožiar s výškou aspoň 1 m, ale potom si musíte dať pozor na odrazy od zeme. To samozrejme závisí od podlahovej krytiny.

Dôležité je tiež vždy si uvedomiť, že meriame okolitý hluk. Hluk môžeme len približne odhadnúť zdrojov, ako sú cesty alebo železnice. Čím bližšie sme však k zdroju, tým je meranie presnejšie. sa referencia na zdroj stáva presnejšou. Aktualizácia firmvéru by potom mala byť schopná získať presné merania pre identifikovaný typ hluku.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
