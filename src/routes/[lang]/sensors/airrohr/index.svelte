<script context="module">
    export async function preload({params}) {
        const res = await this.fetch(`endpoints/airrohr/${params.lang}.json`);

        if (res.status === 200) {
            const sections = await res.json();
            return {sections};
        } else {
            const sections = await this.fetch(`endpoints/airrohr/en.json`).then(r => r.json())
            return {sections}
        }
    }
</script>

<script>
    import {stores} from "@sapper/app";
    import initI18n from "../../../../utils/initI18n";
    import Docs from '../../../../components/Docs.svelte'

    let {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    export let sections;
</script>

<svelte:head>
    <title>{i18n.t('airrohr:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('airrohr:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('airrohr:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('airrohr:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('airrohr:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('airrohr:metaDescription')}">
</svelte:head>

{#await sections}
    <p>{i18n.t('index:inNumbers-fetching')}</p>
{:then data}
    <div class="p-5 border-b border-gray-200 print:hidden">
        <a href="{lang}/sensors/">←&nbsp {i18n.t('breadcrumb:toSensorOverview')}</a>
    </div>
    <div class="relative px-4">
        <div class="text-lg max-w-prose mx-auto">
            <Docs {sections} class="prose prose-lg"/>
        </div>
    </div>
{:catch error}
    <p>{i18n.t('index:inNumbers-error')}</p>
{/await}