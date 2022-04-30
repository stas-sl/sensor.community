<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import * as places from '../../../content/places';
    import Button from "../../components/Button.svelte";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);


    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

</script>

<svelte:head>
    <title>{i18n.t('places:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('places:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('places:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('places:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('places:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('places:metaDescription')}">
</svelte:head>

<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-32">
        <div class="mx-auto text-center md:text-left max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div class="mt-10">
                <div class="inline-flex space-x-4">
                    <img alt="sensor community logo" class="h-8 w-auto"
                         src="images/logos/signet.svg">
                    <span class="py-1 font-semibold text-brand-yellow tracking-wide uppercase">
              Sensor.Community
            </span>
                </div>
                <div class="mt-6">
                    <div class="mt-6 sm:max-w-xl">
                        <h1 class="text-5xl font-extrabold text-brand-black tracking-tight">
                            {i18n.t('places:h1')}
                        </h1>
                        <p class="mt-6 text-xl antialiased">
                            {i18n.t('places:subtitle')}
                        </p>
                        <div class="mt-6">
                            <Button link="{lang}/sensors/" linkName="{i18n.t('index:cta')}"/>
                        </div>
                    </div>
                </div>
                <div class="mt-12 lg:mt-24 lg:hidden">
                    <div class="flex items-center justify-center animate-bounce transition duration-100 ease-in-out cursor-pointer"
                         type="button">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm:mx-auto hidden md:block sm:max-w-3xl sm:px-6">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="hidden sm:block">
                </div>
                <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                    <img alt=""
                         class="w-full rounded-xl lg:h-full lg:w-auto lg:max-w-none"
                         src="images/world-map.jpg">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="relative py-16">
    <div class="lg:mx-auto lg:max-w-7xl px-8 lg:items-start pb-12 text-center">
        {i18n.t('places:explanation')}
    </div>
    <div class="masonry lg:mx-auto lg:max-w-7xl px-8 lg:items-start">
        {#each Object.entries(places).slice(1) as [state, placeObject]}
            <div class="rounded-lg shadow divide-y divide-gray-200 mb-10">
                <div class="flow-root px-4">
                    <h2 class="text-xl font-bold">{capitalize(state)}</h2>
                    <ul role="list" class="divide-y divide-gray-200">
                        {#each Object.entries(placeObject) as [place, coordinates]}
                            <li class="py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate">{capitalize(place)}</p>
                                    </div>
                                    <div>
                                        <a href="https://maps.sensor.community/#4/{coordinates[0]}/{coordinates[1]}" target="_blank"
                                           class="inline-flex items-center shadow-sm px-4 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:border-brand-funcRed hover:text-brand-funcRed">
                                            {i18n.t('places:view')}</a>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
.masonry {
    column-count: 1;
}
@media (min-width: 1024px)  {
    .masonry {
        column-count: 2;
        column-gap: 2rem;
    }
}
@media (min-width: 1680px) {
    .masonry {
        column-count: 3;
        column-gap: 2rem;
    }
}
</style>
