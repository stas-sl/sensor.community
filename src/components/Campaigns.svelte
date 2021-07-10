<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";
    import Cards from "./Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const campaigns = [
        {
            hashtag: "#NO2",
            title: "Measuring NO2",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
            linkURL: "/campaign/no2",
            description: "We've measured NO2 with diffusion tubes in 9 countries."
        },
        {
            hashtag: "#Zero200",
            title: "Start your local group!",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
            linkURL: "/campaign/zero200",
            description: "#evaluation supports you in launching your local group."
        },
        {
            hashtag: "#Sensor@Refs",
            title: "Reference stations",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
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


<div class="relative py-16 overflow-hidden">
    <div class="relative max-w-7xl mx-auto mt-10">
        <div class="text-center">
            <h3 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {i18n.t('campaigns:title')}
            </h3>
            <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
                ducimus sed.
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
