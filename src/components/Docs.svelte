<script>
    import {onMount} from 'svelte';
    import GuideContents from './GuideContents.svelte';
    import {getFragment} from '../utils/navigation';
    import {_, locale} from 'svelte-i18n';
    import {stores} from '@sapper/app';

    const {page} = stores();

    export const owner = 'opendata-stuttgart';
    export const project = 'sensor.community';
    export let dir = '';
    export const edit_title = 'edit this section';
    export let sections;
    let active_section;

    let container;
    let aside;

    onMount(() => {
        // don't update `active_section` for headings above level 4, see _sections.js
        const anchors = container.querySelectorAll('[id]:not([data-scrollignore])');

        let positions;

        const onresize = () => {
            const {top} = container.getBoundingClientRect();
            positions = [].map.call(anchors, anchor => {
                return anchor.getBoundingClientRect().top - top;
            });
        }

        let last_id = getFragment();

        const onscroll = () => {
            const top = -window.scrollY;

            let i = anchors.length;
            while (i--) {
                if (positions[i] + top < 40) {
                    const anchor = anchors[i];
                    const {id} = anchor;

                    if (id !== last_id) {
                        active_section = id;
                        last_id = id;
                    }

                    return;
                }
            }
        };

        window.addEventListener('scroll', onscroll, true);
        window.addEventListener('resize', onresize, true);

        // wait for fonts to load...
        const timeouts = [
            setTimeout(onresize, 500),
            setTimeout(onscroll, 2500)
        ];

        onresize();
        onscroll();

        return () => {
            window.removeEventListener('scroll', onscroll, true);
            window.removeEventListener('resize', onresize, true);

            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    });
</script>
<style>
    .icon {
        width: 0.5em;
        height: 0.5em;
        stroke: currentColor;
        stroke-width: 3;
        fill: none;
    }

    .anchor {
        width: 1.1em;
        height: 1.1em;
    }

    .hairline:last-child {
        border-color: white;
    }

</style>

<div bind:this={aside} class="mt-12">
    <GuideContents {sections}/>
</div>
<div class="max-w-3xl mx-auto max-w-6xl">
    <div class="prose md:prose-xl mx-auto">
        <div bind:this={container}>
            {#each sections as section}
                <section data-id={section.slug}>
                    <h2 class="flex">
                        <span class="text-brand-funcRed" id={section.slug}>
                            <a href="{section.lang}/sensors/airrohr#{section.slug}" aria-hidden="false">
                                <svg viewBox="0 0 512 512" class="anchor mt-1 md:mt-0">
                                    <path fill="currentColor"
                                          d="M384,228.571v-54.857h-45.714V128h-54.857v45.714h-54.857V128h-54.857v45.714H128v54.857h45.714  v54.857H128v54.857h45.714V384h54.857v-45.714h54.857V384h54.857v-45.714H384v-54.857h-45.714v-54.857H384z M283.429,283.429  h-54.857v-54.857h54.857V283.429z"/>
                                </svg>
                            </a>
                        </span>

                        {@html section.metadata.title}
                        <span class="flex justify-end space-x-8 flex-1 mt-1">
                            <a href="https://github.com/{owner}/{project}/edit/develop/content/airrohr/{$locale}/{dir}/{section.file}"
                               title="{$_('guide.editOnGithub')}">
                                <svg class="icon text-gray-400 mt-2 justify-end" viewBox='0 0 24 24' width="24"
                                     height="24">
                                    <path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'/>
                                    <polygon points='18 2 22 6 12 16 8 16 8 12 18 2'/>
                                </svg>
                            </a>
                        </span>
                    </h2>
                    {@html section.html}
                </section>
                <div class="border border-gray-200 mt-20 mb-20 hairline"></div>
            {/each}
        </div>
    </div>
</div>



