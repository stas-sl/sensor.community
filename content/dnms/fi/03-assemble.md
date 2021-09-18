---
title: Kokoa
---
> ⚠️ TÄRKEÄ HUOMAUTUS <br> Ennen kokoonpanoa asenna laiteohjelma! Katso kohta firmware flasher.

## Mikrofoniyksikkö

Mikrofoniyksikkö perustuu Pesky Productsin irrotuslevyyn, jossa on MEMS-mikrofoni ICS-43434. Tällaisen piirilevyn voi asentaa [Tindie-markkinapaikka](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).
<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

### Mikrofoniyksikön kotelo

Kotelo on valmistettu .500" (12,7 mm) polystyreeniputkesta. Tämän halkaisijan ansiosta voidaan kytkeä suoraan suurin osa kalibraattorit yksikköön.

Prototyyppi kehitettiin yhdessä [Evergreen No. 236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Kytkentälevy on sovitettava putken halkaisijaan viilalla. Käytä teippiä mikrofonin sisääntulon suojaamiseksi.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Juota sitten kuusi silikonikaapelia. Huomioi, mihin nastaan kaapeli on kytketty!
<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Leikkaa 115 mm pitkä putkenpätkä.
<br>
Kiinnitä mikrofonipahvi ristikkäiseen teippiin. Laita kaapelit putkeen ja kiinnitä levy putken ääripäihin.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Kiristä putken pääte teipillä.
<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" loading="lazy"/>

Nyt voit täyttää putken hartsilla. Tämä vaihe on pakollinen resonanssin välttämiseksi ja kalibroitujen ja toistettavien tietojen saamiseksi.
Prototyyppi kehitettiin Copaltec GmbH:n valmistaman [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) -hartsin avulla.

#### Tekniset tiedot
* Läpilyöntilujuus: 28 kV/mm.
* Ominaisvastus eteenpäin: 5,8.1014 ohm/cm.
* Pintaresistanssi: 1,3,1016 ohmia.
* Sekoitussuhde hartsi/kovetin: 2 : 1
* Ruukutusaika: 20 à 30 min.
* Kovettumisaika: 16 à 30 h
* Lopullinen kovettunut tila: 10 à 14 päivää
* Viskositeetti (sekoitettuna): 500 à 600 mPa.s.
* Shore-kovuus: D 50-55 (ISO 868, DIN 53505).
* Lämmönjohtavuus: 0,3 W/mK
* Käyttölämpötilat: - 20 - +130 °C


Myös Electroluben valmistaman [polyuretaanihartsin UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) pitäisi toimia.
Kutakin letkua kohden pitäisi riittää 15 g hartsia.
<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Kun hartsi on kovettunut, poista teippi. Mikrofoniyksikkösi on valmis.

## DNMS-kotelo
Kun Teensy (DNMS) ja NodeMCU (standalone tai PCB:llä) on erotettu toisistaan: DNMS ja airRohr.
Tarvitset pätkän halkaisijaltaan 25 mm:n putkea (esim. sähkökäyttöön tarkoitettua putkea), liittimen, 90°:n kaaren ja M25 IP68-kaapeliläpiviennin.
Itse putken on oltava 160 mm pitkä. DNMS näyttää paikkaan. Mikrofonin kotelo pysyy kiinni kaapeliläpiviennin avulla.
Jousi estää veden ja kosteuden pääsyn koteloon ja päästää kaapelin läpi.
<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS on liitetty toiseen piirilevyyn RJ12-kaapelilla. Jos tämä kaapeli on pidempi kuin 250 mm, on käytettävä I²C-jatkojohtoa.
<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Kun kaikki on hyvin kytketty, osat liimataan yhteen.
Tulos:
<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

NodeMCU:ta kantava piirilevy voidaan sijoittaa mihin tahansa sähkökoteloon.

### Sääsuojaus

Itse koteloiden on oltava vedenpitäviä. Ainoastaan mikrofonin sisääntulo voisi olla herkkä. Valmistaja TDK on julkaissut joitain suosituksia InvenSensenen ala-aukkoisten MEMS-mikrofonien tiivistämiseksi pölyn ja nesteen tunkeutumiselta, mutta komponentteja on vaikea löytää eikä niitä ole testattu.
On ehdottoman välttämätöntä asentaa sääsuoja vaahtomuovisuojuksen muodossa. Tarvittaessa jopa kotitaloussieni riittää. Tähän on useita syitä:
* se suojaa tuulen melulta (joka voi nostaa desibelimittauksia).
* se suojaa mikrofonin suoralta vesivuodolta. Jotta mikrofoniin ei pääse tiivistymään kosteutta, vedä suojusta hieman taaksepäin sen asentamisen jälkeen, jotta mikrofoniin syntyy pieni onkalo.
* se suojaa auringon säteilyltä. Voimakas auringonvalo voi vaikuttaa mitattuihin arvoihin ja lyhentää mikrofonin käyttöikää.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Noita vaahtomuovisuojia myydään normaalisti 'mittausmikrofonien suojina'. Mutta ne ovat kalliita. Voit myös ottaa normaalin vaahtomuovipallon ja leikata siihen saksilla reiän.

Jos kaipaat lisää [tämä lähde](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) voi olla apua.

## Mikrofonin sijainti

On tärkeää sijoittaa mikrofoni mahdollisimman "vapaaseen" paikkaan, eli paikkaan, jossa on mahdollisimman vähän ääntä heijastavia pintoja mahdollisimman vähän. Etäisyyden heijastaviin pintoihin tulisi olla mahdollisimman suuri. Älä yritä asentaa mikrofonia suoraan talon seinään, koska seinät heijastavat ääntä voimakkaasti. Etäisyyden seinään tulisi olla ihanteellisesti yli 1 m. Tätä ei tietenkään ole aina helppo toteuttaa. Noin 50 cm:n etäisyydellä kärjen mikrofonin kärjestä seinään, aiheutuva virhe on vielä kohtuullinen. Hyviä paikkoja ovat esimerkiksi parvekkeet tai terassi. kaiteet tai pieni masto katolla.

Voit myös kokeilla sijoittaa mikrofonin suoraan talon nurkkaan, jotta heijastukset kumoavat osittain toisiaan. Vapaasti seisova, vähintään 1 metrin korkuinen masto voi myös olla ratkaisu, mutta silloin on varottava seuraavia asioita. heijastuksia maasta. Se riippuu tietysti lattiapinnoitteesta.

On myös tärkeää olla aina tietoinen siitä, että mittaamme ympäristön melua. Voimme vain arvioida melua likimääräisesti. lähteiden, kuten teiden tai rautateiden, melupäästöjä. Mitä lähempänä lähdettä kuitenkin ollaan, sitä tarkempi on mittaustulos. viittaus lähteeseen tulee tarkemmaksi. Laiteohjelmiston päivityksillä pitäisi sitten pystyä saamaan tarkkoja mittaustuloksia. tunnistettuun melutyyppiin.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
