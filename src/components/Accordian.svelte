<script>
    import {slide} from "svelte/transition";
    import {onMount} from 'svelte';
    import {stores} from "@sapper/app";
    import initI18n from "../utils/initI18n";

    let {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    export let faq
    let isOpen = false
    const toggle = () => isOpen = !isOpen

    onMount(async () => {
        const element = document.querySelector('#faq' + location.hash.replace('#', ''))
        const rect = element.getBoundingClientRect() // get rects(width, height, top, etc)
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        window.scroll({
            top: rect.top + rect.height / 2 - viewHeight / 2,
            behavior: 'smooth' // smooth scroll
        });
    });
</script>
<style>
    svg {
        transition: transform 0.2s ease-in;
    }

    [aria-expanded=true] svg {
        transform: rotate(0.5turn);
    }

    .hash::after {
        content: "#";
    }
</style>
<div class="pt-6">
    <dt class="text-lg" id="{lang}/knowledge/faq#{faq.id}">
        <button on:click={toggle} aria-expanded={isOpen}
                class="text-left w-full flex justify-between items-start text-lg">
            <h2 class="group font-bold text-brand-black flex whitespace-pre-wrap" id="faq{faq.id}">
                <a href="{lang}/knowledge/faq#{faq.id}" class="absolute text-brand-funcRed no-underline hash opacity-0 group-hover:opacity-100"
                   style="margin-left:-1em;padding-right:0.5em" aria-label="Anchor"></a><span>{faq.title}</span>
            </h2>
            <!--<span class="font-bold text-brand-black">{faq.title}</span>-->
            <span class="ml-6 h-7 flex items-center">
            <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                </span>
        </button>
    </dt>
    <dd class="mt-2 pr-12 faq{faq.id} {isOpen ? 'block' : 'hidden'}" transition:slide={{ duration: 300 }}>
        <p class="text-base prose max-w-7xl text-brand-black">
            {@html faq.content}
        </p>
    </dd>
</div>
