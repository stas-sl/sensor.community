<script>
    import {createEventDispatcher} from "svelte";

    export let link;
    export let linkName;
    const dispatch = createEventDispatcher();
</script>

<a class="mt-8 bg-brand-green px-12 py-4 inline-flex items-center justify-center text-base font-medium rounded-3xl text-brand-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
   href="{link}">{linkName}
</a>