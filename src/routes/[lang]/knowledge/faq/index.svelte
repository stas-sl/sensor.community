<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    let faqs = [
        {
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
    <title>{i18n.t('faqs:metaTitle')}</title>
    <meta content="{i18n.t('faqs:metaDescription')}" name="description">
    <meta content={i18n.t('faqs:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black">
    <div class="text-lg max-w-prose mx-auto">
        <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
            Troubleshoot and FAQ
        </h1>
        <p class="text-lg md:mb-0 mb-10">
            You have questions? We got you covered! Find your answers in our FAQ.
        </p>
        <a class="text-base font-medium text-brand-funcRed"
           href="https://forum.sensor.community/" target="_blank">
            Still looking for an answer? Check our forum. &rarr;
        </a>
    </div>
</div>

<div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-center text-3xl font-extrabold sm:text-4xl">
                Frequently asked questions
            </h2>
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                {#each faqs as faq}
                    <div class="pt-6">
                        <dt class="text-lg">
                            <button type="button"
                                    class="text-left w-full flex justify-between items-start text-gray-400"
                                    aria-controls="faq-0" aria-expanded="false" on:click={() => expand(faq) }>
              <span class="font-bold text-brand-black">
                {faq.title}
              </span>
                                <span class="ml-6 h-7 flex items-center { expand ? '-rotate-180' : 'rotate-0' } ">
                <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
                            </button>
                        </dt>
                        {#if faq.active}
                            <dd class="mt-2 pr-12" id="faq-{faq.id}">
                                <p class="text-base prose max-w-7xl text-brand-black">
                                    {@html faq.content}
                                </p>
                            </dd>
                        {/if}
                    </div>
                {/each}
            </dl>
        </div>
    </div>
</div>

