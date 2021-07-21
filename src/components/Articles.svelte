<script>
    import Cards from "../components/Cards.svelte"

    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    $: pathWithoutLang = $page.path
        .split("/")
        .slice(2)
        .join("/");


    const campaigns = [
        {
            hashtag: "#Air",
            title: "Measuring Air Quality",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
            linkURL: "knowledge/articles/air-quality",
            description: "We've measured NO2 with diffusion tubes in 9 countries."
        },
        {
            hashtag: "#Noise",
            title: "Prototyping noise measurement sensor",
            imageURL: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ayUVM5ycQJ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800",
            linkURL: "knowledge/articles/noise-quality",
            description: "Our noise measurement sensor"
        }
    ]
</script>

<div class="relative py-16 overflow-hidden">
    <div class="relative max-w-7xl mx-auto mt-10">
        <div class="px-4">
            <h3 class="text-3xl tracking-tight font-extrabold sm:text-4xl text-left sm:text-center">
                {i18n.t('error:h1')}
            </h3>
            <p class="mt-3 text-left sm:text-center text-xl sm:mt-4">
                {i18n.t('error:description')}
            </p>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid lg:grid-cols-3 lg:max-w-none">
            {#each campaigns as campaign}
                <Cards
                        description={campaign.description}
                        imageUrl={campaign.imageURL}
                        link={$page.path}{campaign.linkURL}
                        title={campaign.title}
                        hashTag={campaign.hashtag}
                />
            {/each}
        </div>
    </div>
</div>
