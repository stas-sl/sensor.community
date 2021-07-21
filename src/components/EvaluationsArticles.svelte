<script>
    import initI18n from "../utils/initI18n";
    import {stores} from "@sapper/app";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    import {createEventDispatcher} from "svelte";

    export let links;
    export let linkNames;
    export let title;
    export let researcher;
    export let description;
    export let language;
    const dispatch = createEventDispatcher();
</script>

<div class="shadow-md overflow-hidden sm:rounded-lg mb-10">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="font-medium text-xl">
            {title}
        </h3>
    </div>
    <div class="px-4 py-5 sm:px-6">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-600">
                    {i18n.t('publicationsArticles:author')}
                </dt>
                <dd class="mt-1 text-sm">
                    {researcher}
                </dd>
            </div>
            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-600">
                    {i18n.t('publicationsArticles:language')}
                </dt>
                <dd class="mt-1 text-sm">
                    {language}
                </dd>
            </div>
            <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-600">
                    {i18n.t('publicationsArticles:about')}
                </dt>
                <dd class="mt-1 text-sm">
                    {description}
                </dd>
            </div>
            <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-600">
                    {i18n.t('publicationsArticles:attachments')}
                </dt>
                <dd class="mt-1 text-sm">
                    <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                        {#each links as link}
                            <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                <div class="w-0 flex-1 flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"/>
                                    </svg>
                                    <span class="ml-2 flex-1 w-0 truncate">
                  {linkNames}
                </span>
                                </div>
                                <div class="ml-4 flex-shrink-0">
                                    <a href="{link}" target="_blank" class="font-medium text-brand-funcRed">
                                        {i18n.t('publicationsArticles:download')}

                                    </a>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </dd>
            </div>
        </dl>
    </div>
</div>
