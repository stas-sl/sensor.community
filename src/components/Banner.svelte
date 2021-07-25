<script>
    import {createEventDispatcher} from "svelte";
    import Button from "./Button.svelte"

    export let link;
    export let linkName;
    export let title;
    export let description;
    const dispatch = createEventDispatcher();
</script>


<div class="bg-brand-yellowLight">
    <div class="max-w-3xl lg:max-w-7xl p-8 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="xl:flex xl:items-center xl:justify-between text-center md:text-left">
            <div>
                <h3 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight ">
                    <span>{title}</span>
                </h3>
                <p class="mt-5 text-xl">{description}</p>
            </div>
            <Button link={link} linkName={linkName}/>
        </div>
    </div>
</div>