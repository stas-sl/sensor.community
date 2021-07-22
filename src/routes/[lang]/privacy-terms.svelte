<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('imprint:metaTitle')} - Sensor.Community</title>
    <meta name="description" content="{i18n.t('imprint:metaDescription')}">
    <meta content={i18n.t('imprint:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('imprint:h1')}
            </h1>
            <h6 class="font-lf-light leading-normal text-sm">{i18n.t('imprint:lastModified')}
                20.02.2020</h6>
            <div class="mt-6 prose prose-indigo prose-lg mx-auto">
                <h2>{i18n.t('imprint:imprint')}</h2>
                <div>Gem. § 5 Telemediengesetz (TMG)</div>
                <div>{i18n.t('imprint:imprintName')}</div>
                <div>{i18n.t('imprint:imprintStreet')}</div>
                <div>{i18n.t('imprint:imprintPostalCode')}</div>
                <div>{i18n.t('imprint:imprintCountry')}</div>
                <div>{i18n.t('imprint:imprintMail')}</div>
            </div>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg mx-auto">
            <h2 class="text-3xl font-bold uppercase">{i18n.t('imprint:privacyPolicy')}</h2>
            <div class="mt-2">{i18n.t('imprint:privacyPolicyDesc')}</div>
            <h3 class="mt-6 text-xl">{i18n.t('imprint:privacyPolicyContact')}</h3>
            <div>{i18n.t('imprint:privacyPolicyName')}</div>
            <div>{i18n.t('imprint:privacyPolicyStreet')}</div>
            <div>{i18n.t('imprint:privacyPolicyPostalCode')}</div>
            <div>{i18n.t('imprint:privacyPolicyCountry')}</div>
            <div>{i18n.t('imprint:privacyPolicyMail')}</div>
            <h3 class="mt-6 text-xl">{i18n.t('imprint:privacyPolicyContactTitle')}</h3>
            <div class="mt-2">{i18n.t('imprint:privacyPolicyContactDescription')}</div>
        </div>
    </div>
</div>
