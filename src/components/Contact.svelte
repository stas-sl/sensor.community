<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);
</script>

<div class="bg-brand-yellowLight">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="max-w-lg relative pt-16 pb-6 mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
            <!-- General Contact -->
            <div class="pb-12 md:pb-6">
                <h4 class="text-2xl font-extrabold sm:text-3xl">
                    {i18n.t('contact:general')}
                </h4>
                <div class="mt-3">
                    <p class="text-lg">
                        {i18n.t('contact:general-description')}
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
                            <a href="mailto:Contact@Sensor.Community" target="_blank">
                                Contact@Sensor.Community
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Partnership -->
            <div class="pb-12 md:pb-6">
                <h4 class="text-2xl font-extrabold sm:text-3xl">
                    {i18n.t('contact:partnership')}
                </h4>
                <div class="mt-3">
                    <p class="text-lg">
                        {i18n.t('contact:partnership-description')}
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
                            <a href="mailto:Partnership@Sensor.Community" target="_blank">
                                Partnership@Sensor.Community
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tech Support -->
            <div class="pb-12 md:pb-6">
                <h4 class="text-2xl font-extrabold sm:text-3xl">
                    {i18n.t('contact:tech')}
                </h4>
                <div class="mt-3">
                    <p class="text-lg">
                        {i18n.t('contact:tech-description')}
                    </p>
                </div>
                <div class="mt-6">
                    <div class="mt-6 flex">
                        <div class="text-base text-brand-funcRed">
                            <a href="{lang}/knowledge/faq/">
                                {i18n.t('contact:tech-faq')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
