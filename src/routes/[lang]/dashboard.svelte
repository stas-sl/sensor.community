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
    import {timeFormatLocale, timeParse, timeFormat} from 'd3-time-format';
    import {line} from 'd3-shape';
    import {scaleTime, scaleLinear} from 'd3-scale';
    import {select as Select,selectAll} from 'd3-selection';
    import {extent,max,min} from 'd3-array';
    import {axisBottom, axisLeft} from 'd3-axis';
    // import 'd3-transition';
    import {transition} from "d3-transition";
    //import {default as formatDefaultLocale, format, formatPrefix} from "d3-format";


    const {page} = stores();
    $: lang = $page.params.lang;
    $: path = $page.path;
    $: i18n = initI18n(lang);

    // $: i18n = initI18n($page.params.lang);

    var countSensor = {};
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


    var pm_types = [ 'sds011', 'pms1003', 'pms3003', 'pms5003', 'pms6003', 'pms7003', 'sps30', 'hpm' ];
    var temp_types = [ 'dht22', 'bmp180', 'bmp280', 'bme280', 'htu21d', 'ds18b20', 'sht10', 'sht11', 'sht30', 'sht31', 'sht35', 'sht85' ];
    var noise_types = [ 'laerm' ];
    var simple_types = [ 'pm', 'thp', 'noise' ];
    var sensor_types = [];

    var selectCountry = 'WORLD';

    var parseDate = timeParse("%Y-%m-%d");

    var has_sensors = [];
    var date_count = -1;
    
    var globalJSON = [];


     var valueline1 = line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); })
    .defined(((d) => d.value != -1));

     var valueline2 = line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); })
    .defined(((d) => d.value != -1));

     var valueline3 = line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); })
    .defined(((d) => d.value != -1));


    var margin = {top: 20, right: 10, bottom: 30, left: 50},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    var viewBoxValues = "0 0 "+ width + margin.left + margin.right +" "+height + margin.top + margin.bottom;

    var x = scaleTime().range([0, width]);
    var y = scaleLinear().range([height, 0]);



















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
                globalJSON = data;

                //last day for current count
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


                // Make Data
    


let mappedObject = dataMapper(data,selectCountry);


console.log(mappedObject);
console.log(mappedObject.pm);



var svg = Select("#graphCountry").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    // .attr("viewBox","0 0 300 600")
    .append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")");   
               
    x.domain(extent(mappedObject.pm, function(d) { return d.date; }));
    y.domain([0, max(mappedObject.pm, function(d) {return d.value;})]);

    console.log(extent(mappedObject.pm, function(d) { return d.date; }));
    console.log([0, max(mappedObject.pm, function(d) {return d.value;})]);

  svg.append("path")
     .data([mappedObject.pm])
    .attr("class", "line")  
    .attr("fill", "none")
    .attr("stroke", "red" )
    .attr("id", "linePM" )
    .attr("d", valueline1);

      svg.append("path")
     .data([mappedObject.thp])
    .attr("class", "line")  
    .attr("fill", "none")
    .attr("stroke", "blue" )
    .attr("id", "lineTHP" )
    .attr("d", valueline2);

      svg.append("path")
     .data([mappedObject.noise])
    .attr("class", "line")  
    .attr("fill", "none")
    .attr("stroke", "green" )
    .attr("id", "lineNoise" )
    .attr("d", valueline3);
  
    svg.append("g")  
   .attr("transform", "translate(" + 0 + "," + height  + ")")
    .attr("class", "axis axis--x")
    .call(axisBottom(x));           
                           
               
      svg.append("g")
  .attr("class", "axis axis--y")
   .attr("transform", "translate(" + 0 + "," + 0 + ")")
      .call(axisLeft(y))
    //   .tickFormat(Format(".0f"))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Sensors");    


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

        console.log(selection);
        selectCountry = selection.code;

        if (selection.code != 'WORLD') {
        
            let mappedObject = dataMapper(globalJSON,selectCountry);

            updateData(mappedObject);





            //document.getElementById('map-frame1').src = 'https://stats.sensor.community/sensors_per_country/?simple=yes&country=' + selection.code;
            document.getElementById('map-frame2').src = 'https://' + selection.id + '.maps.sensor.community/';
            
            let country = link_cities_labs[selection.id];

            if (country.regions.length > 0 && country.cities.length > 0 ){
                document.getElementById("divLinks").innerHTML = countriesDiv + regionsDiv + citiesDiv;
            }else if(country.regions.length == 0 && country.cities.length > 0 ){
                document.getElementById("divLinks").innerHTML = countriesDiv + citiesDiv;
            }else if(country.regions.length > 0 && country.cities.length == 0 ){
                document.getElementById("divLinks").innerHTML = countriesDiv + regionsDiv;
            }else if(country.regions.length == 0 && country.cities.length == 0 ){
                document.getElementById("divLinks").innerHTML = countriesDiv;
            }


            if (country.regions.length > 0 && country.cities.length > 0 ){
                
                let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                newCell.addEventListener("click", function(){zoomer(country.link)});
                newCell.innerHTML=  selection.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ link_cities_labs[selection.id].link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                
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

                 let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                 newCell.addEventListener("click", function(){zoomer(country.id)});
                    newCell.innerHTML=  selection.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ link_cities_labs[selection.id].link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';

                country.cities.forEach(function(i){
                    let newCell = document.getElementById("citiesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                    newCell.addEventListener("click", function(){zoomer(i.link)});
                    newCell.innerHTML=  i.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ i.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                });


            }else if(country.regions.length > 0 && country.cities.length == 0 ){

                 let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                 newCell.addEventListener("click", function(){zoomer(country.id)});
                    newCell.innerHTML=  selection.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ link_cities_labs[selection.id].link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';

                country.regions.forEach(function(i){
                    let newCell = document.getElementById("regionsTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                    newCell.addEventListener("click", function(){zoomer(i.link)});
                    newCell.innerHTML=  i.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ i.link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
                });

            }else if(country.regions.length == 0 && country.cities.length == 0 ){


                 let newCell = document.getElementById("countriesTable").getElementsByTagName('tbody')[0].insertRow().insertCell();
                 newCell.addEventListener("click", function(){zoomer(country2.id)});
                    newCell.innerHTML=  selection.name + '<button style="background-color: #4CAF50;padding: 10px;text-align: center;" class="btn" onclick=" window.open(\'https://'+ link_cities_labs[selection.id].link + '.maps.sensor.community/\',\'_blank\')"> Open in new tab</button>';
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
          document.getElementById('map-frame2').src = 'https://' + location + '.maps.sensor.community/#16/'+ lat+'/'+ lon;
    }

    function getLink(){

        //let url = document.getElementById("map-frame2").contentWindow.location.href;
        //CORS !!!!!!

        document.getElementById("linkArea").value = "https://....";
    }

    function dataMapper(data,country){


    let dataPoints = [];
    let dataPoints_grouped = [];
    let dates = [];

    simple_types.forEach( function(sensor_type) {
    console.log(sensor_type);
    dataPoints_grouped[sensor_type] = [];
    });

	for (var i = 0; i < data.length; i++) {
		var keys = Object.keys(data[i]);
//		console.log(keys[0]);
		if (keys[0] > "2016-07") {
			date_count++;
			var sensors = Object.keys(data[i][keys[0]]);
			for (var j = 0; j < sensors.length; j++) {
				if (! sensor_types.includes(sensors[j])) {
					sensor_types.push(sensors[j]);
					dataPoints[sensors[j]] = [ sensors[j].toUpperCase() ];
					for (var k = 1; k<=date_count; k++) {
						dataPoints[sensors[j]][k] = 0;
					}
					has_sensors[sensors[j]] = [];
				}
			}
			simple_types.forEach( function(sensor_type) {
				dataPoints_grouped[sensor_type][date_count] = 0;
			});
			dates[date_count] = parseDate(keys[0]);
			sensor_types.forEach( function(sensor_type) {
				if (typeof(dataPoints[sensor_type]) === 'undefined') { dataPoints[sensor_type] = [ sensor_type.toUpperCase() ] }
				if (typeof(data[i][keys[0]][sensor_type]) !== 'undefined' && typeof(data[i][keys[0]][sensor_type][country]) !== 'undefined') {
					dataPoints[sensor_type][date_count] = parseInt(data[i][keys[0]][sensor_type][country]);
					has_sensors[sensor_type][country] = 1;
					if (pm_types.includes(sensor_type)) dataPoints_grouped['pm'][date_count] += parseInt(data[i][keys[0]][sensor_type][country]);
					if (temp_types.includes(sensor_type)) dataPoints_grouped['thp'][date_count] += parseInt(data[i][keys[0]][sensor_type][country]);
					if (noise_types.includes(sensor_type)) dataPoints_grouped['noise'][date_count] += parseInt(data[i][keys[0]][sensor_type][country]);
				} else {
					dataPoints[sensor_type][date_count] = 0;
				}
			});
		}
        
    }

        dataPoints_grouped.dates = dates;
        dataPoints.dates = dates;

    let mappedObject = {pm:[],thp:[],noise:[]};

    dataPoints_grouped.dates.forEach(function(e,i){
        let objectPM = {date:null,value:0};
        let objectTHP = {date:null,value:0};
        let objectNoise = {date:null,value:0};

        objectPM.date = e;
        objectTHP.date = e;
        objectNoise.date = e;

        objectPM.value = dataPoints_grouped.pm[i];
        objectTHP.value = dataPoints_grouped.thp[i];
        objectNoise.value = dataPoints_grouped.noise[i];

    mappedObject.pm.push(objectPM);
    mappedObject.thp.push(objectTHP);
    mappedObject.noise.push(objectNoise);

    });

    return mappedObject;

    }

// function graphicBuilder(data){




// } 


function updateData(data) {

    console.log(data);

    // var t = transition()
    // .duration(1500);





 x.domain(extent(data.pm, function(d) { return d.date; }));
  //Select("#graphCountry").Select("svg").Select(".axis axis--x")
  selectAll(".axis--x")
    .transition()
.duration(750)
    .call(axisBottom(x));

  // create the Y axis
y.domain([0, max(data.pm, function(d) {return d.value;})]);
//  Select("#graphCountry").Select("svg").Select(".axis axis--y")
selectAll(".axis--y")
    .transition()
    .duration(750)
    .call(axisLeft(y));

// var svg = selectAll("svg").transition();

console.log(selectAll("#linePM"));

selectAll("#linePM") 
.transition()  // change the line
            .duration(750)
            .attr("d", valueline1(data.pm));



selectAll("#lineTHP") 
.transition()  // change the line
            .duration(750)
            .attr("d", valueline1(data.thp));
            
selectAll("#lineNoise") 
.transition()  // change the line
            .duration(750)
            .attr("d", valueline1(data.noise));
// // Select("#graphCountry").Select("svg").Select("#linePM")
// selectAll("#linePM")
//     .data([data.pm])
//     .transition(t);

// // Select("#graphCountry").Select("svg").Select("#lineTHP")
// selectAll("#lineTHP")
//     .data([data.thp])
//     .transition(t);

// // Select("#graphCountry").Select("svg").Select("#lineNoise")
// selectAll("#lineNoise")
//     .data([data.noise])
//     .transition(t);
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
                    <div id="graphCountry" class="w-full bg-brand-white lg:w-auto lg:max-w-none">






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
