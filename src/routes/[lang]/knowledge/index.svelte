<script>
    import initI18n from "../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Cards from "../../../components/Cards.svelte";
    import Button from "../../../components/Button.svelte";


    const {page} = stores();
    $: lang = $page.params.lang;
    $: i18n = initI18n(lang);

    const sensors = [
        {
            hashtag: "",
            title: "FAQ - Help Center",
            imageURL: "images/nodemcu-sds011.jpg",
            linkURL: "/knowledge/faqs/",
            description: "Troubleshoot guide"
        },
        {
            hashtag: "",
            title: "Scientific evaluation",
            imageURL: "images/dnms.jpg",
            linkURL: "/knowledge/evaluation/",
            description: "In beta noise measurement sensor"
        }
    ]

</script>

<svelte:head>
    <title>{i18n.t('knowledge:metaTitle')}</title>
    <meta content="{i18n.t('knowledge:metaDescription')}" name="description">
    <meta content={i18n.t('knowledge:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="relative py-16 overflow-hidden text-brand-black">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                {i18n.t('knowledge:h1')}
            </h1>
            <p class="mt-8 text-xl leading-8">{i18n.t('knowledge:description')}</p>
        </div>
    </div>
</div>

<div class="relative pb-32 overflow-hidden">
    <div class="relative">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Troubleshoot Guide and FAQ</h2>
                        <p class="mt-4 text-lg text-gray-500">Semper curabitur ullamcorper posuere nunc sed. Ornare
                            iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                            duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare
                            pharetra.</p>
                        <div class="mt-6">
                            <Button link="{lang}/knowledge/faq/" linkName="Find your answer"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
                <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img alt="Inbox user interface"
                         class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                         src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"/>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-24">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Scientific Evaluation</h2>
                        <ul>
                            <li class="mt-4 text-lg text-gray-500">What role did particulate matter play in the 2016 flu
                                epidemic?
                            </li>
                            <li class="mt-4 text-lg text-gray-500">How accurately does the SDS011 measure?</li>
                        </ul>
                        <p class="mt-4 text-lg text-gray-500">How accurately does the SDS011 measure?</p>
                        <div class="mt-6">
                            <Button link="{lang}/knowledge/evaluation/" linkName="Check out the papers"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img alt="Customer profile user interface"
                         class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                         src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"/>
                </div>
            </div>
        </div>
    </div>
</div>
