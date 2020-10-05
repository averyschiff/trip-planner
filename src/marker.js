import mapboxgl from "mapbox-gl";

const imageURLs = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png"
}

function makeMarker(map, type, coordinates){
  let url;
  switch(type) {
    case "activity":
      url = imageURLs.activity;
      break;
    case "hotel":
      url = imageURLs.hotel;
      break;
    case "restaurant":
      url = imageURLs.restaurant;
      break;
  }
  const markerDomEl = document.createElement("div")
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url("+url+")";
  const mapMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map)

}

//makeMarker("restaurant", [-73.9715, 40.7750]);
export default makeMarker
