<script>
    import initI18n from "../../../../../utils/initI18n";
    import {stores} from "@sapper/app";

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
                <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A new ambient noise sensor</span>
            </h1>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p class="mt-8 text-xl text-gray-500 leading-8">The time has now come: The development of a low-cost noise sensor for measuring ambient noise has been completed as a beta version. Our network, which has so far focused on the measurement of particulate matter, is thus extended by an important environmental parameter.</p>
            <p>The <a href="https://sensor.community/{lang}/sensors/dnms" target="_blank">Digital Noise Measurement Sensor (DNMS)</a> is based on state-of-the-art technology. The microphone used is based on so-called
                <a href="http://en.wikipedia.org/wiki/Microelectromechanical_systems">MEMS technology</a>, which is also used in smartphones. The microphone signals are processed by a powerful processor, which meets the special requirements of acoustic calculations and has considerable potential for the development of enhancements. The measured values are forwarded to the communication processor used in our network, from there they are transferred to our network like the previous fine dust parameters and visualized and stored or archived on our server. Due to this modularization, the sensor can be operated as a stand-alone noise sensor or in combination with a fine dust sensor. In the first case the communication processor is included in the noise sensor, in the second case it contains only the microphone unit and the acoustic processor and uses the communication processor of the fine dust sensor via a data cable (I2C bus).</p>
            <p>The sensor was developed in close cooperation with the Stuttgart University of Applied Sciences. Comparative measurements between the prototypes of the noise sensor and a class 1 reference measuring device of the institute were carried out in the sound laboratory. In an iterative procedure, the signals of the microphone were adapted with the help of software in such a way that the requirements necessary for the measurement of ambient noise can be achieved. We will publish the test results of the laboratory and field measurements as soon as they are processed. This was time-consuming but important work, as the raw values of the microphone are far from being able to meet these requirements, one of the reasons why there are such large differences in quality between the numerous smartphone apps for noise measurement available on the market. The software determines the quality.
            </p>

            <p>In the first version, the sensor provides the following <strong>3 sound level measurement values</strong>, each over the cycle time of 2.5 minutes used in our network and each with A-weighting, as is common in the field of ambient or traffic noise measurement:
            <ul>
                <li><strong>LAeq</strong>: The equivalent continuous A-weighted sound level. This is the sound energy averaged over time. The LAeq is the essential measured value in noise measurements. Limit values from directives, regulations and laws mostly refer to the LAeq.</li>
                <li><strong>LAmax</strong>: Highest single level within the 2.5 minute cycle, where the internal cycle rate of a single level is 35 milliseconds.</li>
                <li><strong>LAmin</strong>: Lowest single level within the 2.5 minute clock cycle, where the internal clock rate of a single level is 35 milliseconds.</li>
            </ul>

            <p>The usual evaluations, such as hourly and daily means as well as average values for day/night are carried out via the server application of the luftdaten.info network.</p>
            <p>Since the sensor is used outdoors, a weatherproof housing is necessary. Weather protection solutions available on the market are very expensive. Inexpensive components from the hardware store are used, as was already the case with the fine dust sensor. In field tests since mid-May 2019 with prototypes, the microphones turned out to be amazingly weatherproof when mounted horizontally and have not had any weather-related failures so far, although there were sometimes extreme weather conditions, such as record heat, thunderstorms, continuous rain or storms. An influence of the weather protection on the acoustics is present, but the magnitude is kept within limits, at least under normal weather conditions, and can be compensated by a correction if necessary.</p>
            <p>The technology used has high potential for expansion. For example, the acoustic processor can already provide audio data via a USB interface. By means of FFT, sound can be viewed in the frequency domain in a next version. With AI means, noise types / noise events can be distinguished in the future. Reactive applications based on specific noise events are also conceivable.</p>
            <p>One goal, for example, is to verify the noise maps currently calculated via models in the area of traffic noise and to work on the possibility of dynamically adapting these to measured values. These model maps are currently the exclusive basis for decisions in administrative procedures when it comes to traffic noise, and thus in particular also the basis for initiating noise abatement measures. In order to achieve this goal, however, it is necessary to achieve a certain area coverage of sensors, especially along heavily traveled traffic routes. Our concept is ideally suited for this purpose. In the case of particulate matter, we have succeeded in motivating a very large number of interested citizens to measure particulate matter and thus achieve a high level of area coverage. The recipe for success was and is in detail:</p>
            <ul>
                <li>Use of sensors that <strong>any interested citizen can afford financially.</strong>
                    The noise sensor is more expensive than the fine dust sensor, but the pure material costs are only about 70 EURO. With higher quantities, the price can be reduced significantly.</li>
                <li><strong>Easiest possible assembly and installation of the sensor.</strong>
                    Installation and registration of the sensor in the network is just as simple as for the fine dust sensor. At present, some manual skill is still required for assembly. A solution is being worked on which, as with the fine dust sensor, does not require soldering. Several housing variants are possible. From the inexpensive DIY version to a visually appealing 3D print solution.</li>
                <li>Suitability for <strong>stationary continuous operation in outdoor areas.</strong>
                    This is an important prerequisite especially for the measurement of ambient noise. Temporary measurements with mobile devices are not sufficient for assessing ambient noise. It is also helpful that the sensor does not need to be calibrated. In addition, there is simple data transmission to the server via WLAN using a local router and power supply via USB cable.</li>
                <li><strong>Visualization of the measured values via map and storage or archiving on the server.</strong></li>
                <li><strong>Open data and software.</strong>Anyone interested (including organizations) can add their own evaluations/applications based on the existing basic software or generally participate in further development.</li>
            </ul>
            <p>Against this background, the stage is set for ambient noise measurement to become a success story similar to that of particulate matter measurements. All interested parties are cordially invited to participate and contribute their know-how to the project.</p>
            <figure>
                <img class="w-full rounded-lg" src="https://luftdaten.info/wp-content/uploads/2019/10/bcaobbmeliefcnnc.png" alt="" width="1310" height="873">
                <figcaption>Prototypes of the noise sensor in different housings</figcaption>
            </figure>
            <p>About this picture: It shows the location of the field test with prototypes of the noise sensor in different housings. On the far left is the class 1 microphone from the company NTI. Next to it on the right is a 3-D printed housing from the company CIRP and further to the right various DIY store housings. Behind the bushes, at a distance of about 80m, is the Leonberg train station with commuter and freight train traffic.
            </p>
            <h3>Ambient noise: Explanations of the values shown on the map</h3>
            <p>In the beta version, the sensor provides the following 3 sound level measurement values, each over the cycle time of 2.5 minutes used in the network and each with A-weighting, as is usual in the field of ambient or traffic noise measurement:</p>

            <ul>
                <li><strong>LAeq</strong>: The noise equivalent continuous sound level A-weighted. This is the sound energy averaged over this time interval. The LAeq is the essential measured value in noise measurements. Limit values from directives, regulations and laws mostly refer to the LAeq.</li>
                <li><strong>LAmax</strong>: Highest single level within the 2.5 minute clock cycle, where the internal clock rate of a single level is 35 milliseconds.</li>
                <li><strong>LAmin</strong>: Lowest single level within the 2.5 minute cycle, where the internal clock rate of a single level is 35 milliseconds. The unit of measurement is decibels.</li>
            </ul>
            <p>The tiles in the map are colored according to the value of LAeq. The scale for this is located at the bottom left. If there are several sensors in a tile, the median of all sensors contained in the cell is calculated and the tile is colored accordingly. Clicking on a tile will display the median and a list of the sensors in the cell with their respective sensor ID and LAeq. Pressing the '+' sign opens a graph showing the history of the LAeq, the LAmax and the LAmin over the last 24 hours. Individual time periods can be zoomed out of the graph.</p>
            <blockquote>
                <p><strong>Attention:</strong>  We show the values of the last 2.5 minutes on the map. The legal limit and guide values are generally annual averages. Therefore, direct conclusions on these limit and guide values are not directly possible.</p>
            </blockquote>
            <p>Further information on the measured variables</p>
            <ul>
                <li><a href="http://en.wikipedia.org/wiki/Noise_pollution">Wikipedia article noise</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Sound_pressure">Wikipedia article on sound pressure</a></li>
            </ul>
        </div>
    </div>
</div>
