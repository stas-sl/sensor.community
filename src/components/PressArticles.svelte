<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";
    import Cards from "./Cards.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const articles = [
        {
            title: "Bürger können selber Lärm messen",
            linkURL: "https://www.stuttgarter-zeitung.de/inhalt.ok-lab-und-hochschule-testen-prototyp-buerger-koennen-selber-laerm-messen.8d3b8e53-c502-4732-acf3-f47169adb5fe.html",
            linkName: "Jan Georg Plavec, 20. Dezember 2019 – Stuttgarter Zeitung",
            img: "https://www.stuttgarter-zeitung.de/staticcontent/stuttgarter_zeitung/common/img/logos/stuttgarter-zeitung.svg",
            description: "Nach Feinstaub will das OK Lab jetzt Lärm messen. Der Sensor-Prototyp wird in der Hochschule für Technik gebaut und getestet. Erste Daten sind schon im Internet einsehbar. Das OK Lab, eine Gruppe von technikbegeisterten Bastlern, hat vor einigen Jahren einen Bausatz für Feinstaubsensoren entwickelt, der weltweit tausende Male nachgebaut wurde. Die damit erhobenen Daten nutzt auch unsere Redaktion für das Projekt Feinstaubradar. Als nächstes will das OK Lab Lärm messen. Wiederum hat die Gruppe den Bausatz für einen entsprechenden Sensor entwickelt. Die Anleitung dafür gibt es schon jetzt auf der Website des OK Lab. Allerdings handelt es sich um einen Prototypen – der zunächst ausgiebig getestet werden muss und noch weiterentwickelt wird."
        },
        {
            title: "New DIY movement in Shenzhen wants to upgrade air pollution tracking in China",
            linkURL: "https://www.stuttgarter-zeitung.de/inhalt.ok-lab-und-hochschule-testen-prototyp-buerger-koennen-selber-laerm-messen.8d3b8e53-c502-4732-acf3-f47169adb5fe.html",
            linkName: "Bailey Hu, 29. August 2018 – technode",
            img: "https://i1.wp.com/technode.com/wp-content/uploads/2020/03/technode-logo-header.png",
            description: "From global to local – Although Hu is the first to bring them to China, the environmental station’s basic design, plus an online map that displays air quality data from devices around the world, comes from an open-source German project called Luftdaten.info.\n"
        },
        {
            title: "Fakten offenlegen und damit aufrütteln",
            linkURL: "https://www.stuttgarter-zeitung.de/inhalt.ok-lab-und-hochschule-testen-prototyp-buerger-koennen-selber-laerm-messen.8d3b8e53-c502-4732-acf3-f47169adb5fe.html",
            linkName: "Jana Wolf, 20. Juni 2018 – Mittelbayerische",
            img: "https://www.stuttgarter-zeitung.de/staticcontent/stuttgarter_zeitung/common/img/logos/stuttgarter-zeitung.svg",
            description: "Jeder Bürger soll Zugriff auf belastbare Fakten bekommen und diese selbst erzeugen können. Mit den Daten der Bürger versuchen wir zu arbeiten. Für mich als Kommunikationsdesigner ist es reizvoll, Daten so zu visualisieren, dass man sie schnell und in Echtzeit erfassen kann. So kann jedes Kind komplexe Feinstaubwerte verstehen."
        },
        {
            title: "Die Luft unter der MZ-Lupe",
            linkURL: "https://www.mittelbayerische.de/bayern-nachrichten/die-luft-unter-der-mz-lupe-21705-art1661113.html",
            linkName: "Jana Wolf, 20. Juni 2018 – Mittelbayerische",
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mittelbayerische_Zeitung_logo.svg",
            description: "Mit einer Einkaufsliste und einer Bauanleitung, die man auf der Webseite luftdaten.info findet, kann man sich die Bauteile anschaffen und den Sensor nachbauen. Die Seite wird von Open-Data-Aktivisten um Jan A. Lutz betrieben. Die Stuttgarter wollen mit ihrer Initiative Bürgern die Möglichkeit geben, selbst Daten zu erheben und diese einer breiten Öffentlichkeit zur Verfügung stellen."
        },
        {
            title: "Die Luft unter der MZ-Lupe",
            linkURL: "https://www.mittelbayerische.de/bayern-nachrichten/die-luft-unter-der-mz-lupe-21705-art1661113.html",
            linkName: "Jana Wolf, 20. Juni 2018 – Mittelbayerische",
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mittelbayerische_Zeitung_logo.svg",
            description: "Mit einer Einkaufsliste und einer Bauanleitung, die man auf der Webseite luftdaten.info findet, kann man sich die Bauteile anschaffen und den Sensor nachbauen. Die Seite wird von Open-Data-Aktivisten um Jan A. Lutz betrieben. Die Stuttgarter wollen mit ihrer Initiative Bürgern die Möglichkeit geben, selbst Daten zu erheben und diese einer breiten Öffentlichkeit zur Verfügung stellen."
        },
        {
            title: "Die Luft unter der MZ-Lupe",
            linkURL: "https://www.mittelbayerische.de/bayern-nachrichten/die-luft-unter-der-mz-lupe-21705-art1661113.html",
            linkName: "Jana Wolf, 20. Juni 2018 – Mittelbayerische",
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mittelbayerische_Zeitung_logo.svg",
            description: "Mit einer Einkaufsliste und einer Bauanleitung, die man auf der Webseite luftdaten.info findet, kann man sich die Bauteile anschaffen und den Sensor nachbauen. Die Seite wird von Open-Data-Aktivisten um Jan A. Lutz betrieben. Die Stuttgarter wollen mit ihrer Initiative Bürgern die Möglichkeit geben, selbst Daten zu erheben und diese einer breiten Öffentlichkeit zur Verfügung stellen."
        },
    ]
</script>


<div class="relative py-16 overflow-hidden">
    <section class="container mx-auto mt-10">
        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    {i18n.t('pressArticles:title')}
                </h2>
                <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                    {i18n.t('pressArticles:description')}
                </p>
            </div>

            <div class="mt-12 max-w-lg mx-auto lg:max-w-none">
                <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 grid sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-px">
                    {#each articles as article}
                        <div class="relative group bg-brand-white p-6 md:flex md:flex-col hover:bg-brand-yellowLight">
                            <div class="relative p-3 border-gray-400">
                                <img src="{article.img}" class="filter saturate-0 md:flex-shrink-0 h-6">
                            </div>
                            <blockquote class="md:flex-grow md:flex md:flex-col">
                                <div class="mt-8 relative md:flex-grow md:flex-grow">
                                    <h3 class="text-lg font-medium">
                                        <a href="{article.linkURL}" target="_blank">
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            {article.title}
                                        </a>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-600 md:flex-grow">
                                        {article.description}
                                    </p>
                                </div>
                                <footer class="mt-10">
                                    <a href="{article.linkURL}" target="_blank"
                                       class="mt-10 text-sm">{article.linkName}</a>
                                </footer>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                      aria-hidden="true">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"/>
      </svg>
    </span>
                            </blockquote>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</div>

