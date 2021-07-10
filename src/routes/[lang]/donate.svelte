<script>
    import initI18n from "../../utils/initI18n";
    import {
        stores
    } from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {
        page
    } = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<svelte:head>
    <title>{i18n.t('donate:metaTitle')}</title>
    <meta content="{i18n.t('donate:metaDescription')}" name="description">
    <meta content={i18n.t('donate:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div
                class="mx-auto text-center md:text-left max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div class="mt-10">
                <div class="inline-flex space-x-4">
                    <img alt="sensor community logo" class="h-8 w-auto" src="images/logos/signet.svg">
                    <span class="py-1 font-semibold text-brand-yellow tracking-wide uppercase">
                        Sensor.Community
                    </span>
                </div>
                <div class="mt-6">
                    <div class="mt-6 sm:max-w-xl">
                        <h1 class="text-5xl font-extrabold text-brand-black tracking-tight sm:text-5xl">
                            {i18n.t('donate:h1')}
                        </h1>
                        <p class="mt-6 text-xl text-gray-900 antialiased">
                            {i18n.t('donate:description')}
                        </p>
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

        <div class="hidden md:block sm:mx-auto sm:max-w-3xl sm:px-6">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="hidden sm:block">
                    <div
                            class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full">
                    </div>
                    <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" fill="none" height="392"
                         viewBox="0 0 404 392" width="404">
                        <defs>
                            <pattern height="20" id="837c3e70-6c3a-44e6-8854-cc48c737b659" patternUnits="userSpaceOnUse"
                                     width="20" x="0" y="0">
                                <rect class="text-gray-100" fill="currentColor" height="4" width="4" x="0" y="0"/>
                            </pattern>
                        </defs>
                        <rect fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" height="392" width="404"/>
                    </svg>
                </div>
                <!-- Todo: fix rotation -->
                <div class="animate-heartBeat relative pl-4 -mr-40 sm:mx-auto sm:max-w-2xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                    <img alt="Support Sensor.Community by donating and keep the network alive"
                         class="w-full lg:h-full lg:w-auto lg:max-w-none"
                         src="icons/heart.svg">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    <div class="relative pb-16 overflow-hidden">
        <div class="relative lg:px-8">
            <div class="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-8">
                <!-- running campaign -->
                <div class="p-6">
                    <h3 class="text-xl pb-6">{i18n.t('donate:campaign')}</h3>
                    <div class="flex-1 flex flex-col">
                        <div id="betterplace_donation_iframe"
                             style="background: transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat;">
                            <iframe id="iFrameResizer0"
                                    src="https://www.betterplace.org/de/projects/38071/iframe_donations/new?utm_campaign=external_donation_forms&amp;utm_source=domain:luftdaten.info&amp;utm_medium=project_38071&amp;utm_content=luftdaten.info;"
                                    style="max-width: 600px; max-height: none; width: 100%; background-color: transparent; overflow: hidden; height: 1024px;"></iframe>
                        </div>
                    </div>
                </div>

                <!-- direct donation -->
                <div class="p-6">
                    <h3 class="text-xl pb-6">{i18n.t('donate:donation')}</h3>
                    <div class="flex-1 flex flex-col">
                        <div class="max-w-xl">
                            <div class="">
                                <p class="block text-sm text-gray-600">
                                    {i18n.t('donate:holder')}</p>
                                <p class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded">
                                    Open Knowledge
                                    Foundation
                                    Germany e.V.</p>
                            </div>
                            <div class="mt-2">
                                <p class="block text-sm text-gray-600">
                                    {i18n.t('donate:iban')}</p>
                                <p class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded">
                                    DE 36 4306 0967
                                    1173 8932
                                    00</p>
                            </div>
                            <div class="mt-2">
                                <p class=" block text-sm text-gray-600">
                                    {i18n.t('donate:bic')}</p>
                                <p class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded">
                                    GENODEM1GLS</p>
                            </div>
                            <div class="mt-2">
                                <p class=" block text-sm text-gray-600">
                                    {i18n.t('donate:bank')}</p>
                                <p class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded">
                                    GLS Community
                                    Bank</p>
                            </div>
                            <div class="mt-2">
                                <p class=" block text-sm text-gray-600">
                                    {i18n.t('donate:intendedUse')}</p>
                                <p class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded">
                                    OK Lab
                                    Stuttgart</p>
                            </div>
                            <div class="mt-4">
                                <a class="block text-sm text-gray-600" href="https://okfn.org/" target="_blank">
                                    {i18n.t('donate:donationDescription')}
                                    <span class="transform -rotate-45">&rarr;</span>
                                </a>
                                <!-- Todo: fix rotation -->
                                <span class="transform -rotate-45">&rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
