<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    function delayMap() {
        if (process.browser) {
            setTimeout(function () {
                document.getElementById('map-frame').src = 'https://no2.maps.sensor.community';
            }, 900);
        }
    }
</script>

<svelte:head>
    <title>{i18n.t('campaign:no2-metaTitle')}</title>
    <meta content="{i18n.t('campaign:no2-metaDescription')}" name="description">
    <meta content={i18n.t('campaign:no2-metaTitle')} property="og:title"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>


<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div class="mt-10">
                <div class="inline-flex space-x-4">
                    <img alt="sensor community logo" class="h-8 w-auto"
                         src="images/logos/signet.svg">
                    <span class="py-1 font-semibold text-brand-yellow tracking-wide uppercase">
                  Sensor.Community
                </span>
                </div>
                <div class="mt-6">
                    <div class="mt-6 sm:max-w-xl">
                        <h1 class="text-5xl font-extrabold text-brand-black tracking-tight sm:text-5xl">
                            {i18n.t('campaign:no2-h1')}
                        </h1>
                        <p class="mt-6 text-xl antialiased">
                            {i18n.t('campaign:no2-description')}
                        </p>
                        <ul>
                            <li class="mt-2 text-lg"><span
                                    class="font-bold">{i18n.t('campaign:phase1')} </span>{i18n.t('campaign:no2-phase1')}
                                ✔
                            </li>
                            <li class="mt-2 text-lg"><span
                                    class="font-bold">{i18n.t('campaign:phase2')} </span>{i18n.t('campaign:no2-phase2')}
                                ️️✔️
                            </li>
                            <li class="mt-2 text-lg"><span
                                    class="font-bold">{i18n.t('campaign:phase3')} </span>{i18n.t('campaign:no2-phase3')}
                                ✔️
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:mx-auto sm:max-w-3xl sm:px-6 hidden lg:block">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="hidden sm:block">
                    <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                    <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" fill="none" height="392"
                         viewBox="0 0 404 392"
                         width="404">
                        <defs>
                            <pattern height="20" id="837c3e70-6c3a-44e6-8854-cc48c737b659" patternUnits="userSpaceOnUse"
                                     width="20" x="0"
                                     y="0">
                                <rect class="text-gray-200" fill="currentColor" height="4" width="4" x="0" y="0"/>
                            </pattern>
                        </defs>
                        <rect fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" height="392" width="404"/>
                    </svg>
                </div>
                <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                    <iframe class="z-10" id="map-frame" onLoad="{delayMap()}" scrolling="no"
                            src=""
                            style="width: 97%; height: 95%; margin: auto; "
                            title="sensor.community particulate matter map"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
