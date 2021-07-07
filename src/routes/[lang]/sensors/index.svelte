<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../components/Contact.svelte"
    import Cards from "../../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);


    const sensors = [
        {
            hashtag: "#AirQuality",
            title: "airRohr Sensor Kit #1",
            imageURL: "images/nodemcu-sds011.jpg",
            linkURL: "/sensors/airrohr",
            description: "Our basic and approved sensor kit"
        },
        {
            hashtag: "#Noise",
            title: "DNMS Sensor Kit #1",
            imageURL: "images/dnms.jpg",
            linkURL: "/sensors/dnms",
            description: "In beta noise measurement sensor"
        }
    ]

</script>

<svelte:head>
    <title>{i18n.t('sensor:metaTitle')}</title>
    <meta content={i18n.t('sensor:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative px-4 py-16 overflow-hidden">
    <div class="relative sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('sensor:h1')}
            </h1>
            <p class="mt-8 text-xl leading-8">
                {i18n.t('sensor:subtitle')}
            </p>

            <div class="mt-10 grid lg:grid-cols-2">
                {#each sensors as sensor}
                    <Cards
                            description={sensor.description}
                            imageUrl={sensor.imageURL}
                            link={lang}{sensor.linkURL}
                            title={sensor.title}
                            hashTag={sensor.hashtag}
                    />
                {/each}
            </div>
        </div>
    </div>
</div>
<Contact/>