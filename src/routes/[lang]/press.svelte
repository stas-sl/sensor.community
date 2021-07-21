<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import PressArticles from "../../components/PressArticles.svelte";
    import Banner from "../../components/Banner.svelte";
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
            name: "Pierre-Jean",
            position: "Data Viz & Partnerhsip FR",
            imageURL: "images/team/pierre-jean-gueno.jpg"
        },
        {
            name: "Various Contributors",
            position: "around the world",
            imageURL: "/icons/github.svg"
        }
    ]

    const banner =
        {
            link: "/#",
            linkName: "Download Presskit",
            title: "Need more information",
            description: "Includes high res logos, bla, bla, bla....",
        }

    const articles = [
        {
            link: "/#",
            linkName: "Download Presskit",
            title: "Need more information",
            description: "Includes high res logos, bla, bla, bla....",
        }
    ]

    const fetchNumbers = (async () => {
        const response = await fetch('https://stats.sensor.community/numbers.json')
        return await response.json()
    })()

    function formatNumber(n) {
        return String(n).replace(/\d+?(?=(?:\d{3})+$)/img, "$&.");
    }

    function nFormatter(num, digits) {
        const si = [
            {value: 1, symbol: ""},
            {value: 1E3, symbol: "k"},
            {value: 1E6, symbol: "M"}
        ];
        let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$4") + si[i].symbol;
    }
</script>

<svelte:head>
    <title>{i18n.t('mission:metaTitle')}- Sensor.Community</title>
    <meta name="description" content="{i18n.t('mission:metaDescription')}">
    <meta content={i18n.t('mission:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>
<!-- Todo: literal strings -->

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
            <h2>Our Story</h2>
            <p class="mt-8 text-xl leading-8">
                Back in 2019, it was just an idea. Today, thanks to the team and contributors, it’s a leading civic tech
                sensor network, that can be found in dozen of cities around the world.
            </p>
            <p class="mt-8 text-xl leading-8">
                The aim of the program is to promote developments in the areas of transparency, Open Data and Citizen
                Science. Regional groups consisting of designers, developers, journalists and others meet regularly in
                community labs. They develop apps that inform, positively shape and support society and make the work of
                administrations and authorities more transparent.</p>
            <ul class="text-xl leading-8">
                <li>How can air quality be measured and visualized in residential areas?</li>
                <li>What effects does the traffic or other sources have on our air?</li>
                <li>How high is the level of particulate matter and nitrogen oxides in residential areas?
                </li>
            </ul>
            <p class="text-xl leading-8">We are addressing these and other questions by building particulate matter
                sensors and visualizing the data into an overall picture.</p>
        </div>
    </div>
</div>
{#await fetchNumbers}
    <p>{i18n.t('index:inNumbers-fetching')}</p>
{:then data}
    <div class="relative overflow-hidden bg-brand-yellowLight">
        <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
                <div class="mt-6 prose prose-lg mx-auto">
                    <h2>Some numbers to impress</h2>
                </div>
                <dl class="my-16 text-center grid grid-cols-2 md:grid-cols-4 sm:gap-8">
                    <div class="flex flex-col">
                        <dt class="order-2 mb-6 md:mb-0 text-lg leading-6 font-medium">
                            Active sensors worldwide
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold">
                            {nFormatter(data.numbers.sensors, 1)}
                        </dd>
                    </div>
                    <div class="flex flex-col mb-6 md:mb-0">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium">
                            Countries
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold">
                            {nFormatter(data.numbers.countries)}
                        </dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium">
                            Data Points
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold">
                            {nFormatter(data.numbers.measurements)}
                        </dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium">
                            Community Labs
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold">
                            {nFormatter(data.numbers.local_labs)}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>

{:catch error}
    <p>{i18n.t('index:inNumbers-error')}</p>
{/await}

<div class="relative py-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <div class="mt-6 prose prose-lg mx-auto text-brand-black">
                <h2>Code a difference</h2>
                <p class="text-xl leading-8">You and thousands of sponsors worldwide install dyi measuring devices on
                    the outside wall of their house. From the transmitted data, Sensor.Community generates a constantly
                    updating fine dust map. This is how fine dust becomes visible...</p>
                <blockquote>
                    <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                        tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
                </blockquote>
                <p class="text-xl leading-8">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit.</p>
                <figure>
                    <img alt="Sensor.Community Team" class="w-full rounded-lg" height="873" src="images/team.jpg"
                         width="1310">
                    <figcaption>Whether it’s in libraries, code clubs, or conferences, Sensor.Community is connected
                        around the world.
                    </figcaption>
                </figure>
                <h2>Everything you need to get up and running</h2>
                <p class="text-xl leading-8">Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
                    Amet,massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
                    tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget
                    dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum
                    convallis quam.</p>
                <p class="text-xl leading-8">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit.</p>
            </div>
            <div class="text-lg max-w-prose mx-auto pt-12">
                <div class="space-y-12">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
                        <p class="text-xl">We are a contributors driven global sensor network that creates Open
                            Environmental Data</p>
                    </div>
                    <ul class="space-y-16 sm:grid sm:grid-cols-3 gap-8 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                        {#each contributors as contributor}
                            <li>
                                <div class="space-y-6 text-center">
                                    <img class="mx-auto h-40 w-40 rounded-full xl:w-40 xl:h-40"
                                         src={contributor.imageURL}
                                         alt="">
                                    <div class="space-y-2">
                                        <div class="text-lg leading-6 font-medium space-y-1">
                                            <h3>{contributor.name}</h3>
                                            <p class="text-indigo-600">{contributor.position}</p>
                                        </div>
                                        <ul class="flex justify-center space-x-5">
                                            <li>
                                                <a href="#" class="text-gray-400 hover:text-gray-500">
                                                    <span class="sr-only">Twitter</span>
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                         aria-hidden="true">
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-400 hover:text-gray-500">
                                                    <span class="sr-only">LinkedIn</span>
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="relative px-4 sm:px-6 lg:px-8 py-12">
        <div class="mt-6 prose prose-indigo prose-lg mx-auto text-brand-black">
            <h2>Logo</h2>
            <p class="text-xl leading-8">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in.
                Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
                Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
                <a class="text-xl leading-8 font-medium text-brand-funcRed" href="{lang}/press/">
                    Download press kit!&nbsp&rarr;
                </a>
            </p>
            <div class="sm:grid sm:grid-cols-3 lg:grid-cols-3">
                <div class="flex-shrink m-3 relative overflow-hidden bg-brand-green rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-10 flex justify-center">
                        <img alt="Sensor.Community Logo" class="relative" loading="lazy" src="images/logos/signet.png">
                    </div>
                </div>
                <div class="flex-shrink m-3 relative overflow-hidden bg-brand-white rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-10 flex justify-center">
                        <img alt="Sensor.Community Logo in Black" class="relative" loading="lazy"
                             src="images/logos/signet-black.png">
                    </div>
                </div>
                <div class="flex-shrink m-3 relative overflow-hidden bg-brand-black rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-10 flex justify-center">
                        <img alt="Sensor.Community Logo in White" class="relative" loading="lazy"
                             src="images/logos/signet-white.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Colors</h2>
            <div class="sm:grid sm:grid-cols-3 lg:grid-cols-3">
                <div class="flex-shrink m-3 relative overflow-hidden bg-brand-green rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-10 p-20 flex justify-center text-brand-white">
                        #084945
                    </div>
                </div>
                <div class="flex-shrink m-3 relative overflow-hidden bg-brand-yellow rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-10 p-20 flex justify-center text-brand-white">
                        #E9A135
                    </div>
                </div>
                <div class="flex-shrink m-3 relative overflow-hidden bg-brand-greenBright rounded-lg max-w-xs shadow-lg">
                    <div class="relative p-10 p-20 flex justify-center text-brand-white">
                        #6FEFE6
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Banner
        description={banner.description}
        link={lang}{banner.link}
        linkName={banner.linkName}
        title={banner.title}
/>

<div class="relative overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <PressArticles/>
    </div>
</div>

