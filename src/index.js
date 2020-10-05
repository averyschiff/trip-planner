import mapboxgl from "mapbox-gl";
import makeMarker from "./marker.js"

mapboxgl.accessToken = "pk.eyJ1IjoiYXZzY2hpZmYiLCJhIjoiY2tmd3JlNmlyMWZ5MDJybTYwN2V1ZmZzeSJ9.q5FObDMUmi0ULhnmG2j7EQ"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div")
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
const mapMarker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map)

makeMarker(map, "restaurant", [-73.9715, 40.7750]);
