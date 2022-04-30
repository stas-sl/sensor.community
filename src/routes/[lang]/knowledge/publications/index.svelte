<script>
    import initI18n from "../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Articles from "../../../../components/EvaluationsArticles.svelte";

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
            linkNames: ["Conference Paper - May 29, 2018"],
            links: ["https://www.researchgate.net/project/Evaluation-of-low-cost-PM-sensors"]
        },
        {
            language: "German",
            title: "Engineering von Neuen Bürgerbeteiligungsinstrumenten am Beispiel von Elektromobilität, Feinstaub und Luftreinhaltung",
            researcher: "Norbert Fröschle",
            description: "Vom Aspekt der Partizipation die aus der Zivilgesellschaft kommt, wird es sicherlich eine der interessantesten Fragen sein, welchen Einﬂuss soziale Bewegungen gewinnen, die Feinstaub unabhängig von Staat und Wirtschaft selber messen, im Sinne von Citizen Science kartieren und via Online-Karten, Realzeitgraﬁken und weiter verarbeitbaren Rohdaten öffentlich zur Verfügung stellen (OK Lab Stuttgart 2015 ff.). Der Ansatz ist direkt auf die Nutzung von Schwarmintelligenz gerichtet. Es entstehen so neuartige non-governmentale Netzwerke lokaler Bürgerinnen und Bürger, die Bürgerbeteiligungsinstrumente selbst projektieren und die versuchen, Open Data und rückgekoppeltes Bürgererleben für soziale Innovation und digitale Transformation voranzutreiben.",
            linkNames: ["Engineering of New Participation Instruments Exemplified by Electromobility, Particulate Matter and Clean Air Policy-Making"],
            links: ["https://link.springer.com/article/10.1365%2Fs40702-017-0325-2"]
        },
        {
            language: "German",
            title: "Untersuchungen zur Messung von Feinstaub – Das Citizen Science Projekt luftdaten.info",
            researcher: "Max Blon",
            description: "Masterstudiengang Umweltschutz (M.Eng.), Hochschule Esslingen, BUND Regionalverband Neckar-Alb",
            linkNames: ["in Modell der Hochschulen Esslingen, Nürtingen, Reutlingen, Stuttgart - Stand: 11. Juli 2017"],
            links: ["https://www.bund-neckar-alb.de/fileadmin/neckaralb/MasterarbeitBlonFeinstaubmessungimVergleich2017.pdf"]
        },
        {
            language: "German",
            title: "Messungen mit dem Feinstaubsensor SDS011",
            researcher: "-",
            description: "LUBW Landesanstalt für Umwelt, Messungen und Naturschutz Baden-Württemberg. Ein Vergleich mit einem eignungsgeprüften Feinstaubanalysator",
            linkNames: ["Messungen mit dem Feinstaubsensor SDS011 "],
            links: ["https://pudi.lubw.de/detailseite/-/publication/90536?_de_xdot_lubw_pudi_frontend_web_portlet_DetailPortlet_backURL=https%3A%2F%2Fpudi.lubw.de%2Fpublikationen%3Fp_p_id%3Dde_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_mvcPath%3D%252Fhtml%252Fsearch%252Fview.jsp%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_keywords%3D%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_extendedSearch%3Dfalse%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_fullTextSearch%3Dfalse%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_cur%3D2%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_delta%3D200%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_orderByCol%3Dpublisher-publications-first%26_de_xdot_lubw_pudi_frontend_web_portlet_SearchPortlet_orderByType%3Dasc"]
        },
        {
            language: "German",
            title: "Welche Rolle spielte Feinstaub bei der Grippewelle 2016/2017?",
            researcher: "Ewald Thoma",
            description: "Diskussionspapier",
            linkNames: ["Diskussionspapier"],
            links: ["http://www.ethoma.de/AGVL_Home/index.php/luftreinhaltung/alle-artikel-zu-diewser-kategorie/139-welche-rolle-spielte-feinstaub-bei-der-grippewelle-2016-2017"]
        }
    ]
</script>

<svelte:head>
    <title>{i18n.t('publications:metaTitle')} - Sensor.Community</title>
    <meta name="description" content="{i18n.t('publications:metaDescription')}">
    <meta content={i18n.t('publications:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="https://sensor.community{$page.path}" property="og:url"/>
    <meta content="https://sensor.community{$page.path}" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black ">
    <div class="relative px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('publications:h1')}
            </h1>
            <p class="mt-8 text-xl leading-8">
                {i18n.t('publications:description')}
            </p>
        </div>
    </div>
</div>

<div class="relative px-4 pb-16 overflow-hidden">
    <div class="relative sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            {#each articles as article}
                <Articles title="{article.title}" description="{article.description}"
                          researcher="{article.researcher}" language="{article.language}"
                          linkNames="{article.linkNames}"
                          links="{article.links}"/>
            {/each}
        </div>
    </div>
</div>
