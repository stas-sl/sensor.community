<script>
    import Cards from "../components/Cards.svelte"

    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const campaigns = [
        {
            hashtag: "#NO2",
            title: "Measuring NO2",
            imageURL: "images/campaigns.webp",
            linkURL: "/campaign/no2",
            description: "We've measured NO2 with diffusion tubes in 9 countries."
        },
        {
            hashtag: "#Zero200",
            title: "Start your local group!",
            imageURL: "images/campaigns.webp",
            linkURL: "/campaign/zero200",
            description: "#publications supports you in launching your local group."
        },
        {
            hashtag: "#Sensor@Refs",
            title: "Reference stations",
            imageURL: "images/campaigns.webp",
            linkURL: "/campaign/sensorAtRefs",
            description: "This campaign brings sensors at reference station in this world."
        }
    ]

    // {
    //     hashtag: "#Sensor2School",
    //         title: "Sensor2School",
    //     imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
    //     description: "We want to bring sensors at every school in this world."
    // },
    // {
    //     hashtag: "#Sensor2Library",
    //         title: "Sensors to library",
    //     imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
    //     linkURL: "/campaign/sensor2library",
    //     description: "We want to bring sensors at every library in this world."
    // }
</script>

<div class="relative pt-8 pb-24 overflow-hidden">
    <div class="relative max-w-7xl mx-auto">
        <div class="px-4">
            <h3 class="text-3xl tracking-tight font-extrabold sm:text-4xl text-left sm:text-center">
                {i18n.t('campaigns:title')}
            </h3>
            <p class="mt-3 text-left sm:text-center text-xl sm:mt-4">
                {i18n.t('campaigns:description')}
            </p>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid lg:grid-cols-3 lg:max-w-none">
            {#each campaigns as campaign}
                <Cards
                        description={campaign.description}
                        imageUrl={campaign.imageURL}
                        link={lang}{campaign.linkURL}
                        title={campaign.title}
                        hashTag={campaign.hashtag}

                />
            {/each}
        </div>
    </div>
</div>
