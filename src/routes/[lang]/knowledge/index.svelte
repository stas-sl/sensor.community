<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Button from "../../../components/Button.svelte";


    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const sensors = [
        {
            hashtag: "",
            title: "FAQ - Help Center",
            linkURL: "/knowledge/faqs/",
            description: "Troubleshoot guide"
        },
        {
            hashtag: "",
            title: "Scientific publications",
            linkURL: "/knowledge/publications/",
            description: "Noise measurement sensor in beta version"
        }
    ]

</script>

<svelte:head>
    <title>{i18n.t('knowledge:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('knowledge:metaDescription')}" name="description">
    <meta content={i18n.t('knowledge:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
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
                        <h1 class="text-5xl font-extrabold text-brand-black tracking-tight sm:text-5xl">
                            {i18n.t('knowledge:h1')}
                        </h1>
                        <p class="mt-6 text-xl antialiased">
                            {i18n.t('knowledge:description')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:mx-auto sm:max-w-3xl sm:px-6 hidden lg:block">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="hidden sm:block">
                    <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                    <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" fill="none" height="392"
                         viewBox="0 0 404 392"
                         width="404">
                        <defs>
                            <pattern height="20" id="837c3e70-6c3a-44e6-8854-cc48c737b659" patternUnits="userSpaceOnUse"
                                     width="20" x="0"
                                     y="0">
                                <rect class="text-gray-200" fill="currentColor" height="4" width="4" x="0" y="0"/>
                            </pattern>
                        </defs>
                        <rect fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" height="392" width="404"/>
                    </svg>
                </div>
                <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                    <img alt=""
                         class="w-full rounded-md shadow-xl ring-1 ring-brand-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                         src="/images/air-quality-sensor-inside.jpg">

                </div>
            </div>
        </div>
    </div>
</div>


<div class="relative pb-16 overflow-hidden">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 lg:max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div class="mt-6">
                <h2 class="text-3xl font-extrabold tracking-tight">{i18n.t('knowledge:faq')}</h2>
                <p class="mt-4 text-lg">
                    {i18n.t('knowledge:faq-description')}
                </p>
                <div class="mt-3 md:mt-6">
                    <Button link="{lang}/knowledge/faq/" linkName="Find your answer"/>
                </div>
            </div>
            <div class="my-16"></div>
        </div>
        <div class="px-4 lg:max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 max-w-prose">
            <div class="mt-6">
                <h2 class="text-3xl font-extrabold tracking-tight">{i18n.t('knowledge:publication')}</h2>
                <p class="mt-4 text-lg">
                    {i18n.t('knowledge:publication-description')}
                </p>
                <div class="mt-3 md:mt-6">
                    <Button link="{lang}/knowledge/publications/" linkName="Check out the papers"/>
                </div>
            </div>
        </div>
    </div>
</div>
