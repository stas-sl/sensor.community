<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const contacts = [
        {
            title: "General Contact",
            description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
            link: "mailto:Contact@Sensor.Community",
            linkName: "Contact@Sensor.Community"
        },
        {
            title: "Partnership",
            description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
            link: "mailto:Partnership@Sensor.Community",
            linkName: "Partnership@Sensor.Community"
        },
        {
            title: "Technical Support",
            description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
            link: "https://forum.sensor.community",
            linkName: "Forum"
        }
    ]
</script>

<div class="bg-brand-yellowLight">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="max-w-lg relative pt-16 pb-6 mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
            {#each contacts as contact}
                <div class="pb-12 md:pb-6">
                    <h2 class="text-2xl font-extrabold sm:text-3xl">
                        {contact.title}
                    </h2>
                    <div class="mt-3">
                        <p class="text-lg">
                            {contact.description}
                        </p>
                    </div>
                    <div class="mt-6">
                        <div class="mt-6 flex">
                            <div class="flex-shrink-0">
                                <svg aria-hidden="true" class="h-6 w-6 text-brand-funcRed" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                          stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"/>
                                </svg>
                            </div>
                            <div class="ml-3 text-base text-brand-funcRed">
                                <a href="{contact.link}" target="_blank">
                                    {contact.linkName}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
