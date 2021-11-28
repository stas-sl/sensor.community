<script context="module">
    export async function preload({params}) {
        const res = await this.fetch(`endpoints/faqs/${params.lang}.json`);

        if (res.status === 200) {
            const faqs = await res.json();
            return {faqs};
        } else {
            const faqs = await this.fetch(`endpoints/faqs/en.json`).then(r => r.json())
            return {faqs}
        }
    }
</script>

<script>
    import {stores} from "@sapper/app";
    import initI18n from "../../../../utils/initI18n";
    import Item, {isOpen} from "../../../../components/Accordian.svelte"
    import {onMount} from "svelte";

    let {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
    export let faqs;

    onMount(() => {
        let elem = document.querySelector('.faq' + location.hash.replace("#", ""));
        elem.classList.toggle("block");
        elem.classList.toggle("hidden");
        let isOpen


        const element = document.querySelector('#faq' + location.hash.replace('#', ''))
        const rect = element.getBoundingClientRect() // get rects(width, height, top, etc)
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        window.scroll({
            top: rect.top + rect.height / 2 - viewHeight / 2,
            behavior: 'smooth' // smooth scroll
        });
    });
</script>

<svelte:head>
    <title>{i18n.t('faqs:metaTitle')} - Sensor.Community</title>
    <meta content="{i18n.t('faqs:metaDescription')}" name="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sensor.community{$page.path}">
    <meta property="og:title" content="{i18n.t('faqs:metaTitle')} - Sensor.Community">
    <meta property="og:description" content="{i18n.t('faqs:metaDescription')}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sensor.community{$page.path}">
    <meta property="twitter:title" content="{i18n.t('faqs:metaTitle')} - Sensor.Community">
    <meta property="twitter:description" content="{i18n.t('faqs:metaDescription')}">
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black">
    <div class="relative px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('faq:h1')}
            </h1>
            <p class="mt-8 text-xl leading-8"> {i18n.t('faq:description')}</p>
            <a class="text-base font-medium text-brand-funcRed"
               href="https://forum.sensor.community/" target="_blank">
                {i18n.t('faq:forum')} &rarr;
            </a>
        </div>
    </div>
</div>


<div class="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <dl class="space-y-6 divide-y divide-gray-200">
            {#each faqs as faq}
                <Item {faq}/>
            {/each}
        </dl>
    </div>
</div>

