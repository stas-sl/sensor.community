<script>
    import {slide} from "svelte/transition";

    export let faq
    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>
<style>
    svg {
        transition: transform 0.2s ease-in;
    }

    [aria-expanded=true] svg {
        transform: rotate(0.5turn);
    }
</style>
<div class="pt-6">
    <dt class="text-lg">
        <button on:click={toggle} aria-expanded={isOpen}
                class="text-left w-full flex justify-between items-start text-lg">
            <span class="font-extrabold text-brand-black">{faq.title}</span>
            <span class="ml-6 h-7 flex items-center">
            <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                </span>
        </button>
    </dt>
    {#if isOpen}
        <dd class="mt-2 pr-12" id="faq-{faq.id}" transition:slide={{ duration: 300 }}>
            <p class="text-base prose max-w-7xl text-brand-black">
                {@html faq.content}
            </p>
        </dd>
    {/if}
</div>

