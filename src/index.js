console.log("I'm in the index.js file!")
const markerFunction = require("./markerFunction")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYXJpZWx3YWluZXI0IiwiYSI6ImNrYzBvbnFubDB4bGEyc2xtZXlueDl0djQifQ.JjvlALycYs7uHoIlcPTM8w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

new mapboxgl.markerFunction(activity, arrayLongLat)
