<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";
    import LanguageSwitcher from './LanguageSwitcher.svelte'
    import {flag} from "country-emoji"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    $: pathWithoutLang = $page.path
        .split("/")
        .slice(2)
        .join("/");

    export let segment;

    $: menu = {open: false};

    function menuToggle() {
        menu.open = !menu.open;
    }
</script>

<div class="bg-brand-green sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-4 relative">
        <div class="flex justify-between py-5 lg:justify-start lg:space-x-10 font-semibold text-brand-white">
            <div class="lg:w-0 lg:flex-1 mr-40 justify-end">
                <a class="block uppercase " href="{lang}/">
                    <img alt="sensor community logo" class="h-8 w-auto" src="images/logos/signet.svg">
                </a>
            </div>
            <nav class="hidden lg:flex space-x-10">
                <a class="text-base leading-6"
                   href="{lang}/sensors/"
                   on:click={menuToggle}>
                    {i18n.t('nav:sensor')}
                </a>

                <a class="text-base leading-6" href="{lang}/knowledge/"
                   on:click={menuToggle}>
                    {i18n.t('nav:knowledge')}
                </a>

                <a class="text-base leading-6"
                   href="https://forum.sensor.community/" on:click={menuToggle}
                   target="_blank">
                    {i18n.t('nav:forum')}
                </a>

                <a class="whitespace-no-wrap font-semibold leading-6" href="{lang}/donate/"
                   on:click={menuToggle}>
                    {i18n.t('nav:donate')}
                </a>
                <div class="pr-40"></div>
            </nav>
            <div class="hidden lg:flex items-center justify-end space-x-8 lg:flex-1 lg:w-0 z-50 -mt-2">
                <a href="https://github.com/opendata-stuttgart/" on:click={menuToggle}
                   target="_blank">
                    GitHub
                </a>

                <a href="https://devices.sensor.community/" on:click={menuToggle}
                   target="_blank">
                    Devices
                </a>
                <LanguageSwitcher class="z-50"/>
            </div>
            <div class="flex justify-between font-semibold text-brand-white lg:hidden ">
                <div class="block z-50">
                    <LanguageSwitcher/>
                </div>
                <div class="m-1.5 mx-2 border-r-2 border-brand-white"></div>
                <button class="inline-flex items-center justify-center p-2 rounded-md text-brand-white -mr-2 -my-2 "
                        on:click={menuToggle}
                        type="button">
                    {#if !menu.open}
                        <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    {:else}
                        <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>
</div>

<!--Mobile menu-->
<div class="bg-brand-green sticky top-20 z-40">
    <div class="bg-brand-green h-screen absolute -mt-10 inset-x-0 transition transform origin-top-right lg:hidden { menu.open ? 'block opacity-100 translate-y-0 ease-out' : 'hidden opacity-0 -translate-y-1 ease-in' } transition  duration-200">
        <div class="divide-y-2">
            <div class="mt-10 px-5 space-y-6 text-brand-white">
                <nav class="grid { menu.open ? 'open' : 'closed' }">
                    <a class="flex py-4"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:sensor')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>

                    <a class="flex py-2"
                       href="{lang}/sensors/airrohr/"
                       on:click={menuToggle}>
                        <div class="text-base font-light">
                            Air Quality Kit (airRohr)
                        </div>
                    </a>

                    <a class="flex py-2"
                       href="{lang}/sensors/dnms/"
                       on:click={menuToggle}>
                        <div class="text-base font-light">
                            Noise Measuring Sensor (DNMS)
                        </div>
                    </a>

                    <a class="flex py-4"
                       href="{lang}/knowledge/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:knowledge')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>


                    <a class="flex py-4"
                       href="{lang}/forum/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:forum')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>
                    <a class="flex py-4"
                       href="{lang}/donate/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:donate')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>

                    <hr class="my-3">

                    <a class="flex py-3"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                    <span class="text-base font-light">
                        Github
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>

                    </a>

                    <a class="flex py-3"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                    <span class="text-base font-light">
                        Devices
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>

                    </a>

                    <a class="flex py-3"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                    <span class="text-base font-light">
                        Map
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</div>



