<script>
    import initI18n from "../../utils/initI18n";
    import {stores} from "@sapper/app";
    import Campaigns from "../../components/Campaigns.svelte";
    import Contact from "../../components/Contact.svelte";
    import Banner from "../../components/Banner.svelte";
    import Button from "../../components/Button.svelte";
    import * as countries from '../../../content/countries.js';
    import * as link_cities_labs from '../../../content/link_cities_labs_formated.js';
    import {onMount} from "svelte";
    //import * as Pancake from '@sveltejs/pancake';

    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    // $: i18n = initI18n($page.params.lang);

    let countSensor = {};
    // const selector = {};
    const sensorTypes = {
        "PM": ["sds011", "sps30", "hpm", "pms7003"],
        "noise": ["laerm"],
        "radiation": ["radiation_si22g"],
        "temphumipress": ["dht22", "bme280"]
    };

    const today = new Date();
    const yesterday = dateFormater(today);

    //const url_count = 'https://archive.sensor.community/' + yesterday + '/sensors_per_country.txt';

    const urlGlobalJSON = 'https://stats.sensor.community/sensors_per_country_per_day.json';
    const urlLabs ="https://opendata-stuttgart.github.io/luftdaten-local-labs/labs.json";

    const countriesDiv ='<div class="sm:rounded-lg"><table id="countriesTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country links</th></tr></thead><tbody></tbody></table></div>';
    const regionsDiv ='<div class="sm:rounded-lg"><table id="regionsTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region links</th></tr></thead><tbody></tbody></table></div>';
    const citiesDiv ='<div class="sm:rounded-lg"><table id="citiesTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City links</th></tr></thead><tbody></tbody></table></div>';
    const labsDiv ='<div class="sm:rounded-lg"><table id="labsTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Labs</th></tr></thead><tbody></tbody></table></div>';


    var allLabs =[];


    if (process.browser) {

        // fetch(url_count)
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.log(data[yesterday]);

        //         // countSensor.PM += data.hpm + data.pms1003 + data.pms3003 + data.pms5003 + data.pms6003 + data.pms7003 + data.sds011 + data.sps30;
        //         countSensor = data[yesterday];

        //         document.getElementById('value1').innerHTML = countSensor.sds011.WORLD.toString();
        //         document.getElementById('value2').innerHTML = countSensor.bme280.WORLD.toString();

        //     });

            //it will load 5.7 MB each time...

            fetch(urlGlobalJSON)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // countSensor.PM += data.hpm + data.pms1003 + data.pms3003 + data.pms5003 + data.pms6003 + data.pms7003 + data.sds011 + data.sps30;
                 countSensor = data[data.length-1][yesterday];

                 document.getElementById('value1').innerHTML = countSensor.sds011.WORLD.toString();
                 document.getElementById('value2').innerHTML = countSensor.bme280.WORLD.toString();
                 document.getElementById('value3').innerHTML = countSensor.laerm.WORLD.toString();


                 Object.keys(link_cities_labs).forEach(function(i){

                if (i != "default"){

                let country = countries.array.find(obj => {
                        return obj.id === i
                        })

                let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell(0);
                newCell.addEventListener("click", function(){zoomer(country.id)});
                newCell.innerHTML=  country.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ link_cities_labs[i].link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                    }
                });

            });


            

        fetch(urlLabs)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                allLabs = data;

                data.forEach(function(i){
                
                let newCell = document.getElementById("labsTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                newCell.addEventListener("click", function(){zoomerLab("world",i.lat,i.lon)});
                newCell.innerHTML=  i.title + '   ' + '<a href="'+ i.contacts.url +'"><button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn">Send an Email</button></a>';
                })

            });



    document.getElementById("copyLink").addEventListener("click", getLink);


    }

    function selectedCountry(e) {

        document.getElementById("divLinks").innerHTML = "";
        document.getElementById("divLabs").innerHTML = "";


        const selection = countries.array.find(obj => {
            return obj.id === e.target.value
        });

        if (selection.code != 'WORLD') {
            //document.getElementById('map-frame1').src = 'https://stats.sensor.community/sensors_per_country/?simple=yes&country=' + selection.code;
            document.getElementById('map-frame2').src = 'https://' + selection.id + '.maps.sensor.community/';
            
            let country = link_cities_labs[selection.id];

            console.log(country);

            console.log(country.regions.length);
            console.log(country.cities.length);


            if (country.regions.length > 0 && country.cities.length > 0 ){
                document.getElementById("divLinks").innerHTML = regionsDiv + citiesDiv;
            }else if(country.regions.length == 0 && country.cities.length > 0 ){
                document.getElementById("divLinks").innerHTML = citiesDiv;
            }else if(country.regions.length > 0 && country.cities.length == 0 ){
                document.getElementById("divLinks").innerHTML = regionsDiv;
            }else if(country.regions.length == 0 && country.cities.length == 0 ){
                document.getElementById("divLinks").innerHTML = countriesDiv;
            }


            if (country.regions.length > 0 && country.cities.length > 0 ){
                country.regions.forEach(function(i){
                    let newCell = document.getElementById("regionsTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                    newCell.addEventListener("click", function(){zoomer(i.link)});
                    newCell.innerHTML=  i.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ i.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                });

                country.cities.forEach(function(i){
                    let newCell = document.getElementById("citiesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                    newCell.addEventListener("click", function(){zoomer(i.link)});
                    newCell.innerHTML=  i.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ i.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                });


            }else if(country.regions.length == 0 && country.cities.length > 0 ){
                country.cities.forEach(function(i){
                    let newCell = document.getElementById("citiesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                    newCell.addEventListener("click", function(){zoomer(i.link)});
                    newCell.innerHTML=  i.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ i.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                });


            }else if(country.regions.length > 0 && country.cities.length == 0 ){
                country.regions.forEach(function(i){
                    let newCell = document.getElementById("regionsTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                    newCell.addEventListener("click", function(){zoomer(i.link)});
                    newCell.innerHTML=  i.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ i.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                });

            }else if(country.regions.length == 0 && country.cities.length == 0 ){

                let country = countries.array.find(obj => {
                        return obj.id === selection.id
                        })

                 let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                 newCell.addEventListener("click", function(){zoomer(country.id)});
                    newCell.innerHTML=  country.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ country.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
            }



            if (country.labs.length > 0){
                document.getElementById("divLabs").innerHTML = labsDiv;
                country.labs.forEach(function(i){
                
                let newCell = document.getElementById("labsTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                newCell.addEventListener("click", function(){zoomerLab(country.id,i.lat,i.lon)});
                newCell.innerHTML=  i.title + '   ' + '<a href="'+ i.contacts.url +'"><button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn">Send an Email</button></a>';

                });
            }else{
                document.getElementById("divLabs").innerHTML = "No local lab!";
            }

        } else {
            //document.getElementById('map-frame1').src = 'https://stats.sensor.community/sensors_per_country/';
            document.getElementById('map-frame2').src = 'https://maps.sensor.community/';
            document.getElementById("divLinks").innerHTML = countriesDiv;
            document.getElementById("divLabs").innerHTML = labsDiv;

            Object.keys(link_cities_labs).forEach(function(i){
                if (i != "default"){
                    console.log(link_cities_labs[i]);

                let country = countries.array.find(obj => {
                        return obj.id === i
                        })

                let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                newCell.addEventListener("click", function(){zoomer(country.id)});
                newCell.innerHTML=  country.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ link_cities_labs[i].link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                    }
                });


                allLabs.forEach(function(i){

                console.log(i);
                let newCell = document.getElementById("labsTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                newCell.addEventListener("click", function(){zoomerLab("world",i.lat,i.lon)});
                newCell.innerHTML=  i.title + '   ' + '<a href="'+ i.contacts.url +'"><button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn">Send an Email</button></a>';
                })

        }

        let PMCount = 0;
        let TRHPCount = 0;
        let radiationCount = 0;
        let noiseCount = 0;

        if (countSensor.sds011.hasOwnProperty(selection.code)) {
            document.getElementById('value1').innerHTML = countSensor.sds011[selection.code].toString()
        } else {
            document.getElementById('value1').innerHTML = "0"
        }

        if (countSensor.bme280.hasOwnProperty(selection.code)) {
            document.getElementById('value2').innerHTML = countSensor.bme280[selection.code].toString()
        } else {
            document.getElementById('value2').innerHTML = "0"
        }

         if (countSensor.laerm.hasOwnProperty(selection.code)) {
            document.getElementById('value3').innerHTML = countSensor.laerm[selection.code].toString()
        } else {
            document.getElementById('value3').innerHTML = "0"
        }
    }

    function dateFormater(date) {
        //one day before
        date.setDate(date.getDate() - 1);
        //same day
        //date.setDate(date.getDate());
        var result = date.getUTCFullYear().toString() + "-" + pad(date.getUTCMonth(), 2, true) + "-" + pad(date.getUTCDate(), 2, false);
        return result;
    }


    function pad(num, size, month) {
        if (month == true) {
            num += 1;
            num = num.toString();
        } else {
            num = num.toString();
        }
        while (num.length < size) num = "0" + num;
        return num;
    }


    function delaySelector() {
        if (process.browser) {
            setTimeout(function () {
                document.getElementById("countrySelector").addEventListener("change", selectedCountry);
            }, 900);
        }
    }

    function zoomer(location) {
       // if (process.browser) {
          document.getElementById('map-frame2').src = 'https://' + location + '.maps.sensor.community/';
      //  }
    }

        function zoomerLab(location,lat,lon) {
       // if (process.browser) {
          document.getElementById('map-frame2').src = 'https://' + location + '.maps.sensor.community/#16/'+ lat+'/'+ lon;
      //  }
    }

    function getLink(){

        //let url = document.getElementById("map-frame2").contentWindow.location.href;
        //CORS !!!!!!

        document.getElementById("linkArea").value = "https://....";
    }

</script>
<svelte:head>
    <title>{i18n.t('index:metaTitle')}</title>
    <meta content="{i18n.t('dashboard:metaDescription')}" name="description">
    <meta content={i18n.t('dashboard:metaTitle')} property="og:title"/>
    <meta content="website" property="og:type"/>
    <meta content="" property="og:url"/>
    <meta content="" property="og:image"/>
</svelte:head>

<div class="pb-6">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto text-center md:text-left max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div class="mt-10">
                <div class="inline-flex space-x-4">
                    <img alt="sensor community logo" class="h-8 w-auto"
                         src="images/logos/signet.svg">
                    <span class="py-1 font-semibold text-brand-yellow tracking-wide uppercase">
                  Sensor.Community
                </span>
                </div>
                <div class="mt-6">
                    <div class="mt-6 sm:max-w-xl">
                        <h1 class="text-5xl font-extrabold text-brand-black tracking-tight sm:text-5xl">
                            {i18n.t('dashboard:h1')}
                        </h1>
                        <p class="mt-6 text-xl antialiased">
                            {i18n.t('dashboard:description')}️
                        </p>
                        <div class="mt-6">
                           <div class="relative inline-block text-left">
                                <div class="inline-flex justify-center w-full rounded-md border border-gray-300 p-3 bg-brand-white text-sm font-medium text-gray-700"
                                     aria-expanded="true" aria-haspopup="true">
                                    <select id="countrySelector" name="country" onLoad="{delaySelector()}">
                                        {#each countries.array as country}
                                            <option class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    role="menu" aria-orientation="vertical"
                                                    aria-labelledby="menu-button" tabindex="-1"
                                                    value="{country.id}">{country.name}
                                            </option>
                                        {/each}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 space-y-6">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full">
                                        <div class="relative mx-auto">
                                            <div class="mt-10 text-center">
                                                <dl class="grid md:grid-cols-3 grid-cols-2 gap-4">
                                                    <div class="pt-6">
                                                        <dd class="text-4xl lg:text-5xl font-extrabold"
                                                            id="value1"></dd>
                                                        <dt class="text-base font-medium text-gray-600">{i18n.t('dashboard:pmSensors')}</dt>
                                                    </div>

                                                    <div class="pt-6">
                                                        <dd class="text-4xl lg:text-5xl font-extrabold" id="value2">13
                                                        </dd>
                                                        <dt class="text-base font-medium text-gray-600">{i18n.t('dashboard:tempSensors')}</dt>
                                                    </div>

                                                    <div class="pt-6">
                                                        <dd class="text-4xl lg:text-5xl font-extrabold" id="value3">14
                                                        </dd>
                                                        <dt class="text-base font-medium text-gray-600">{i18n.t('dashboard:noiseSensors')}</dt>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10">
                            <a class="text-base font-medium text-brand-funcRed" href="{lang}/sensors/">
                                {i18n.t('index:about-link')} &nbsp&rarr;
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-12 lg:mt-24 lg:hidden">
                    <div class="flex items-center justify-center animate-bounce transition duration-100 ease-in-out cursor-pointer"
                         type="button">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="hidden sm:block">
                    <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" fill="none" height="392"
                         viewBox="0 0 404 392"
                         width="404">
                        <defs>
                            <pattern height="20" id="837c3e70-6c3a-44e6-8854-cc48c737b659" patternUnits="userSpaceOnUse"
                                     width="20" x="0"
                                     y="0">
                                <rect class="text-gray-200" fill="currentColor" height="4" width="4" x="0" y="0"/>
                            </pattern>
                        </defs>
                        <rect fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" height="392" width="404"/>
                    </svg>
                </div>
                <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-nonelg:pl-12">
                    <div class="w-full bg-brand-white lg:w-auto lg:max-w-none">


                        <!-- <iframe id="map-frame1"
                                src="https://stats.sensor.community/sensors_per_country/?simple=yes&country="
                                style="height: 700px; width: 70%"
                                title="sensor.community growth rate chart">
                        </iframe> -->



                    </div>
                </div>
                <figure class="px-4 md:px-16 mt-4 text-sm text-gray-600">
                    <figcaption>{i18n.t('dashboard:imageSubtitle')}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</div>

<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mb-24">
    <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div class="pr-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <iframe id="map-frame2" src="https://maps.sensor.community/?nooverlay=true#2/28.3/-1.1"
                    style="height: 700px; width: 100%; overflow-scrolling: touch"
                    title="sensor.community particulate matter map"></iframe>
        </div>
    </div>
    <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Direct links</h2>
            <p class="mt-4 text-lg text-gray-500">Semper curabitur ullamcorper posuere nunc sed. Ornare
                iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare
                pharetra.</p>
            <div class="mt-10">
                <div class="-my-2 sm:-mx-6 lg:-mx-8">
                    <div id="divLinks" class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="sm:rounded-lg">
                            <table id="countriesTable" class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Country links
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Local labs</h2>
            <p class="mt-4 text-lg text-gray-500">Semper curabitur ullamcorper posuere nunc sed. Ornare
                iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare
                pharetra.</p>
            <div class="mt-10">
                <div class="-my-2 sm:-mx-6 lg:-mx-8">
                    <div id = "divLabs" class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div  class="sm:rounded-lg">
                            <table id="labsTable" class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Labs
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Link with coordinates</h2>
            <p class="mt-4 text-lg text-gray-500">Get your very personal Sensor.Community link ! 
                Zoom to the position you want on the map and click the button to display and copy the link!</p>
                <!-- TWEET IDENT? -->
            <div class="mt-10">
                <div class="-my-2 sm:-mx-6 lg:-mx-8">
                    <div id = "divLabs" class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div  class="sm:rounded-lg">
                            <button id="copyLink" style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn"> Copy Link !</button>
                            <textarea id="linkArea" rows="1" cols="50"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Banner
        description={i18n.t('index:banner-description')}
        link={lang}/sensors/
 linkName={i18n.t('index:cta')}
        title={i18n.t('index:banner-title')}
/>
<Campaigns/>
<Contact/>
