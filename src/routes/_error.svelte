<script>
    import Button from "../components/Button.svelte";
    import {stores} from "@sapper/app";
    import initI18n from "../utils/initI18n";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    $: pathWithoutLang = $page.path
        .split("/")
        .slice(2)
        .join("/");

    export let status;
    export let error;
    const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status} - Sensor.Community</title>
</svelte:head>


<!--<div class="py-16 lg:py-24">-->
<!--    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-green">-->
<!--        <div class="relative py-24 px-8 bg-brand-greenPastel rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:gap-x-8">-->
<!--            <div class="relative lg:col-span-1">-->
<!--                <div class="inline-flex space-x-4">-->
<!--                    <img alt="sensor community logo" class="h-8 w-auto"-->
<!--                         src="images/logos/signet-green.svg">-->
<!--                    <span class="py-1 font-semibold text-brand-green tracking-wide uppercase">-->
<!--                      Sensor.Community-->
<!--                    </span>-->
<!--                </div>-->
<!--                <h2 class="text-8xl font-bold mt-5">{status} - {error.message}</h2>-->
<!--                <div class="mt-10">-->
<!--                    <p class="text-xl font-medium sm:text-2xl"> {i18n.t('error:errorMessage')}</p>-->
<!--                    <p class="text-xl font-medium sm:text-2xl"> {i18n.t('error:submitError')} <a-->
<!--                            class="text-brand-funcRed"-->
<!--                            href="mailto:Contact@Sensor.Community?subject=Error%20on%20Page">{i18n.t('error:contact')} </a> {i18n.t('error:or')}-->
<!--                        <a class="text-brand-funcRed" href="forum.sensor.community"-->
<!--                           target="_blank">{i18n.t('error:forum')} <span-->
<!--                                class="transform -rotate-45">&rarr;</span></a>{i18n.t('error:thanks')}-->
<!--                    </p>-->
<!--                    <footer class="mt-6">-->
<!--                        {i18n.t('error:sc-team')}-->
<!--                    </footer>-->

<!--                    <div class="my-10">-->
<!--                        <Button link="{lang}/" linkName="{i18n.t('error:home')}"/>-->

<!--                    </div>-->
<!--                    <div class="container">-->
<!--                        {#if dev && error.stack}-->
<!--                            <pre>{error.stack}</pre>-->
<!--                        {/if}-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->


<main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl mx-auto py-16 sm:py-24">
        <div class="text-center">
            <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{status}</p>
            <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{i18n.t('error:errorMessage')}</h1>
            <p class="mt-2 text-lg text-gray-500">{error.message} </p>
        </div>
        <div class="mt-12">
            <ul role="list" class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                <li class="relative py-6 flex items-start space-x-4">
                    <div class="flex-shrink-0">
              <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                <svg class="h-6 w-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </span>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="text-base font-medium text-gray-900">
                <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <a href="en/knowledge/" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                      {i18n.t('error:knowledge')}
                  </a>
                </span>
                        </h3>
                        <p class="text-base text-gray-500">{i18n.t('error:knowledge-description')}</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                </li>
                <li class="relative py-6 flex items-start space-x-4">
                    <div class="flex-shrink-0">
              <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                <svg class="h-6 w-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </span>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="text-base font-medium text-gray-900">
                <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <a href="en/sensors/" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                      {i18n.t('error:guides')}
                  </a>
                </span>
                        </h3>
                        <p class="text-base text-gray-500">{i18n.t('error:guides-description')}</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                </li>

                <li class="relative py-6 flex items-start space-x-4">
                    <div class="flex-shrink-0">
              <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                <svg class="h-6 w-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                </svg>
              </span>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="text-base font-medium text-gray-900">
                <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <a href="https://forum.sensor.community/" target="_blank" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Forum
                  </a>
                </span>
                        </h3>
                        <p class="text-base text-gray-500">{i18n.t('error:forum-description')}</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                </li>
            </ul>
            <div class="mt-8">
                <a href="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500">{i18n.t('error:home')}<span
                        aria-hidden="true">&nbsp;&rarr;</span></a>
            </div>
        </div>
    </div>
</main>

