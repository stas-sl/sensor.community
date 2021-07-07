<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../../../components/Contact.svelte"
    import Button from "../../../../components/Button.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

</script>

<svelte:head>
    <title>{i18n.t('campaign:refs-metaTitle')}</title>
    <meta content="{i18n.t('campaign:refs-metaTitle')}" property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                #Sensor@RefS
            </h1>
            <p class="text-2xl mt-6">{i18n.t('campaign:refs')}
            <p>

            <div class="mt-8 text-xl leading-8">
                <p class="pb-4"><span
                        class="font-bold">{i18n.t('campaign:phase1')} </span>{i18n.t('campaign:refs-phase1')}
                </p>
                <p class="pb-4"><span
                        class="font-bold">{i18n.t('campaign:phase2')} </span>{i18n.t('campaign:refs-phase2')}
                </p>
                <p class="pb-4"><span
                        class="font-bold">{i18n.t('campaign:phase3')} </span>{i18n.t('campaign:refs-phase3')}
                </p>
            </div>
            <div class="mx-auto text-center">
                <Button link="mailto:Campaign03@Sensor.Community" linkName={i18n.t('campaign:getNotified')}/>
            </div>
        </div>
    </div>
</div>

