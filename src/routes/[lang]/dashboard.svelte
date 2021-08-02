<script>
  import initI18n from "../../utils/initI18n";
  import { stores } from "@sapper/app";
  import Campaigns from "../../components/Campaigns.svelte";
  import Contact from "../../components/Contact.svelte";
  import Banner from "../../components/Banner.svelte";
  import Button from "../../components/Button.svelte";
  import * as countries from "../../../content/countries.js";
  import * as link_cities_labs from "../../../content/link_cities_labs_formated.js";
  import { onMount } from "svelte";
  import { timeFormatLocale, timeParse, timeFormat } from "d3-time-format";
  import { line } from "d3-shape";
  import { scaleTime, scaleLinear, scaleOrdinal } from "d3-scale";
  import { select as Select, selectAll, pointer } from "d3-selection";
  import { extent, max, min, bisector } from "d3-array";
  import { axisBottom, axisLeft } from "d3-axis";
  import { transition } from "d3-transition";
  import { format as Format } from "d3-format";

  const { page } = stores();
  $: lang = $page.params.lang;
  $: path = $page.path;
  $: i18n = initI18n(lang);

  // $: i18n = initI18n($page.params.lang);

  var countSensor = {};
  const sensorTypes = {
    PM: ["sds011", "sps30", "hpm", "pms7003"],
    noise: ["laerm"],
    radiation: ["radiation_si22g"],
    temphumipress: ["dht22", "bme280"],
  };

  const today = new Date();
  const yesterday = dateFormater(today);

  const dateFormatter = timeFormat("%Y-%m-%d");

  const urlGlobalJSON = "https://stats.sensor.community/sensors_per_country_per_day.json";
  const urlLabs = "https://opendata-stuttgart.github.io/luftdaten-local-labs/labs.json";

  const countriesDiv = '<div class="sm:rounded-lg"><table id="countriesTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country links</th></tr></thead><tbody style="display:block; max-height:240px; overflow-y:scroll;"></tbody></table></div>';
  const regionsDiv = '<div class="sm:rounded-lg"><table id="regionsTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region links</th></tr></thead><tbody style="display:block; max-height:240px; overflow-y:scroll;"></tbody></table></div>';
  const citiesDiv = '<div class="sm:rounded-lg"><table id="citiesTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City links</th></tr></thead><tbody style="display:block; max-height:240px; overflow-y:scroll;"></tbody></table></div>';
  const labsDiv = '<div class="sm:rounded-lg"><table id="labsTable" class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Labs</th></tr></thead><tbody style="display:block; max-height:240px; overflow-y:scroll;"></tbody></table></div>';

  var allLabs = [];

  // var pm_types = [ 'sds011', 'pms1003', 'pms3003', 'pms5003', 'pms6003', 'pms7003', 'sps30', 'hpm' ];
  // var temp_types = [ 'dht22', 'bmp180', 'bmp280', 'bme280', 'htu21d', 'ds18b20', 'sht10', 'sht11', 'sht30', 'sht31', 'sht35', 'sht85' ];

  var pm_types = ["sds011"];
  var temp_types = ["bme280"];

  var noise_types = ["laerm"];
  var simple_types = ["pm", "thp", "noise"];
  var sensor_types = [];

  var selectCountry = "WORLD";

  var parseDate = timeParse("%Y-%m-%d");

  var has_sensors = [];
  var date_count = -1;

  var globalJSON = [];

  //curve interpolations quite useless...

  var valueline1 = line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value);
    })
    .defined((d) => d.value != -1);

  var valueline2 = line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value);
    })
    .defined((d) => d.value != -1);

  var valueline3 = line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value);
    })
    .defined((d) => d.value != -1);

  var margin = { top: 20, right: 10, bottom: 30, left: 50 };

   var  width = 300 - margin.left - margin.right;
   var  height = 400 - margin.top - margin.bottom;


  var viewBoxValues = "0 0 " + (height + margin.top + margin.bottom) + " " + (width + margin.left + margin.right + 80);

  var x = scaleTime().range([0, width]);
  var y = scaleLinear().range([height, 0]);

  var category = ["SDS011", "BME280", "DNMS"];
  var color = scaleOrdinal().domain(category).range(["red", "blue", "green"]);

  var svg,
    linePM,
    lineTHP,
    lineNoise,
    xAxis,
    yAxis,
    xGrid,
    yGrid,
    svgLegend,
    legend,
    mouseLine,
    focusPM,
    focusTHP,
    focusNoise,
    tooltip,
    overlay;

  var bisectDate = bisector(function (d) {
    return d.date;
  }).left;

  var mappedObject;

  if (process.browser) {


  // var divWidth = parseInt(Select("#graphCountry").style("width"));
  // var divHeight = parseInt(Select("#graphCountry").style("height"));

  // console.log(divWidth);
  // console.log(divHeight);

    //it will load 5.7 MB each time...

    fetch(urlGlobalJSON)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // countSensor.PM += data.hpm + data.pms1003 + data.pms3003 + data.pms5003 + data.pms6003 + data.pms7003 + data.sds011 + data.sps30;
        globalJSON = data;

        //last day for current count
        countSensor = data[data.length - 1][yesterday];

        document.getElementById("value1").innerHTML = countSensor.sds011.WORLD.toString();
        document.getElementById("value2").innerHTML = countSensor.bme280.WORLD.toString();
        document.getElementById("value3").innerHTML = countSensor.laerm.WORLD.toString();

        Object.keys(link_cities_labs).forEach(function (i) {
          if (i != "default") {
            let country = countries.array.find((obj) => {
              return obj.id === i;
            });

            rowBuilder1(
              "countriesTable",
              country.id,
              country.name,
              link_cities_labs[i].link
            );
          }
        });

        // Make Data

        mappedObject = dataMapper(data, selectCountry);

        console.log(mappedObject);
        console.log(mappedObject.pm);

        svg = Select("#graphCountry")
          .append("svg")
          .attr("id", "svgGraph")
          // .attr("width", width + margin.left + margin.right + 80)
          // .attr("height", height + margin.top + margin.bottom)
          .attr("viewBox",viewBoxValues)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

        x.domain(
          extent(mappedObject.pm, function (d) {
            return d.date;
          })
        );

        if (
          max(mappedObject.pm, function (d) {
            return d.value;
          }) >=
            max(mappedObject.thp, function (d) {
              return d.value;
            }) &&
          max(mappedObject.pm, function (d) {
            return d.value;
          }) >=
            max(mappedObject.noise, function (d) {
              return d.value;
            })
        ) {y.domain([0,
            max(mappedObject.pm, function (d) {
              return d.value;
            })
          ]);
        }
        if (
          max(mappedObject.thp, function (d) {
            return d.value;
          }) >=
            max(mappedObject.pm, function (d) {
              return d.value;
            }) &&
          max(mappedObject.thp, function (d) {
            return d.value;
          }) >=
            max(mappedObject.noise, function (d) {
              return d.value;
            })
        ) {
          y.domain([
            0,
            max(mappedObject.thp, function (d) {
              return d.value;
            })
          ]);
        }
        if (
          max(mappedObject.noise, function (d) {
            return d.value;
          }) >=
            max(mappedObject.thp, function (d) {
              return d.value;
            }) &&
          max(mappedObject.noise, function (d) {
            return d.value;
          }) >=
            max(mappedObject.pm, function (d) {
              return d.value;
            })
        ) {
          y.domain([
            0,
            max(mappedObject.noise, function (d) {
              return d.value;
            })
          ]);
        }

        linePM = svg
          .append("path")
          .data([mappedObject.pm])
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke", "red")
          .attr("d", valueline1);

        lineTHP = svg
          .append("path")
          .data([mappedObject.thp])
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke", "blue")
          .attr("d", valueline2);

        lineNoise = svg
          .append("path")
          .data([mappedObject.noise])
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke", "green")
          .attr("d", valueline3);

        xAxis = svg
          .append("g")
          .attr("transform", "translate(" + 0 + "," + height + ")")
          .attr("class", "axis axis--x")
          .call(axisBottom(x));

        xGrid = svg
          .append("g")
          .attr("class", "grid-x")
          .attr("stroke-width", "0")
          .attr("transform", "translate(" + 0 + "," + height + ")")
          .call(axisBottom(x).tickSize(-height).tickFormat(""));

        yAxis = svg
          .append("g")
          .attr("class", "axis axis--y")
          .attr("transform", "translate(" + 0 + "," + 0 + ")")
          .call(axisLeft(y).tickFormat(Format("d")))
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("fill", "#000")
          .text("Sensors");

        yGrid = svg
          .append("g")
          .attr("class", "grid-y")
          .attr("stroke-width", "0")
          .attr("transform", "translate(" + 0 + "," + 0 + ")")
          .call(axisLeft(y).tickSize(-width).tickFormat(""));

        selectAll(".grid-x line")
          .attr("stroke", "lightgrey")
          .attr("stroke-opacity", "0.7")
          .attr("stroke-width", "1")
          .attr("shape-rendering", "crispEdges");

        selectAll(".grid-y line")
          .attr("stroke", "lightgrey")
          .attr("stroke-opacity", "0.7")
          .attr("stroke-width", "1")
          .attr("shape-rendering", "crispEdges");

        svgLegend = svg
          .append("g")
          .attr("class", "gLegend")
          .attr("transform", "translate(" + width / 2 + "," + 10 + ")");

        legend = svgLegend
          .selectAll(".legend")
          .data(category)
          .enter()
          .append("g")
          .attr("class", "legend")
          .attr("transform", function (d, i) {
            return "translate(0," + i * 20 + ")";
          });

        legend
          .append("circle")
          .attr("class", "legend-node")
          .attr("cx", 0)
          .attr("cy", 0)
          .attr("r", 6)
          .style("fill", (d) => color(d));

        legend
          .append("text")
          .attr("class", "legend-text")
          .attr("x", 6 * 2)
          .attr("y", 6 / 2)
          .style("fill", "black")
          .style("font-size", 10)
          .text((d) => d);

        mouseLine = svg.append("g").attr("class", "mouse-over-line");

        mouseLine
          .append("path") // create vertical line to follow mouse
          .attr("class", "mouse-line")
          .style("stroke", "red")
          .style("stroke-dasharray", "3, 3")
          .style("stroke-width", "1")
          .style("opacity", "0");

        focusPM = svg
          .append("g")
          .attr("class", "focus")
          .style("display", "none");

        focusPM.append("circle").attr("r", 4).style("fill", "red");

        focusTHP = svg
          .append("g")
          .attr("class", "focus")
          .style("display", "none");

        focusTHP.append("circle").attr("r", 4).style("fill", "blue");

        focusNoise = svg
          .append("g")
          .attr("class", "focus")
          .style("display", "none");

        focusNoise.append("circle").attr("r", 4).style("fill", "green");

        tooltip = svg
          .append("g")
          .attr("class", "focus")
          .style("display", "none");

        tooltip
          .append("rect")
          .attr("class", "tooltip")
          .attr("width", 80)
          .attr("height", 50)
          .attr("x", 10)
          .attr("y", -22)
          .attr("rx", 4)
          .attr("ry", 4)
          .style("fill", "white")
          .style("stroke", "#000");

        tooltip
          .append("text")
          .style("font-size", 10)
          .attr("class", "tooltip-date")
          .attr("x", 15)
          .attr("y", -10);

        tooltip
          .append("text")
          .style("font-size", 10)
          .attr("class", "tooltip-value-pm")
          .attr("x", 15)
          .attr("y", 5);

        tooltip
          .append("text")
          .style("font-size", 10)
          .attr("class", "tooltip-value-thp")
          .attr("x", 15)
          .attr("y", 15);
        
        tooltip
          .append("text")
          .style("font-size", 10)
          .attr("class", "tooltip-value-noise")
          .attr("x", 15)
          .attr("y", 25);
        

        overlay = svg
          .append("rect") // append a rect to catch mouse movements on canvas
          .attr("class", "overlay")
          .attr("width", width)
          .attr("height", height)
          .attr("fill", "none")
          .attr("pointer-events", "all")
          .on("mouseout", function () {
            // on mouse out hide line, circles and text
            Select(".mouse-line").style("opacity", "0");
            selectAll(".focus").style("display", "none");
          })
          .on("mouseover", function () {
            // on mouse in show line, circles and text
            Select(".mouse-line").style("opacity", "1");
            selectAll(".focus").style("display", null);
          })
          .on("mousemove", function (event) {
            // update tooltip content, line, circles and text when mouse moves

            var mouse = pointer(event);

            Select(".mouse-line").attr("d", function () {
              var d = "M" + mouse[0] + "," + height;
              d += " " + mouse[0] + "," + 0;
              return d;
            });

            let x0 = x.invert(mouse[0]),
              ipm = bisectDate(mappedObject.pm, x0, 1),
              d0pm = mappedObject.pm[ipm - 1],
              d1pm = mappedObject.pm[ipm],
              dpm = x0 - d0pm.date > d1pm.date - x0 ? d1pm : d0pm,
              ithp = bisectDate(mappedObject.thp, x0, 1),
              d0thp = mappedObject.thp[ithp - 1],
              d1thp = mappedObject.thp[ithp],
              dthp = x0 - d0thp.date > d1thp.date - x0 ? d1thp : d0thp,
              inoise = bisectDate(mappedObject.noise, x0, 1),
              d0noise = mappedObject.noise[inoise - 1],
              d1noise = mappedObject.noise[inoise],
              dnoise = x0 - d0noise.date > d1noise.date - x0 ? d1noise : d0noise,
              itooltip = bisectDate(mappedObject.pm, x0, 1),
              d0tooltip = mappedObject.pm[itooltip - 1],
              d1tooltip = mappedObject.pm[itooltip],
              dtooltip = x0 - d0tooltip.date > d1thp.date - x0 ? d1tooltip : d0tooltip;

            focusPM.attr(
              "transform",
              "translate(" + x(dpm.date) + "," + y(dpm.value) + ")"
            );

            focusTHP.attr(
              "transform",
              "translate(" + x(dthp.date) + "," + y(dthp.value) + ")"
            );

            focusNoise.attr(
              "transform",
              "translate(" + x(dnoise.date) + "," + y(dnoise.value) + ")"
            );

            tooltip.attr(
              "transform",
              "translate(" + x(dtooltip.date) + "," + mouse[1] + ")"
            );

            tooltip.select(".tooltip-date").text(dateFormatter(dpm.date));
            tooltip.select(".tooltip-value-pm").text("SDS011: " + dpm.value);
            tooltip.select(".tooltip-value-thp").text("BME280: " + dthp.value);
            tooltip.select(".tooltip-value-noise").text("DNMS: " + dnoise.value);
          });

        Select("#linkGraph").attr(
          "href",
          "https://stats.sensor.community/sensors_per_country/?simple=yes&country=WORLD"
        );
      });

    fetch(urlLabs)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        allLabs = data;

        data.forEach(function (i) {
          //NO CITY NAME IN THE MAIN LAB FILE!!!!

          let newRow = document
            .getElementById("labsTable")
            .getElementsByTagName("tbody")[0]
            .insertRow(-1);
          let newCell1 = newRow.insertCell(0);
          newCell1.addEventListener("click", function () {
            zoomerLab("world", i.lat, i.lon);
          });
          newCell1.innerHTML = i.title;
          newCell1.style = "cursor:default;min-width:100px;max-width:200px;height:24px;white-space:nowrap;overflow:hidden;";
          let newCell2 = newRow.insertCell(1);
          newCell2.innerHTML =
            '<a href="' +
            i.contacts.url +
            '"><button style="background-color: #4CAF50;text-align: center;" class="btn">Send an Email</button></a>';
          newCell2.style =
            "min-width:200px;height:24px;white-space:nowrap;overflow:hidden;";
        });
      });

    document.getElementById("copyLink").addEventListener("click", getLink);
    //DOES NOT WORK
    //document.getElementById('map-frame2').addEventListener("zoomend", getLink);
  }

  function selectedCountry(e) {
    document.getElementById("divLinks").innerHTML = "";
    document.getElementById("divLabs").innerHTML = "";

    document.getElementById("linkArea").value = "";

    const selection = countries.array.find((obj) => {
      return obj.id === e.target.value;
    });

    console.log(selection);
    selectCountry = selection.code;

    mappedObject = dataMapper(globalJSON, selectCountry);

    updateData(mappedObject);

    Select("#linkGraph").attr(
      "href",
      "https://stats.sensor.community/sensors_per_country/?simple=yes&country=" +
        selection.code
    );

    if (selection.code != "WORLD") {
      document.getElementById("map-frame2").src =
        "https://" + selection.id + ".maps.sensor.community/";

      let country = link_cities_labs[selection.id];

      if (country.regions.length > 0 && country.cities.length > 0) {
        document.getElementById("divLinks").innerHTML =
          countriesDiv + regionsDiv + citiesDiv;
      } else if (country.regions.length == 0 && country.cities.length > 0) {
        document.getElementById("divLinks").innerHTML =
          countriesDiv + citiesDiv;
      } else if (country.regions.length > 0 && country.cities.length == 0) {
        document.getElementById("divLinks").innerHTML =
          countriesDiv + regionsDiv;
      } else if (country.regions.length == 0 && country.cities.length == 0) {
        document.getElementById("divLinks").innerHTML = countriesDiv;
      }

      if (country.regions.length > 0 && country.cities.length > 0) {
        rowBuilder1(
          "countriesTable",
          country.link,
          selection.name,
          link_cities_labs[selection.id].link
        );
        country.regions.forEach(function (i) {
          rowBuilder1("regionsTable", i.link, i.name, i.link);
        });
        country.cities.forEach(function (i) {
          rowBuilder1("citiesTable", i.link, i.name, i.link);
        });
      } else if (country.regions.length == 0 && country.cities.length > 0) {
        rowBuilder1(
          "countriesTable",
          country.link,
          selection.name,
          link_cities_labs[selection.id].link
        );
        country.cities.forEach(function (i) {
          rowBuilder1("citiesTable", i.link, i.name, i.link);
        });
      } else if (country.regions.length > 0 && country.cities.length == 0) {
        rowBuilder1(
          "countriesTable",
          country.link,
          selection.name,
          link_cities_labs[selection.id].link
        );
        country.regions.forEach(function (i) {
          rowBuilder1("regionsTable", i.link, i.name, i.link);
        });
      } else if (country.regions.length == 0 && country.cities.length == 0) {
        rowBuilder1(
          "countriesTable",
          country.link,
          selection.name,
          link_cities_labs[selection.id].link
        );
      }

      if (country.labs.length > 0) {
        document.getElementById("divLabs").innerHTML = labsDiv;
        country.labs.forEach(function (i) {
          rowBuilder2(
            "labsTable",
            country.id,
            i.lat,
            i.lon,
            i.city,
            i.title,
            i.contacts.url
          );
        });
      } else {
        document.getElementById("divLabs").innerHTML = "No local lab!";
      }
    } else {
      document.getElementById("map-frame2").src =
        "https://maps.sensor.community/";
      document.getElementById("divLinks").innerHTML = countriesDiv;
      document.getElementById("divLabs").innerHTML = labsDiv;

      Object.keys(link_cities_labs).forEach(function (i) {
        if (i != "default") {
          let country = countries.array.find((obj) => {
            return obj.id === i;
          });
          rowBuilder1(
            "countriesTable",
            country.id,
            country.name,
            link_cities_labs[i].link
          );
        }
      });

      allLabs.forEach(function (i) {
        //NO CITY NAME IN THE MAIN LAB FILE!!!!

        let newRow = document
          .getElementById("labsTable")
          .getElementsByTagName("tbody")[0]
          .insertRow(-1);
        let newCell1 = newRow.insertCell(0);
        newCell1.addEventListener("click", function () {
          zoomerLab("world", i.lat, i.lon);
        });
        newCell1.innerHTML = i.title;
        newCell1.style =
          "cursor:default;min-width:100px;max-width:200px;height:24px;white-space:nowrap;overflow:hidden;";
        let newCell2 = newRow.insertCell(1);
        newCell2.innerHTML =
          '<a href="' +
          i.contacts.url +
          '"><button style="background-color: #4CAF50;text-align: center;" class="btn">Send an Email</button></a>';
        newCell2.style =
          "min-width:200px;height:24px;white-space:nowrap;overflow:hidden;";
      });
    }

    if (countSensor.sds011.hasOwnProperty(selection.code)) {
      document.getElementById("value1").innerHTML =
        countSensor.sds011[selection.code].toString();
    } else {
      document.getElementById("value1").innerHTML = "0";
    }

    if (countSensor.bme280.hasOwnProperty(selection.code)) {
      document.getElementById("value2").innerHTML =
        countSensor.bme280[selection.code].toString();
    } else {
      document.getElementById("value2").innerHTML = "0";
    }

    if (countSensor.laerm.hasOwnProperty(selection.code)) {
      document.getElementById("value3").innerHTML =
        countSensor.laerm[selection.code].toString();
    } else {
      document.getElementById("value3").innerHTML = "0";
    }
  }

  function rowBuilder1(div, id, nameCountry, link) {
    let message = "";
    let newRow = document
      .getElementById(div)
      .getElementsByTagName("tbody")[0]
      .insertRow(-1);
    let newCell1 = newRow.insertCell(0);
    newCell1.addEventListener("click", function () {
      zoomer(id);
    });
    newCell1.innerHTML = nameCountry;
    newCell1.title = "https://" + link + ".maps.sensor.community/";
    newCell1.style =
      "cursor:default;min-width:100px;max-width:200px;height:24px;white-space:nowrap;overflow:hidden;";
    let newCell2 = newRow.insertCell(1);
    message = "Open in a new tab";
    newCell2.innerHTML =
      '<a href="https://' +
      link +
      '.maps.sensor.community/" target="_blank" rel="noopener noreferrer"><button style = "background-color: #4CAF50;text-align: center;cursor: pointer;" class="btn">' +
      message +
      "</button></a>";
    newCell2.style = "min-width:200px;height:24px";
  }

  function rowBuilder2(div, id, lat, lon, city, nameLab, link) {
    let message = "";
    let newRow = document
      .getElementById(div)
      .getElementsByTagName("tbody")[0]
      .insertRow(-1);
    let newCell0 = newRow.insertCell(0);
    newCell0.addEventListener("click", function () {
      zoomerLab(id, lat, lon);
    });
    newCell0.innerHTML = city;
    newCell0.style =
      "cursor:default;min-width:100px;max-width:150px;height:24px;white-space:nowrap;overflow:hidden;";
    let newCell1 = newRow.insertCell(1);
    newCell1.addEventListener("click", function () {
      zoomerLab(id, lat, lon);
    });
    newCell1.innerHTML = nameLab;
    newCell1.title = "https://" + link + ".maps.sensor.community/";
    newCell1.style =
      "cursor:default;min-width:100px;max-width:150px;height:24px;white-space:nowrap;overflow:hidden;";
    let newCell2 = newRow.insertCell(2);
    message = "Send an Email";
    newCell2.innerHTML =
      '<a href="' +
      link +
      '"><button style = "background-color: #4CAF50;text-align: center;cursor: pointer;" class="btn">' +
      message +
      "</button></a>";
    newCell2.style =
      "min-width:150px;height:24px;white-space:nowrap;overflow:hidden;";
  }

  function dateFormater(date) {
    //one day before
    date.setDate(date.getDate() - 1);
    //same day
    //date.setDate(date.getDate());
    var result =
      date.getUTCFullYear().toString() +
      "-" +
      pad(date.getUTCMonth(), 2, true) +
      "-" +
      pad(date.getUTCDate(), 2, false);
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
        document
          .getElementById("countrySelector")
          .addEventListener("change", selectedCountry);
      }, 900);
    }
  }

  function zoomer(location) {
    // if (process.browser) {
    document.getElementById("map-frame2").src =
      "https://" + location + ".maps.sensor.community/";
    //  }
  }

  function zoomerLab(location, lat, lon) {
    document.getElementById("map-frame2").src =
      "https://" + location + ".maps.sensor.community/#16/" + lat + "/" + lon;
  }

  function getLink() {
    //let url = document.getElementById("map-frame2").contentWindow.location.href;
    //CORS !!!!!!

    document.getElementById("linkArea").value = "https://....";
  }

  function dataMapper(data, country) {
    let dataPoints = [];
    let dataPoints_grouped = [];
    let dates = [];

    simple_types.forEach(function (sensor_type) {
      console.log(sensor_type);
      dataPoints_grouped[sensor_type] = [];
    });

    for (var i = 0; i < data.length; i++) {
      var keys = Object.keys(data[i]);
      if (keys[0] > "2016-07") {
        date_count++;
        var sensors = Object.keys(data[i][keys[0]]);
        for (var j = 0; j < sensors.length; j++) {
          if (!sensor_types.includes(sensors[j])) {
            sensor_types.push(sensors[j]);
            dataPoints[sensors[j]] = [sensors[j].toUpperCase()];
            for (var k = 1; k <= date_count; k++) {
              dataPoints[sensors[j]][k] = 0;
            }
            has_sensors[sensors[j]] = [];
          }
        }
        simple_types.forEach(function (sensor_type) {
          dataPoints_grouped[sensor_type][date_count] = 0;
        });
        dates[date_count] = parseDate(keys[0]);
        sensor_types.forEach(function (sensor_type) {
          if (typeof dataPoints[sensor_type] === "undefined") {
            dataPoints[sensor_type] = [sensor_type.toUpperCase()];
          }
          if (
            typeof data[i][keys[0]][sensor_type] !== "undefined" &&
            typeof data[i][keys[0]][sensor_type][country] !== "undefined"
          ) {
            dataPoints[sensor_type][date_count] = parseInt(
              data[i][keys[0]][sensor_type][country]
            );
            has_sensors[sensor_type][country] = 1;
            if (pm_types.includes(sensor_type))
              dataPoints_grouped["pm"][date_count] += parseInt(
                data[i][keys[0]][sensor_type][country]
              );
            if (temp_types.includes(sensor_type))
              dataPoints_grouped["thp"][date_count] += parseInt(
                data[i][keys[0]][sensor_type][country]
              );
            if (noise_types.includes(sensor_type))
              dataPoints_grouped["noise"][date_count] += parseInt(
                data[i][keys[0]][sensor_type][country]
              );
          } else {
            dataPoints[sensor_type][date_count] = 0;
          }
        });
      }
    }

    dataPoints_grouped.dates = dates;
    dataPoints.dates = dates;

    let mappedObject = { pm: [], thp: [], noise: [] };

    dataPoints_grouped.dates.forEach(function (e, i) {
      let objectPM = { date: null, value: 0 };
      let objectTHP = { date: null, value: 0 };
      let objectNoise = { date: null, value: 0 };

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

  function updateData(data) {
    console.log(data);

    x.domain(
      extent(data.pm, function (d) {
        return d.date;
      })
    );

    selectAll(".axis--x").transition().duration(750).call(axisBottom(x));

    let arrayTicks = [];

    if (
      max(data.pm, function (d) {
        return d.value;
      }) >=
        max(data.thp, function (d) {
          return d.value;
        }) &&
      max(data.pm, function (d) {
        return d.value;
      }) >=
        max(data.noise, function (d) {
          return d.value;
        })
    ) {
      y.domain([
        0,
        max(data.pm, function (d) {
          return d.value;
        }),
      ]);
      data.pm.forEach((o) => {
        arrayTicks.push(o.value);
      });
    }
    if (
      max(data.thp, function (d) {
        return d.value;
      }) >=
        max(data.pm, function (d) {
          return d.value;
        }) &&
      max(data.thp, function (d) {
        return d.value;
      }) >=
        max(data.noise, function (d) {
          return d.value;
        })
    ) {
      y.domain([
        0,
        max(data.thp, function (d) {
          return d.value;
        }),
      ]);
      data.thp.forEach((o) => {
        arrayTicks.push(o.value);
      });
    }
    if (
      max(data.noise, function (d) {
        return d.value;
      }) >=
        max(data.thp, function (d) {
          return d.value;
        }) &&
      max(data.noise, function (d) {
        return d.value;
      }) >=
        max(data.pm, function (d) {
          return d.value;
        })
    ) {
      y.domain([
        0,
        max(data.noise, function (d) {
          return d.value;
        }),
      ]);
      data.noise.forEach((o) => {
        arrayTicks.push(o.value);
      });
    }

    xGrid
      .transition()
      .duration(750)
      .call(axisBottom(x).tickSize(-height).tickFormat(""));

    let ticks = ticker(arrayTicks);

    console.log(ticks);

    console.log(selectAll(".axis--y"));
    console.log(yAxis);

    selectAll(".axis--y")
      .transition()
      .duration(750)
      .call(axisLeft(y).tickFormat(Format(".0f")).tickValues(ticks));

    //selectAll("#grid-y")
    yGrid
      .transition()
      .duration(750)
      .call(axisLeft(y).tickValues(ticks).tickSize(-width).tickFormat(""));

    selectAll(".grid-x line")
      .attr("stroke", "lightgrey")
      .attr("stroke-opacity", "0.7")
      .attr("stroke-width", "1")
      .attr("shape-rendering", "crispEdges");

    selectAll(".grid-y line")
      .attr("stroke", "lightgrey")
      .attr("stroke-opacity", "0.7")
      .attr("stroke-width", "1")
      .attr("shape-rendering", "crispEdges");

    //selectAll("#linePM")
    linePM
      .transition() // change the line
      .duration(750)
      .attr("d", valueline1(data.pm));

    //selectAll("#lineTHP")
    lineTHP
      .transition() // change the line
      .duration(750)
      .attr("d", valueline1(data.thp));

    //selectAll("#lineNoise")
    lineNoise
      .transition() // change the line
      .duration(750)
      .attr("d", valueline1(data.noise));
  }

  function ticker(array) {
    let ticks = [...new Set(array)];

    if (ticks.length <= 11 && Math.max(...ticks) <= 10) {
      switch (Math.max(...ticks)) {
        case 1:
          ticks = [0, 1];
          break;
        case 2:
          ticks = [0, 1, 2];
          break;
        case 3:
          ticks = [0, 1, 2, 3];
          break;
        case 4:
          ticks = [0, 1, 2, 3, 4];
          break;
        case 5:
          ticks = [0, 1, 2, 3, 4, 5];
          break;
        case 6:
          ticks = [0, 1, 2, 3, 4, 5, 6];
          break;
        case 7:
          ticks = [0, 1, 2, 3, 4, 5, 6, 7];
          break;
        case 8:
          ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          break;
        case 9:
          ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          break;
        case 10:
          ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          break;
      }
      return ticks;
    } else {
      return null;
    }
  }
</script>

<svelte:head>
  <title>{i18n.t("index:metaTitle")}</title>
  <meta content={i18n.t("dashboard:metaDescription")} name="description" />
  <meta content={i18n.t("dashboard:metaTitle")} property="og:title" />
  <meta content="website" property="og:type" />
  <meta content="" property="og:url" />
  <meta content="" property="og:image" />
</svelte:head>

<!-- NOT WORKING

<style>
  .btn{
    background-color: #4CAF50;
    text-align: center;
    cursor: pointer;
  }


</style> -->

<div class="pb-6">
  <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
    <div
      class="mx-auto text-center md:text-left max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
    >
      <div class="mt-10">
        <div class="inline-flex space-x-4">
          <img
            alt="sensor community logo"
            class="h-8 w-auto"
            src="images/logos/signet.svg"
          />
          <span
            class="py-1 font-semibold text-brand-yellow tracking-wide uppercase"
          >
            Sensor.Community
          </span>
        </div>
        <div class="mt-6">
          <div class="mt-6 sm:max-w-xl">
            <h1
              class="text-5xl font-extrabold text-brand-black tracking-tight sm:text-5xl"
            >
              {i18n.t("dashboard:h1")}
            </h1>
            <p class="mt-6 text-xl antialiased">
              {i18n.t("dashboard:description")}️
            </p>
            <div class="mt-6">
              <div class="relative inline-block text-left">
                <div
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 p-3 bg-brand-white text-sm font-medium text-gray-700"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <select
                    id="countrySelector"
                    name="country"
                    onLoad={delaySelector()}
                  >
                    {#each countries.array as country}
                      <option
                        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                        value={country.id}
                        >{country.name}
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
                            <dd
                              class="text-4xl lg:text-5xl font-extrabold"
                              id="value1"
                            />
                            <dt class="text-base font-medium text-gray-600">
                              {i18n.t("dashboard:pmSensors")}
                            </dt>
                          </div>

                          <div class="pt-6">
                            <dd
                              class="text-4xl lg:text-5xl font-extrabold"
                              id="value2"
                            >
                              13
                            </dd>
                            <dt class="text-base font-medium text-gray-600">
                              {i18n.t("dashboard:tempSensors")}
                            </dt>
                          </div>

                          <div class="pt-6">
                            <dd
                              class="text-4xl lg:text-5xl font-extrabold"
                              id="value3"
                            >
                              14
                            </dd>
                            <dt class="text-base font-medium text-gray-600">
                              {i18n.t("dashboard:noiseSensors")}
                            </dt>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <a
                class="text-base font-medium text-brand-funcRed"
                href="{lang}/sensors/"
              >
                {i18n.t("index:about-link")} &nbsp&rarr;
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 lg:mt-24 lg:hidden">
          <div
            class="flex items-center justify-center animate-bounce transition duration-100 ease-in-out cursor-pointer"
            type="button"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div
        class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div class="hidden sm:block">
          <svg
            class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
            fill="none"
            height="392"
            viewBox="0 0 404 392"
            width="404"
          >
            <defs>
              <pattern
                height="20"
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                patternUnits="userSpaceOnUse"
                width="20"
                x="0"
                y="0"
              >
                <rect
                  class="text-gray-200"
                  fill="currentColor"
                  height="4"
                  width="4"
                  x="0"
                  y="0"
                />
              </pattern>
            </defs>
            <rect
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              height="392"
              width="404"
            />
          </svg>
        </div>
        <div
          class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-nonelg:pl-12"
        >
          <div
            id="graphCountry"
            class="w-full bg-brand-white lg:w-auto lg:max-w-none"
          />
          <a id="linkGraph" target="_blank" rel="noopener noreferrer"
            ><button
              style="background-color: #4CAF50;padding: 10px;text-align: center;"
              class="btn">Open in a new tab</button
            ></a
          >
        </div>
        <figure class="px-4 md:px-16 mt-4 text-sm text-gray-600">
          <figcaption>{i18n.t("dashboard:imageSubtitle")}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>

<div
  class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mb-24"
>
  <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
    <div class="pr-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
      <iframe
        id="map-frame2"
        src="https://maps.sensor.community/?nooverlay=true#2/28.3/-1.1"
        style="height: 700px; width: 100%; overflow-scrolling: touch"
        title="sensor.community particulate matter map"
      />
    </div>
  </div>
  <div
    class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
  >
    <div class="mt-6">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
        Direct links
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
        malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
        duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui
        tellus ornare pharetra.
      </p>
      <div class="mt-10">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
          <div
            id="divLinks"
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="sm:rounded-lg">
              <table
                id="countriesTable"
                class="min-w-full divide-y divide-gray-200"
              >
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Country links
                    </th>
                  </tr>
                </thead>
                <tbody
                  style="display:block; max-height:240px; overflow-y:scroll;"
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
        Local labs
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
        malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
        duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui
        tellus ornare pharetra.
      </p>
      <div class="mt-10">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
          <div
            id="divLabs"
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="sm:rounded-lg">
              <table id="labsTable" class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Labs
                    </th>
                  </tr>
                </thead>
                <tbody
                  style="display:block; max-height:240px; overflow-y:scroll;"
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
        Link with coordinates
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        Get your very personal Sensor.Community link ! Zoom to the position you
        want on the map and click the button to display and copy the link!
      </p>
      <!-- TWEET IDENT? -->
      <div class="mt-10">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
          <div
            id="divLabs"
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="sm:rounded-lg">
              <button
                id="copyLink"
                style="background-color: #4CAF50;padding: 10px;text-align: center;"
                class="btn"
              >
                Copy Link !</button
              >
              <textarea id="linkArea" rows="1" cols="50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Banner
  description={i18n.t("index:banner-description")}
  link="{lang}/sensors/"
  linkName={i18n.t("index:cta")}
  title={i18n.t("index:banner-title")}
/>
<Campaigns />
<Contact />
