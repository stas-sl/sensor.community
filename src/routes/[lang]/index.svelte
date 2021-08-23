<!--<script context="module">-->
<!--    export function preload({ params, query }) {-->
<!--        return this.fetch("sitemap.xml");-->
<!--    }-->
<!--</script>-->

<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Campaigns from "../../components/Campaigns.svelte";
    import Articles from "../../components/Articles.svelte";
    import Contact from "../../components/Contact.svelte";
    import Banner from "../../components/Banner.svelte";
    import Button from "../../components/Button.svelte";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);
    // $: i18n = initI18n($page.params.lang);

    const fetchNumbers = (async () => {
        const response = await fetch('https://stats.sensor.community/numbers.json')
        return await response.json()
    })()

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    function nFormatter(num, digits) {
        const si = [
            {value: 1, symbol: ""},
            {value: 1E3, symbol: "k"},
            {value: 1E6, symbol: "M"},
            {value: 1E9, symbol: "B"},
            {value: 1E11, symbol: "T"}
        ];
        let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }

        let number = (num / si[i].value).toFixed(digits).replace(rx, "$4")
        return formatNumber(number) + si[i].symbol;
    }

</script>
<svelte:head>
    <title>{i18n.t('index:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('index:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('index:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('index:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('index:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('index:metaDescription')}">
</svelte:head>

<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
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
                            {i18n.t('index:h1')}
                        </h1>
                        <p class="mt-6 text-xl antialiased">
                            {i18n.t('index:subtitle')}
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

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="hidden sm:block">
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
                    <a href="https://maps.sensor.community/#2/0.0/0.0" target="_blank">
                        <img alt=""
                             class="w-full rounded-xl  shadow-xl ring-1 ring-brand-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                             src="images/maps.webp">
                    </a>
                </div>
                <figure class="px-4 md:px-16 mt-4 text-sm text-gray-600">
                    <figcaption>{i18n.t('index:imageSubtitle')}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</div>

<!-- About Section-->
<div class="relative py-16">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div class="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" fill="none"
                     height="392" viewBox="0 0 404 392" width="404">
                    <defs>
                        <pattern height="20" id="02f20b47-fd69-4224-a62a-4c9de5c763f7" patternUnits="userSpaceOnUse"
                                 width="20" x="0"
                                 y="0">
                            <rect class="text-gray-200" fill="currentColor" height="4" width="4" x="0" y="0"/>
                        </pattern>
                    </defs>
                    <rect fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" height="392" width="404"/>
                </svg>
            </div>
            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <!-- Quote Card-->
                <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <img alt=""
                         class="absolute inset-0 h-full w-full object-cover"
                         src="images/woman-breathing-air.webp">
                    <div class="absolute inset-0 bg-brand-green mix-blend-multiply"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-brand-green-dark opacity-70"></div>
                    <div class="relative px-8 text-brand-white">
                        <div>
                            <img alt="Sensor.Community" class="h-12"
                                 src="images/logos/signet.png">
                        </div>
                        <blockquote class="mt-8">
                            <div class="relative text-lg font-medium md:flex-grow">
                                <svg aria-hidden="true"
                                     class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-brand-yellow"
                                     fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                </svg>
                                <p class="relative">
                                    {i18n.t('index:mission-statement')}
                                </p>
                            </div>

                            <footer class="mt-4">
                                <p class="text-base font-semibold">{i18n.t('index:mission-team')}</p>
                                <a href="https://unsplash.com/photos/BQMZ5ligqps" target="_blank"
                                   class="text-sm opacity-50">{i18n.t('index:about-photo')} Unsplash</a>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {i18n.t('index:about-title')}
                </h2>
                <div class="mt-6 space-y-6 text-lg leading-7">
                    <p>{@html i18n.t('index:about-section1')}</p>
                    <p>{@html i18n.t('index:about-section2')}</p>
                    <p>{@html i18n.t('index:about-section3')}</p>
                    <p>{i18n.t('index:about-section4')}</p>
                    <p><a class="font-medium text-brand-funcRed" href="{lang}/sensors/">
                        {i18n.t('index:about-link')} &nbsp&rarr;
                    </a></p>
                </div>
            </div>
        </div>
    </div>
</div>

{#await fetchNumbers}
    <p>{i18n.t('index:inNumbers-fetching')}</p>
{:then data}
    <!-- Stats section -->
    <div class="relative py-16 bg-brand-yellowLight text-center">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="relative">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {i18n.t('index:inNumbers-title')}
                </h2>
                <div class="mt-6 space-y-6">
                    <p class="text-lg md:mb-0 mb-10">
                        {i18n.t('index:inNumbers-subtitle')}
                    </p>
                    <a class="text-base font-medium text-brand-funcRed"
                       href="https://sensors2ref.maps.sensor.community/#3/21.53/6.15">
                        {i18n.t('index:inNumbers-sensorsAtRefs')} &nbsp&rarr;
                    </a>
                </div>
                <div class="relative mx-auto">
                    <div class="mt-10 text-center">
                        <dl class="grid md:grid-cols-3 grid-cols-2 gap-4">
                            <div class="pt-6">
                                <dd class="text-4xl lg:text-5xl font-extrabold">{formatNumber(data.numbers.sensors)}</dd>
                                <dt class="mt-2 text-base font-medium">{i18n.t('index:inNumbers-activeSensors')}</dt>
                            </div>

                            <div class="pt-6">
                                <dd class="text-4xl lg:text-5xl font-extrabold">{formatNumber(data.numbers.countries)}</dd>
                                <dt class="mt-2 text-base font-medium">{i18n.t('index:inNumbers-countries')}</dt>
                            </div>

                            <div class="pt-6">
                                <dd class="text-4xl lg:text-5xl font-extrabold">{nFormatter(data.numbers.measurements, 2)}</dd>
                                <dt class="mt-2 text-base font-medium">{i18n.t('index:inNumbers-dataPoints')}</dt>
                            </div>

                            <div class="pt-6">
                                <dd class="text-4xl lg:text-5xl font-extrabold">{formatNumber(data.numbers.local_labs)}</dd>
                                <dt class="mt-2 text-base font-medium">{i18n.t('index:inNumbers-communityLabs')}</dt>
                            </div>

                            <div class="pt-6">
                                <dd class="text-4xl lg:text-5xl font-extrabold">{formatNumber(data.numbers.commits)}</dd>
                                <dt class="mt-2 text-base font-medium">{i18n.t('index:inNumbers-commits')}</dt>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>

{:catch error}
    <p>{i18n.t('index:inNumbers-error')}</p>
{/await}

<!-- DYI sensor guide section -->
<div class="relative py-16 overflow-hidden">
    <div class="relative">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div class="px-4 max-w-3xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div class="mt-6">
                    <h2 class="text-3xl font-extrabold tracking-tight">
                        {i18n.t('index:guideSection-title')}
                    </h2>
                    <p class="mt-4 text-lg leading-7">
                        {i18n.t('index:guideSection-description')}
                    </p>
                    <div class="mt-6">
                        <Button link="{lang}/sensors/" linkName="{i18n.t('index:cta')}"/>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
                <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img alt="Air Quality Sensor Inside"
                         class="w-full rounded-2xl shadow-xl ring-1 ring-brand-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                         src="/images/air-quality-sensor-inside.webp">
                </div>
                <figure class="px-4 mt-4 text-sm text-gray-600">
                    <figcaption>
                        {i18n.t('index:guideSection-imageSubtitle')}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</div>

<!-- Partner section -->
<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 py-16 lg:max-w-7xl">
    <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
        <div class="mt-12 mb-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img alt="Workcation" class="max-h-16"
                     src="images/partner/jrc.png">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img alt="Mirage" class="max-h-16"
                     src="images/partner/ogc.png">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img alt="Tuple" class="max-h-16"
                     src="images/partner/rivm.png">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img alt="Laravel" class="max-h-16"
                     src="images/partner/bosch.png">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img alt="Tuple" class="max-h-16"
                     src="images/partner/air-bulgaria.png">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img alt="Laravel" class="max-h-16"
                     src="images/partner/bosch.png">
            </div>
        </div>
        <div>
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {i18n.t('index:partner-title')}
            </h2>
            <p class="mt-6 max-w-3xl text-lg leading-7">
                {@html i18n.t('index:partner-description')}
            </p>
            <div class="mt-6">
                <!--                <a class="text-base font-medium text-brand-funcRed" sapper:prefetch href="{lang}/press/">-->
                <!--                    {i18n.t('index:partner-link')} &nbsp&rarr;-->
                <!--                </a>-->
            </div>
        </div>
    </div>
</div>
<Banner
        description={i18n.t('banner:description')}
        link={lang}/sensors/
 linkName={i18n.t('banner:cta')}
        title={i18n.t('banner:title')}
/>


<div class="relative mt-32 mb-16">
    <div class="max-w-7xl mx-auto bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
            <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
                <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                    <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                        <img class="object-cover object-center rounded-2xl shadow-2xl"
                             src="https://images.unsplash.com/photo-1518367445291-98ac49923e14?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                             alt="">
                        <div class="flex">
                            <footer class="m-4 flex-grow">
                                <a href="images/mission.webp" target="_blank"
                                   class="text-brand-white text-sm opacity-70">{i18n.t('index:about-photo')}
                                    Unsplash</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative bg-brand-yellowLight lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-2xl lg:grid lg:grid-cols-10 lg:items-center">
                <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                    <h2 class="text-3xl font-extrabold text-white">{i18n.t('index:mission')}</h2>
                    <p class="text-lg text-white">{i18n.t('index:mission-description')}</p>
                    <a class="btn btn-primary border sm:inline-block sm:w-auto mr-4 leading-7"
                       href="{lang}/mission">{i18n.t('index:mission-link')}</a>
                    <a class="btn btn-secondary sm:inline-block sm:w-auto leading-7"
                       href="{lang}/donate">{i18n.t('index:mission-donate')}</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!--<Campaigns/>-->
<!--<Articles/>-->
<Contact/>
