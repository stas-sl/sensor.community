<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('copyright:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('copyright:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('copyright:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('copyright:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('copyright:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('copyright:metaDescription')}">
</svelte:head>

<div class="relative py-16 overflow-hidden">
    <div class="mt-6 prose prose-indigo prose-lg mx-auto">
        <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
            {i18n.t('copyright:h1')}
        </h1>
        <p class="mt-6">{@html i18n.t('copyright:dataDescription')}</p>
        <p class="mt-6">{@html i18n.t('copyright:mediaDescription')}</p>
        <h2 class="text-3xl font-bold uppercase">{i18n.t('copyright:creditTitle')}</h2>
        <p class="mt-2">{@html i18n.t('copyright:creditDescription')}</p>
        <h2 class="text-3xl font-bold uppercase">{i18n.t('copyright:infringementTitle')}</h2>
        <p class="mt-2">{@html i18n.t('copyright:infringementDescription')}</p>
    </div>
</div>
