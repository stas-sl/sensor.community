<script>
    import initI18n from "../../../../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Banner from "../../../../../components/Banner.svelte";

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);
    // $: i18n = initI18n($page.params.lang);

</script>

<!-- Todo: literal strings -->
<!-- Todo: replace demo texts -->

<div class="relative py-16 bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Air Quality</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What is air pollution?</span>
            </h1>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>What is air pollution?</h2>
            <p>Air pollution is in most cases invisible. It is the presence in the atmosphere of gases, dust and
                particles at a percentage that may be harmful to humans, animals and plants.
                Common air pollutants in the atmosphere are carbon monoxide (CO), ground-level ozone (O3), nitrogen
                dioxide (NO2), particulate matter (PM), and sulphur dioxide (SO2).
                The information that was provided by Sensor.Community only referred to particulate matter. Air pollution
                can contribute to the formation of photochemical smog and the reduction of visibility, the formation of
                acid rain and the damage of buildings and monuments, water quality deterioration, decrease of soil
                productivity, flora and fauna damages.
            </p>

            <p>
                <iframe width="739" height="416" src="https://www.youtube-nocookie.com/embed/e6rglsLy1Ys"
                        title="YouTube video player" allow="picture-in-picture" allowfullscreen></iframe>
            </p>

            <h2>Particulate matter</h2>
            <p>
                PM stands for Particulate Matter and the number for the size. The particle size is measured in µm.
                Particulate Matter is almost invisible. Particulate Matter comes in both large and fine sizes.
                The particles are divided into three classes:
            </p>

            <ul>
                <li>Particles with a diameter of 10 micrometers, i.e. ten millionths of a meter or less (PM10).</li>
                <li>Particles that are four times smaller, i.e. PM2.5 with a diameter of less than 2.5 micrometers.</li>
                <li>Particles that are one micrometer and smaller: so-called ultra-fine dust PM1.</li>
            </ul>

            <h2>
                Sources of air pollution
            </h2>
            <p>
                Human activity is a major cause of air pollution, much of which results from industrial processes, fossil fuels burning, agriculture and landfills. Naturally causes can be such as wildfires, dust storms, animal digestion and volcanic eruptions.
            </p>

            <ul>
                <li>Particulate matter: Road dust, wear and tear of brakes and tyres on vehicles, construction activities, sea salt, forest fires, pollen, etc.</li>
                <li>Carbon monoxide: Produced during incomplete combustion of any fuel like natural gas, charcoal, gasoline, coal.</li>
                <li>Ozone: Created by chemical reactions between oxides of nitrogen (NOx) and volatile organic compounds (VOCs). Emissions from industrial facilities, motor vehicle exhaust and chemical solvents are some of the major sources of NOx and VOCs.</li>
                <li>Nitrogen dioxide: Motor vehicles and any combustion of fossil fuels.</li>
                <li>Sulphur dioxide: Combustion of fossil fuels, volcanic eruptions.</li>
            </ul>

            <h2>Air pollution limits</h2>
            <p>
                Both the <a href="http://www.who.int/mediacentre/factsheets/fs313/en/">World Health Organization (WHO)</a> and the <a href="http://ec.europa.eu/environment/air/quality/standards.htm">European Union (EU)</a> have established some limit concentrations for key air pollutants above which they may pose some health risks to sensitive populations.

            </p>

            <ul>
                <li>Particulate matter: Road dust, wear and tear of brakes and tyres on vehicles, construction activities, sea salt, forest fires, pollen, etc.</li>
                <li>Carbon monoxide: Produced during incomplete combustion of any fuel like natural gas, charcoal, gasoline, coal.</li>
                <li>Nitrogen dioxide: Motor vehicles and any combustion of fossil fuels.</li>
                <li>Sulphur dioxide: Combustion of fossil fuels, volcanic eruptions.</li>
            </ul>

            <h2>Health impacts of air pollution</h2>
            <p>Air pollution is a major risk to our health as it may in long-term provoke the development or aggravate
                asthma and other respiratory diseases, heart disease and lung cancer, cause strokes, and even shorten
                life span. Especially particulate matter has been linked with significant health problems. Around 90% of
                Europeans living in cities are exposed to levels of air pollution deemed
                damaging to human health.
                Even if you are healthy, you may experience temporary symptoms from short-term exposure to particulate
                pollution, such as irritation of the eyes, nose and throat, coughing, chest tightness and shortness of
                breath. Exposure to long-term particle pollution may cause irritation of the airways, decreased lung
                function, aggravated asthma, and development of chronic bronchitis.
            </p>

            <h2>What you can do</h2>
            <h3>Reduce pollution</h3>
            <ol>
                <li>Leave the car at home and use an alternative such as walking, cycling, carpooling or public
                    transportation.
                </li>
                <li>Avoid as far as possible accelerating/decelerating when you drive in the city. Drive at 120 km/h in
                    the highway.
                </li>
                <li>Produce less pollution.</li>
                <li>Keep the car engine in good condition by performing the regular maintenance.</li>
            </ol>

            <h3>At home</h3>
            <p>Avoid wood burning. If you have to burn wood, follow useful precautions to reduce pollution and
                particulate emissions, e.g. never</p>
            <ol>
                <li>Set your thermostat no higher than 20°C during the day, and turn it down when you’re out or
                    asleep.
                </li>
                <li>Keep your water heater at 50°C, and use cold water whenever possible.</li>
                <li>Turn off non-essential lights and unplug electronic devices when not in use. Prefer to use energy
                    efficient light bulbs and appliances.
                </li>
                <li>Avoid garden tools that run on gasoline. Use hand-powered garden tools.</li>
                <li>Keep your furnace, and your heating, humidifying and air conditioning units well maintained.</li>
                <li>Clean dust from the coil at the back side of the refrigerator one-two times yearly.</li>
                <li>Avoid BBQ when air pollution levels are high.</li>
            </ol>
        </div>
    </div>
</div>


<Banner
        description={i18n.t('index:banner-description')}
        link={lang}/sensors/
 linkName={i18n.t('index:cta')}
        title={i18n.t('index:banner-title')}
/>

<div class="relative py-16 bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <h3>Change behavior</h3>
                <ol>
                    <li>Buy local products that use less packaging and less energy for transportation.</li>
                    <li>Use video conferencing or Skype for business meetings where possible, in order to avoid
                        unnecessary
                        travel.
                    </li>
                    <li>Plant trees or create a garden; trees and plants help purify the air.</li>
                    <li>Recycle and reuse!</li>
                    <li>Limit Exposure</li>
                    <li>Avoid exercising outdoors when air pollution levels are high. Always avoid exercising near
                        high-traffic areas.
                    </li>
                    <li>Breathe through your nose to filter the largest particles.</li>
                    <li>Eat vitamin-rich foods that can help your body to be more resilient to air pollution.</li>
                    <li>Regularly check the air quality in your area</li>
                </ol>


                <figure>
                    <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1568064591272-02018820220f?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">
                    <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
                </figure>

                This is some general advice on how you can limit your exposure to unhealthy pollutants. These
                recommendations do not constitute a medical or emergency advice. Users should only use them for
                informational purposes.


                <p>Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra
                    aliquam
                    porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet,
                    mattis.
                    Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.</p>
                <h2>From beginner to expert in 30 days</h2>
                <p>Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna
                    nibh.
                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed
                    diam
                    turpis ipsum eu a sed convallis diam.</p>
                <blockquote>
                    <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                        tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
                </blockquote>
                <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed
                    amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit
                    neque
                    erat velit.</p>

                <h2>Everything you need to get up and running</h2>
                <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci
                    dapibus
                    volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra
                    ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor
                    venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
                <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed
                    amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit
                    neque
                    erat velit.</p>
            </div>
        </div>
    </div>
</div>
