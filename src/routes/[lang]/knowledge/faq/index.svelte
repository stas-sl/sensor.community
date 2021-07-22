<script>
    import initI18n from "../../../../utils/initI18n";
    import Item from "../../../../components/Accordian.svelte"
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    let faqs = [ {
        id: "1",
        title: "I would like to buy a fine dust sensor. What do I have to do?",
        content: "With the shopping list, you can order the individual parts yourself from the manufacturer. Unfortunately, this is not possible with us. Check out our <a href=\"en\/sensors\/airrohr\#Introduction\">guide to find the shopping list guide</a>",
        linkNames: ["UN@HABITAT for a better urban future"],
        links: ["https://unhabitat.org/un-habitat-convenes-virtual-workshop-on-improving-air-quality-and-public-space-monitoring-in"],
    },
        {
            id: "2",
            title: "What is PM1, PM2.5 and PM10?",
            content: "PM means Particulate Matter, the particle size in µm <ul class='py-4'> <li>PM10 = 10 μm</li><li>PM2.5 = 2.5 μm</li></ul> The smaller the particulate matter, the more dangerous to people's health.",
            links: ["link1", "link2"]
        },
        {
            id: "3",
            title: "Service Life of the SDS011 fine dust sensor",
            content: "According to the data sheet, the SDS011 sensor we use has a service life in continuous operation of approx. 8,000 hours. Our firmware therefore switches the sensor on for only 20 seconds per measuring interval of 150 seconds. This makes the theoretical lifetime 7.5 times longer. Practically, this should be enough for approx. 4-5 years of operation. Measuring interval 150 seconds (2.5 minutes) <ul class='py-4'> <li>8,000 hours = 0.913 years</li><li>7.5 x 0.913 years = 6.85 years (theoretical service life)</li></ul> Measuring interval 240 seconds (4 minutes) 12 x 0.913 years = 10.96 years (theoretical service life)",
            links: ["link1"]
        },
        {
            id: "4",
            title: "Energy, Wifi and Data Volume",
            content: "Cost Calculation: The fine dust sensor as a unit needs about 1 watt, if it would run the whole year, that would be (1W x 24h x 365 days)/ 1000 = 8,76 kWh so about 2,50€/ year.<p>Energy: The USB cable can also be extended to about 6-7m, because only voltage goes over it and no data. A reasonable battery and solar solution is being worked on. Who finds an affordable solution for a use with at least one week, can contact us.<p/><p>WLAN: must always be on, the ESP8266 with our firmware has no memory. If the WLAN is switched off over night, there will be no data.<p/><p>Data amount: is very small, only the ID, the time, the 4 data are transmitted as text.<p/>",
            links: ["link1"]
        },
        {
            id: "5",
            title: "The wifi name / password has changed",
            content: "In this case, the sensor should be found again as a WLAN router after a restart (briefly disconnect from power). Then the access data can be changed as in the first configuration (\"Configuration of the fine dust sensor\").",
            links: ["link1"]
        },
        {
            id: "6",
            title: "Access sensor data",
            content: "We provide the data of the sensors as JSON files, which are updated every minute. All sensor values of the last 5 minutes -> http://api.luftdaten.info/static/v1/data.json Values of the last 5 minutes of a specific sensor -> http://api.luftdaten.info/v1/sensor/sensorid/ For WordPress there is a plugin to display the values of one or more sensors (from Bleeptrack):https:/*de.wordpress.org/plugins/live-widget-luftdaten/ For FHEM there is a module to read in the data of the sensors: https://fhem.de/commandref_DE.html#LuftdatenInfo There is also a plugin for \"Home Assistant\", the configuration instructions can be found here: https://home-assistant.io/components/sensor.luftdaten/ A Homebridge module can be found on Github: https://github.com/toto/homebridge-airrohr From the sensor itself, the data can be retrieved as JSON using the address http://{ip-of-the-sensor}/data.json or http://feinstaubsensor-{nodemcu-id}.local. The IP is the IP of the sensor in the local network, not the 192.168.4.1 which is used for the initial configuration. The 2nd variant should normally work under Linux and MacOS. For Windows, software may have to be installed. See the point 'Access to the sensor'",
            links: ["link1"]
        },
        {
            id: "7",
            title: "Access the sensor to change configuration",
            content: "If the sensor can establish a connection to the WLAN, it can only be reached via the corresponding network. As address you can take the IP address of the sensor, which you can find e.g. via the router. Alternatively the sensor supports access via the address http://feinstaubsensor-{sensorID}.local/ . sensorID is the number we also got for the registration of the sensor.\n. Unfortunately this address is not supported by every operating system without additional software. The address should work on macOS, Linux (via the Avahi service) and current versions of Windows 10. Likewise, it should work if Apple iTunes or Skype are installed on Windows 7. With the 'Bonjour print services for Windows' from Apple there is a download of only 5MB, after which the address can also be accessed.",
            links: ["link1"]
        },
        {
            id: "8",
            title: "The configuration page asks for username and password",
            content: "Here probably the option 'BasicAuth' was activated by mistake. Then the default values should work as login: <p> User: admin </p/><p>assword: feinstaub <p/> Afterwards the option 'BasicAuth' should be deactivated again in the configuration.",
            links: ["link1"]
        },
        {
            id: "9",
            title: "Which servers and ports are used",
            content: "In the default configuration the following servers are used: <ul> <li>api.airdata.info</li> <li>firmware.airdata.info</li> <li>api.sensor.community</li> <li>firmware.sensor.community</li> <li>api-rrd.madavi.de</li> <li>www.madavi.de</li> <li>pool.ntp.org</li> </ul> <ul> <li>The following ports should be enabled for them:</li> <li>80/TCP HTTP</li> <li>443/TCP HTTPS</li> <li>123/UDP NTP (Network Time Protocol)</li> </ul> <p> If you want to use advanced options like the Custom API or OpenSenseMap, you have to enable the corresponding servers and ports as well.</p>",
            links: ["link1"]
        },
        {
            id: "10",
            title: "Connect other sensors",
            content: "More sensors can be connected. Currently the sensor software supports the following sensors: PPD42NS (fine dust, the first sensor we used). SDS011, SDS018, SDS021 (fine dust, the SDS011 is our current sensor) BMP180. After connecting the sensors, they must be activated in the configuration. After that a restart is necessary, because the sensors must be initialized accordingly at startup.",
            links: ["link1"]
        },
        {
            id: "11",
            title: "Connect a display",
            content: "Displays with the driver chip SSD1306 are connected via I2C (serial bus, several components share the same connection pins, description on <a href='https://de.wikipedia.org/wiki/I%C2%B2C' target='_blank'>Wikipedia</a>): SDA VCC Pin 3V3GND Pin GND, SCL Pin D4 (GPIO2), Pin D3 (GPIOO). After connecting, the display must still be activated in the configuration. Afterwards a restart is necessary, because the display must be initialized accordingly at startup.LCD displays (LCD1602) with I2C connection are connected and configured in the same way. Depending on the used version only the VCC connector has to be connected to 5V or 3V. If the display does not show anything, the I2C address of the LCD should be checked first. After that you can try to change the contrast by turning the potentiometer, which is usually present, so that the text becomes visible.",
            links: ["link1"]
        },
        {
            id: "12",
            title: "3D printed models for brackets, housings,..,",
            content: "<ul><li><a href='' target='_blank'></a></li><li><a href='https://www.thingiverse.com/thing:2423413' target='_blank'>Holder with suction cups (3D printing) Housing (3D printing)</a></li><li><a href='https://www.thingiverse.com/thing:2613387' target='_blank'>Housing (3D printed)</a></li><li><a href='' target='_blank'></a></li><li><a href='https://www.thingiverse.com/thing:2763916' target='_blank'>Housing for sensor with LCD display (3D printed)</a></li><li><a href='https://fablab-wuerzburg.dozuki.com/' target='_blank'>Housing of FabLab Würzburg (3D printing)</a></li><li><a href='https://www.thingiverse.com/thing:2775946' target='_blank'>Mounting frame for installation in surface box (3D print)</a></li></ul>",
            links: ["link1"]
        },
        {
            id: "13",
            title: "Why do the values fluctuate compared to the official data?",
            content: "Please note for comparison with official measurement values: The official values are usually Daily averages. The OK-Lab measures in 2 1/2 minute intervals, therefore the values fluctuate much more strongly.\n" +
                "\n" +
                "The values do not claim to be accurate. The sensor used measures PM2.5 and the PM10 value is estimated and can therefore be inaccurate. Individual stations can deliver implausible values. In case of high humidity, especially fog, the values can be significantly higher as the official stations measure the dried fine dust. However, fine dust particles condensed by moisture can increase the negative health effect of fine dust, especially in smog layers.\n" +
                "\n" +
                "In this respect, the OK lab values provide important additional information. However, the scale µg/m3 is not directly applicable for such layers, but can only be used as an orientation. A humidity correction is in preparation. The aim is to provide an additional value that is more comparable with the official values.\n",
            links: ["link1"]
        }
    ]


    const expand = (section) => {
        faqs = faqs.map(faqSection => {
            faqSection.active = false
            if (faqSection.id === section.id) {
                faqSection.active = true
            }
            return faqSection
        })
    }
</script>

<svelte:head>
    <title>{i18n.t('faqs:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('faqs:metaDescription')}" name="description">
    <meta content={i18n.t('faqs:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black">
    <div class="relative px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('faq:h1')}
            </h1>
            <p class="mt-8 text-xl leading-8"> {i18n.t('faq:description')}</p>
            <a class="text-base font-medium text-brand-funcRed"
               href="https://forum.sensor.community/" target="_blank">
                {i18n.t('faq:forum')} &rarr;
            </a>
        </div>
    </div>
</div>


<div class="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <dl class="space-y-6 divide-y divide-gray-200">
            {#each faqs as faq}
                <Item {faq}/>
            {/each}
        </dl>
    </div>
</div>



