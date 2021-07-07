<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Contact from "../../components/Contact.svelte"

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

</script>

<svelte:head>
    <title>{i18n.t('donate:metaTitle')}</title>
    <meta name="description" content="{i18n.t('donate:metaDescription')}">
    <meta content={i18n.t('donate:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>


<div class="relative py-16 bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('donate:h1')}
            </h1>
            <p class="text-2xl mt-6">{i18n.t('donate:description')}
            <p>
            <div class="mt-6 prose prose-indigo prose-lg mx-auto">
                <h2>{i18n.t('donate:section')}</h2>

                <div class="mt-12 grid grid-cols-2">
                    <div class="relative">
                        <div class="flex flex-col">
                            <h3>{i18n.t('donate:campaign')}</h3>
                            <div class="flex-1 flex flex-col">
                                <div id="betterplace_donation_iframe"
                                     style="background: transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat;">
                                    <iframe frameborder="0"
                                            height="100%"
                                            id="iFrameResizer0" scrolling="no"
                                            src="https://www.betterplace.org/de/projects/38071/iframe_donations/new?background_color=ffffff&amp;color=4ecac2&amp;donation_amount=100&amp;bottom_logo=true&amp;recurring_interval=single&amp;utm_campaign=external_donation_forms&amp;utm_source=domain: luftdaten.info&amp;utm_medium=project_38071&amp;utm_content=luftdaten.info&amp;"
                                            style="max-width: 600px; max-height: none; width: 100%; background-color: transparent; overflow: hidden; height: 1200px;"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative pl-4">
                        <div class="flex flex-col">
                            <h3>{i18n.t('donate:donation')}</h3>
                            <div class="flex-1 flex flex-col">
                                <div class="max-w-xl bg-white ">
                                    <div class="">
                                        <p class="block text-sm text-gray-600">{i18n.t('donate:holder')}</p>
                                        <p class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded">Open Knowledge
                                            Foundation
                                            Germany e.V.</p>
                                    </div>
                                    <div class="mt-2">
                                        <p class="block text-sm text-gray-600">{i18n.t('donate:iban')}</p>
                                        <p class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded">DE 36 4306 0967
                                            1173 8932
                                            00</p>
                                    </div>
                                    <div class="mt-2">
                                        <p class=" block text-sm text-gray-600">{i18n.t('donate:bic')}</p>
                                        <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">GENODEM1GLS</p>
                                    </div>
                                    <div class="mt-2">
                                        <p class=" block text-sm text-gray-600">{i18n.t('donate:bank')}</p>
                                        <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">GLS Community
                                            Bank</p>
                                    </div>
                                    <div class="mt-2">
                                        <p class=" block text-sm text-gray-600">{i18n.t('donate:intendedUse')}</p>
                                        <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">OK Lab
                                            Stuttgart</p>
                                    </div>
                                    <div class="mt-2">
                                        <p class=" block text-sm text-gray-600">{i18n.t('donate:donationDescription')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
