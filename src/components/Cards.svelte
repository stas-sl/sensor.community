<script>
    import {createEventDispatcher} from "svelte";

    export let link;
    export let title;
    export let hashTag;
    export let imageUrl;
    export let description;
    const dispatch = createEventDispatcher();

</script>
<div class="relative px-4 my-6">
    <a href="{link}">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
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
                        <p class="text-xl font-bold">
                            {title}
                        </p>
                        <p class="mt-3 text-base text-gray-600">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
