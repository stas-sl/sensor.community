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
    <title>{i18n.t('campaign:faqs-metaTitle')}</title>
    <meta property="og:title" content="{i18n.t('campaign:faqs-metaTitle')}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
</svelte:head>


<div class="relative py-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                #NO2
            </h1>
            <p class="text-2xl mt-6">{i18n.t('campaign:faqs')}
            <p>

            <div class="mt-8 text-xl leading-8">
                <p class="pb-4"><span
                        class="font-bold">{i18n.t('campaign:phase1')} </span>{i18n.t('campaign:faqs-phase1')} ✔</p>
                <p class="pb-4"><span
                        class="font-bold">{i18n.t('campaign:phase2')} </span>{i18n.t('campaign:faqs-phase2')} ️️✔️</p>
                <p class="pb-4"><span
                        class="font-bold">{i18n.t('campaign:phase3')} </span>{i18n.t('campaign:faqs-phase3')}</p>
            </div>
            <div class="flex" style="height: 40em;">
                <iframe class="z-10" id="map-frame" onLoad="{delayMap()}" scrolling="no"
                        src=""
                        style="width: 97%; height: 95%; margin: auto; "
                        title="sensor.community particulate matter map"></iframe>
            </div>
        </div>
    </div>
</div>
