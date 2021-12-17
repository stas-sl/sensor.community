<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";
    import {menuOpened, langSwitcherOpened} from '../store';

    import LanguageSwitcher from './LanguageSwitcher.svelte'
    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    $: pathWithoutLang = $page.path
        .split("/")
        .slice(2)
        .join("/");

    // 1. create a store that can have it's value be set from the 'outside'.
    let current;
    let langSwitcher;

    // 2. subscribe to the store to receive updates on value changes.
    langSwitcherOpened.subscribe(value => {
        langSwitcher = value
    });
    menuOpened.subscribe(value => {
        current = value
    });

    // toggle the current boolean values, and set the store value which will notify all subscribes of the new value.
    const menuToggle = () => {
        langSwitcherOpened.set(false)
        current = !current
        menuOpened.set(current)
    };
</script>

<style>
    svg {
        transition: transform 0.15s ease-in-out;
    }

    svg line {
        stroke: currentColor;
        stroke-width: 2;
        transition: transform 0.15s ease-in-out
    }

    .open svg {
        transform: scale(1)
    }

    .open #top {
        transform: translate(5px, 3px) rotate(45deg)
    }

    .open #middle {
        opacity: 0;
    }

    .open #bottom {
        transform: translate(-12px, 5px) rotate(-45deg)
    }
</style>

<div class="bg-brand-green sticky top-0 z-50 print:hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-4 relative">
        <div class="flex justify-between py-5 lg:justify-start lg:space-x-10 font-semibold text-brand-white">
            <div class="lg:w-0 lg:flex-1 justify-end">
                <a class="block uppercase flex-shrink-0" href="{lang}/" on:click={menuToggle}>
                    <img alt="sensor community logo" class="h-8 w-auto" src="images/logos/signet.svg">
                </a>
            </div>
            <nav class="hidden lg:flex space-x-10">
                <a class="text-base leading-6 font-bold" sapper:prefetch href="{lang}/mission/"
                   on:click={menuToggle}>
                    {i18n.t('nav:mission')}
                </a>

                <a class="text-base leading-6 font-bold" sapper:prefetch href="{lang}/sensors/"
                   on:click={menuToggle}>
                    {i18n.t('nav:guides')}
                </a>

                <a class="text-base leading- font-bold" sapper:prefetch href="{lang}/knowledge/"
                   on:click={menuToggle}>
                    {i18n.t('nav:knowledge')}
                </a>

                <a class="whitespace-no-wrap leading-6 font-bold" sapper:prefetch href="{lang}/donate/"
                   on:click={menuToggle}>
                    {i18n.t('nav:donate')}
                </a>
                <div class="pr-40"></div>
            </nav>
            <div class="hidden lg:flex items-center justify-end space-x-8 lg:flex-1 lg:w-0 z-50 -mt-2">
                <div class="flex">
                    <a href="https://github.com/opendata-stuttgart/" on:click={menuToggle}
                       target="_blank" class="mr-1 font-extralight">
                        GitHub
                    </a>
                    <span class="transform -rotate-45">&rarr;</span>
                </div>

                <div class="flex">
                    <a href="https://forum.sensor.community/" on:click={menuToggle}
                       target="_blank" class="mr-1 font-extralight">
                        {i18n.t('nav:forum')}
                    </a>
                    <span class="transform -rotate-45">&rarr;</span>
                </div>

                <div class="flex">
                    <a href="https://devices.sensor.community/" on:click={menuToggle}
                       target="_blank" class="mr-1 font-extralight">
                        Devices
                    </a>
                    <span class="transform -rotate-45">&rarr;</span>
                </div>
                <div class="flex">
                    <LanguageSwitcher class="z-50"/>
                </div>
            </div>
            <div class="flex justify-between font-semibold text-brand-white lg:hidden ">
                <span class="block z-50">
                    <LanguageSwitcher/>
                </span>
                <div class="m-1.5 mx-2 border-r-2 border-brand-white"></div>
                <button id="mobileMenuButton"
                        class="inline-flex items-center justify-center p-2 rounded-md text-brand-white -mr-2 -my-2"
                        on:click={menuToggle} type="button">
                    <svg class="h-7 w-7 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                        <line id="top" x1="0" y1="5" x2="18" y2="5"></line>
                        <line id="middle" x1="0" y1="12" x2="18" y2="12"></line>
                        <line id="bottom" x1="0" y1="19" x2="18" y2="19"></line>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>

<!--Mobile menu-->
<div class="bg-brand-green sticky top-20 z-40 print:hidden">
    <div class="bg-brand-green h-screen absolute -mt-10 inset-x-0 origin-top-right lg:hidden { current ? 'block' : 'hidden' }">
        <div class="divide-y-2">
            <div class="mt-10 px-5 space-y-6 text-brand-white">
                <nav class="grid { current ? 'open' : 'closed' }">
                    <a class="flex py-4"
                       href="{lang}/mission/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:mission')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>

                    <a class="flex py-4"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:guides')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>

                    <a class="flex py-2"
                       href="{lang}/sensors/airrohr/"
                       on:click={menuToggle}>
                        <div class="text-base font-extralight">
                            Air Quality Kit (airRohr)
                        </div>
                    </a>

                    <a class="flex py-4"
                       href="{lang}/sensors/dnms/"
                       on:click={menuToggle}>
                        <div class="text-base font-extralight">
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
                       href="{lang}/donate/"
                       on:click={menuToggle}>
                        <div class="text-2xl leading-6 font-bold flex-1">
                            {i18n.t('nav:donate')}
                        </div>
                        <span class="text-2xl">&nbsp&rarr;</span>
                    </a>

                    <hr class="my-3">

                    <a class="flex py-3"
                       href="forum.sensor.community/" target="_blank"
                       on:click={menuToggle}>
                    <span class="text-base font-extralight">
                        Forum
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>
                    </a>

                    <a class="flex py-3"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                    <span class="text-base font-extralight">
                        Github
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>
                    </a>

                    <a class="flex py-3"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                    <span class="text-base font-extralight">
                        Devices
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>
                    </a>

                    <a class="flex py-3"
                       href="{lang}/sensors/"
                       on:click={menuToggle}>
                    <span class="text-base font-extralight">
                        Map
                    </span>
                        <span class="transform -rotate-45">&rarr;</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</div>