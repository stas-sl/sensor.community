<script>
    export let sections = [];
    let ul;
</script>

<div class="hidden sm:block">
    <div class="border-b border-gray-200">
        <nav aria-label="Tabs" class="-mb-px flex space-x-12">
            {#each sections as section}
                <a href="{section.lang}/sensors/{section.path}#{section.slug}"
                   class="text-gray-600 hover:text-brand-funcRed hover:border-brand-funcRed py-4 px-1 font-medium text-sm">
                    {@html section.metadata.title}
                </a>
            {/each}
        </nav>
    </div>
</div>
