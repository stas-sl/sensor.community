<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Cards from "../../../../components/Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    $: pathWithoutLang = $page.path
        .split("/")
        .slice(2)
        .join("/");


    const campaigns = [
        {
            hashtag: "#Air",
            title: "Measuring Air Quality",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
            linkURL: "air-quality",
            description: "Long read about our particulate matter sensor"
        },
        {
            hashtag: "#Noise",
            title: "Prototyping noise measurement sensor",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
            linkURL: "noise-quality",
            description: "Find out how we tested noise measurement"
        }
    ]
</script>

<svelte:head>
    <title>{i18n.t('articles:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('articles:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('articles:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('articles:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('articles:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('articles:metaDescription')}">
</svelte:head>

<div class="relative py-16 overflow-hidden">
    <div class="relative max-w-7xl mx-auto mt-10">
        <div class="px-4">
            <h1 class="text-3xl tracking-tight font-extrabold sm:text-4xl text-left sm:text-center">
                {i18n.t('articles:h1')}
            </h1>
            <p class="mt-3 text-left sm:text-center text-xl sm:mt-4">
                {i18n.t('articles:description')}
            </p>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid lg:grid-cols-3 lg:max-w-none">
            {#each campaigns as campaign}
                <Cards
                        description={campaign.description}
                        imageUrl={campaign.imageURL}
                        link={$page.path}{campaign.linkURL}
                        title={campaign.title}
                        hashTag={campaign.hashtag}
                />
            {/each}
        </div>
    </div>
</div>
