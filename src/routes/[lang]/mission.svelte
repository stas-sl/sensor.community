<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import PressArticles from "../../components/PressArticles.svelte";
    import {onMount} from "svelte";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);


    const contributors = [
        {name: "Rajko", position: "DevOps", imageURL: "images/team/rajko-zschiegner.jpg"},
        {name: "Lukas", position: "Partnership & Community", imageURL: "images/team/lukas-mocek.jpg"},
        {name: "David", position: "Developer", imageURL: "images/team/david-lackovic.jpg"},
        {
            name: "Pierre-Jean",
            position: "Data Viz & Partnerhsip FR",
            imageURL: "images/team/pierre-jean-gueno.jpg"
        },
        {
            name: "Ewald Thoma",
            position: "Noise Sensor Designer",
            imageURL: "images/team/ewald-thoma.jpg"
        },
        {
            name: "Various Contributors",
            position: "around the world",
            imageURL: "/icons/github.svg"
        }
    ]

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
    <title>{i18n.t('mission:metaTitle')} - Sensor.Community</title>
    <meta name="description" content="{i18n.t('mission:metaDescription')}">
    <meta content={i18n.t('mission:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('mission:h1')}
            </h1>
            <p class="mt-8 text-xl leading-8">
                {i18n.t('mission:paragraph-1')}
            </p>
        </div>
        <div class="mt-6 prose prose-lg mx-auto text-brand-black">
            <h2>  {i18n.t('mission:our-story')}</h2>
            <p class="mt-8 text-xl leading-8">
                {@html i18n.t('mission:our-story-paragraph-1')}
            </p>
            <ul class="text-xl leading-8">
                <li><a href="https://github.com/opendata-stuttgart/sensors-software"
                       target="_blank">{i18n.t('mission:our-story-item-1')}</a></li>
                <li><a href="https://github.com/opendata-stuttgart/sensor.community"
                       target="_blank">{i18n.t('mission:our-story-item-2')}</a></li>
                <li><a href="https://github.com/opendata-stuttgart/feinstaub-map-v2"
                       target="_blank">{i18n.t('mission:our-story-item-3')}</a></li>
                <li><a href="https://github.com/opendata-stuttgart/devices.sensor.community"
                       target="_blank">{i18n.t('mission:our-story-item-4')}</a></li>
            </ul>
            <p class="mt-8 text-xl leading-8">
                {@html i18n.t('mission:our-story-paragraph-2')}</p>
            <p class="mt-8 text-xl leading-8">
                {@html i18n.t('mission:our-story-paragraph-3')}</p>
        </div>
    </div>
</div>
{#await fetchNumbers}
    <p>{i18n.t('index:inNumbers-fetching')}</p>
{:then data}
    <div class="relative overflow-hidden bg-brand-yellowLight">
        <div class="relative px-6">
            <div class="text-lg max-w-prose mx-auto">
                <div class="mt-16 prose prose-lg mx-auto">
                    <h2>Some numbers to impress</h2>
                </div>
                <dl class="mb-16 mt-8 text-center grid grid-cols-2 md:grid-cols-4 sm:gap-8">
                    <div class="flex flex-col">
                        <dt class="text-5xl font-extrabold">
                            {formatNumber(data.numbers.sensors)}
                        </dt>
                        <dd class="mt-2 text-lg leading-6 font-medium">
                            {i18n.t('index:inNumbers-activeSensors')}
                        </dd>
                    </div>
                    <div class="flex flex-col mb-6 md:mb-0">
                        <dt class="text-5xl font-extrabold">
                            {formatNumber(data.numbers.countries)}
                        </dt>
                        <dd class="mt-2 text-lg leading-6 font-medium">
                            {i18n.t('index:inNumbers-countries')}
                        </dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="text-5xl font-extrabold">
                            {nFormatter(data.numbers.measurements, 2)}
                        </dt>
                        <dd class="mt-2 text-lg leading-6 font-medium">
                            {i18n.t('index:inNumbers-dataPoints')}
                        </dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="text-5xl font-extrabold">
                            {formatNumber(data.numbers.local_labs)}
                        </dt>
                        <dd class="mt-2 text-lg leading-6 font-medium">
                            {i18n.t('index:inNumbers-communityLabs')}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>

{:catch error}
    <p>{i18n.t('index:inNumbers-error')}</p>
{/await}
<div class="relative my-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <div class="prose prose-lg mx-auto text-brand-black">
                <h2>{i18n.t('mission:code-a-difference')}</h2>
                <p class="text-xl leading-8">{i18n.t('mission:code-a-difference-paragraph-1')}</p>
                <blockquote>
                    {i18n.t('mission:code-a-difference-quote')}
                </blockquote>
                <p class="text-xl leading-8">{i18n.t('mission:code-a-difference-paragraph-2-pt1')} <span>120399</span>
                    <span>{i18n.t('mission:code-a-difference-paragraph-2-pt2')}</span> 70
                    <span>{i18n.t('mission:code-a-difference-paragraph-2-pt3')}</span>
                </p>

                <figure>
                    <img alt="Sensor.Community Team building a particulate matter sensor with other people"
                         class="w-full rounded-lg" height="873" src="images/team.jpg"
                         width="1310">
                    <figcaption>{i18n.t('mission:code-a-difference-figcaption')}</figcaption>
                </figure>
                <h2>{i18n.t('mission:get-running')}</h2>
                <p class="text-xl leading-8">{@html i18n.t('mission:get-running-paragraph-1')}</p>
                <p class="text-xl leading-8">{@html i18n.t('mission:get-running-paragraph-2')}</p>
                <p class="text-xl leading-8">{@html i18n.t('mission:get-running-paragraph-3')}</p>
            </div>

            <div class="text-lg max-w-prose mx-auto py-16">
                <div class="space-y-12">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{i18n.t('mission:team')}</h2>
                        <p class="text-xl">{i18n.t('mission:team-description')}</p>
                    </div>
                    <ul class="space-y-16 sm:grid sm:grid-cols-3 gap-8 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                        {#each contributors as contributor}
                            <li>
                                <div class="space-y-6 text-center">
                                    <img class="mx-auto h-40 w-40 rounded-full xl:w-40 xl:h-40"
                                         src={contributor.imageURL}
                                         alt="">
                                    <div class="space-y-2">
                                        <div class="text-lg leading-6 space-y-1">
                                            <h3 class="font-medium">{contributor.name}</h3>
                                            <p class="text-gray-600 font-normal">{contributor.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <div class="text-lg max-w-prose mx-auto">
                <div class="my-16 prose prose-lg mx-auto text-brand-black">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{i18n.t('mission:mediakit')}</h2>
                    <p class="text-xl leading-8">{i18n.t('mission:mediakit-description')} <a
                            class="text-xl leading-8 font-medium text-brand-funcRed"
                            href="https://exchange.sensor.community/index.php/s/bkKqHFRT97aBAbR" target="_blank">
                        {i18n.t('mission:mediakit-download')} &nbsp&rarr;
                    </a>
                    </p>
                    <p class="text-xl leading-8">{i18n.t('mission:mediakit-press')} <a
                            href='mailto:press@Sensor.Community'>Press@Sensor.Community</a>
                    </p>
                    <h3>{i18n.t('mission:mediakit-logos')}</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
                        <div class="bg-brand-green rounded-lg max-w-xs shadow-md">
                            <div class="relative p-10 flex justify-center">
                                <img alt="Sensor.Community Logo" class="relative" loading="lazy"
                                     src="images/logos/signet.png">
                            </div>
                        </div>
                        <div class="bg-brand-white rounded-lg max-w-xs shadow-md">
                            <div class="relative p-10 flex justify-center">
                                <img alt="Sensor.Community Logo in Black" class="relative" loading="lazy"
                                     src="images/logos/signet-black.png">
                            </div>
                        </div>
                        <div class="bg-brand-black rounded-lg max-w-xs shadow-md">
                            <div class="relative p-10 flex justify-center">
                                <img alt="Sensor.Community Logo in White" class="relative" loading="lazy"
                                     src="images/logos/signet-white.png">
                            </div>
                        </div>
                    </div>

                    <div class="w-full my-16 relative bg-brand-green rounded-lg shadow-md">
                        <div class="relative flex justify-center max-w-xs mx-auto h-64">
                            <img alt="Sensor.Community Logo" class="relative" loading="lazy"
                                 src="images/logos/logo.svg">
                        </div>
                    </div>

                    <h3>{i18n.t('mission:mediakit-colors')}</h3>
                    <div class="grid grid-cols-2 gap-10 mt-12">
                        <div class="bg-brand-green rounded-lg shadow-md">
                            <div class="relative p-20 flex justify-center text-brand-white">
                                #084945
                            </div>
                        </div>
                        <div class="bg-brand-yellow rounded-lg shadow-md">
                            <div class="relative p-20 flex justify-center text-brand-white">
                                #E9A135
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-10 mt-12">
                        <div class="bg-brand-green rounded-lg shadow-md">
                            <div class="relative p-20 flex justify-center text-brand-white">
                                #084945
                            </div>
                        </div>
                        <div class="bg-brand-yellow rounded-lg shadow-md">
                            <div class="relative p-20 flex justify-center text-brand-white">
                                #E9A135
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden">
                <div class="relative">
                    <PressArticles/>
                </div>
            </div>
        </div>
    </div>
</div>




