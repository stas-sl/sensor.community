<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Articles from "../../../../components/Articles.svelte";
    import {onMount} from "svelte";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const articles = [

        {
            language: "English",
            title: "UN-Habitat convenes virtual workshop on improving air quality and public space monitoring in European cities",
            researcher: "Norbert Fröschle",
            description: "Sensor.Community, it’s global sensor network and global community and it’s activities and campaigns has been introduced and presented to 31 representatives of WHO, UN, WorldBank, EC, EEA, JRC, at UN",
            linkNames: ["UN@HABITAT for a better urban future"],
            links: ["https://unhabitat.org/un-habitat-convenes-virtual-workshop-on-improving-air-quality-and-public-space-monitoring-in"]
        },
        {
            language: "German",
            title: "Evaluation of low-cost PM sensors",
            researcher: "Bernd Laquai, Achim Dittler, Benjamin J. Mullins, Eberhard Schmidt, Norbert Streibl, Matthias Budde",
            description: "Goal: Understanding measurement uncertainties of low-cost PM sensors deployed to air quality measurements.",
            links: ["link1", "link2"]
        },
        {
            language: "German",
            title: "Engineering von Neuen Bürgerbeteiligungsinstrumenten am Beispiel von Elektromobilität, Feinstaub und Luftreinhaltung",
            researcher: "Norbert Fröschle",
            description: "Vom Aspekt der Partizipation die aus der Zivilgesellschaft kommt, wird es sicherlich eine der interessantesten Fragen sein, welchen Einﬂuss soziale Bewegungen gewinnen, die Feinstaub unabhängig von Staat und Wirtschaft selber messen, im Sinne von Citizen Science kartieren und via Online-Karten, Realzeitgraﬁken und weiter verarbeitbaren Rohdaten öffentlich zur Verfügung stellen (OK Lab Stuttgart 2015 ff.). Der Ansatz ist direkt auf die Nutzung von Schwarmintelligenz gerichtet. Es entstehen so neuartige non-governmentale Netzwerke lokaler Bürgerinnen und Bürger, die Bürgerbeteiligungsinstrumente selbst projektieren und die versuchen, Open Data und rückgekoppeltes Bürgererleben für soziale Innovation und digitale Transformation voranzutreiben.",
            links: ["link1"]
        }
    ]
</script>

<svelte:head>
    <title>{i18n.t('evaluation:metaTitle')}</title>
    <meta name="description" content="{i18n.t('evaluation:metaDescription')}">
    <meta content={i18n.t('press:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black ">
    <div class="relative px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                Knowledge Base
            </h1>
            <p class="mt-8 text-xl leading-8">Back in 2016, it was just an idea. Today, thanks to the team and
                contributors, it’s a leading civic tech sensor network, that can be found in dozen of cities around the
                world.</p>
        </div>
    </div>
</div>

<div class="relative px-4 pb-16 overflow-hidden">
    <div class="relative sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            {#each articles as article}
                <Articles title="{article.title}" description="{article.description}"
                          researcher="{article.researcher}" language="{article.language}" linkNames="{article.linkName}"
                          links="{article.links}"/>
            {/each}
        </div>
    </div>
</div>
