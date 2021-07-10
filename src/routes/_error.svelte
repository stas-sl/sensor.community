<script>
    import Button from "../components/Button.svelte";
    import {stores} from "@sapper/app";
    import initI18n from "../utils/initI18n";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    export let status;
    export let error;
    const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status} - Sensor.Community</title>
</svelte:head>


<div class="py-16 lg:py-24">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-green">
        <div class="relative py-24 px-8 bg-brand-greenPastel rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:gap-x-8">
            <div class="relative lg:col-span-1">
                <div class="inline-flex space-x-4">
                    <img alt="sensor community logo" class="h-8 w-auto"
                         src="images/logos/signet-green.svg">
                    <span class="py-1 font-semibold text-brand-green tracking-wide uppercase">
                      Sensor.Community
                    </span>
                </div>
                <h2 class="text-8xl font-bold mt-5">{status} - {error.message}</h2>
                <div class="mt-10">
                    <p class="text-xl font-medium sm:text-2xl"> {i18n.t('error:errorMessage')}</p>
                    <p class="text-xl font-medium sm:text-2xl"> {i18n.t('error:submitError')} <a
                            class="text-brand-funcRed"
                            href="mailto:Contact@Sensor.Community?subject=Error%20on%20Page">{i18n.t('error:contact')} </a> {i18n.t('error:or')}
                        <a class="text-brand-funcRed" href="forum.sensor.community"
                           target="_blank">{i18n.t('error:forum')} <span
                                class="transform -rotate-45">&rarr;</span></a>{i18n.t('error:thanks')}
                    </p>
                    <footer class="mt-6">
                        {i18n.t('error:sc-team')}
                    </footer>

                    <div class="my-10">
                        <Button link="{lang}/" linkName="{i18n.t('error:home')}"/>

                    </div>
                    <div class="container">
                        {#if dev && error.stack}
                            <pre>{error.stack}</pre>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
