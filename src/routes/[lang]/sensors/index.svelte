<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../components/Contact.svelte"
    import Cards from "../../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

</script>

<svelte:head>
    <title>{i18n.t('sensor:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('sensor:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('sensor:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('sensor:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('sensor:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('sensor:metaDescription')}">
</svelte:head>


<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-32">
        <div class="mx-auto text-center md:text-left max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div class="mt-10">
                <div class="inline-flex space-x-4">
                    <img alt="sensor community logo" class="h-8 w-auto" src="images/logos/signet.svg">
                    <span class="py-1 font-semibold text-brand-yellow tracking-wide uppercase">
                        Sensor.Community
                    </span>
                </div>
                <div class="mt-6">
                    <div class="mt-6 sm:max-w-xl">
                        <h1 class="text-5xl font-extrabold text-brand-black tracking-tight sm:text-5xl">
                            {i18n.t('sensor:h1')}
                        </h1>
                        <p class="mt-6 text-xl text-gray-900 antialiased">
                            {i18n.t('sensor:subtitle')}
                        </p>
                    </div>
                </div>
                <div class="mt-12 lg:hidden">
                    <div class="flex items-center justify-center animate-bounce transition duration-100 ease-in-out cursor-pointer"
                         type="button">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-16 mx-auto text-center md:text-left max-w-md px-4 sm:max-w-3xl lg:max-w-7xl">
            <div class="lg:grid lg:grid-cols-2 lg: gap-16">
                    <Cards
                            description={i18n.t('sensor:airSensorDescription')}
                            imageUrl="/images/air-quality-sensor-inside.jpg"
                            link="{lang}/sensors/airrohr"
                            title={i18n.t('sensor:airSensorTitle')}
                            hashTag={i18n.t('sensor:airSensorHashtag')}
                    />
                    <Cards
                            description={i18n.t('sensor:subtitle')}
                            imageUrl="images/dnms.jpg"
                            link="{lang}/sensors/dnms"
                            title={i18n.t('sensor:noiseSensorTitle')}
                            hashTag={i18n.t('sensor:noiseSensorDescription')}
                    />

            </div>
        </div>
    </div>
</div>

<Contact/>