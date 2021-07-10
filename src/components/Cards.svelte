<script>
    import {createEventDispatcher} from "svelte";

    export let link;
    export let title;
    export let hashTag;
    export let imageUrl;
    export let description;
    const dispatch = createEventDispatcher();

</script>
<div class="relative px-4 my-6 text-left">
    <a sapper:prefetch href="{link}">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0 aspect-w-3 aspect-h-2">
                <img alt="{title}"
                     class="h-full w-full object-contain"
                     src="{imageUrl}">
            </div>
            <div class="flex-1 p-6 flex flex-col justify-between">
                <div class="flex-1">
                    <p class="text-sm font-medium text-brand-yellow">
                        {hashTag}
                    </p>
                    <div class="block mt-2">
                        <h3 class="text-xl font-bold">
                            {title}
                        </h3>
                        <p class="mt-3 text-base text-gray-600">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
