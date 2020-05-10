// This example uses the Google Maps JavaScript API's Data layer
// to create a rectangular polygon with 2 holes in it.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 38.8792, lng: -99.3268},
  });

  // Define the LatLng coordinates for the outer path.
  var outerCoords = [
    {lat: 38.8616784, lng: -99.3423263}, // north west
  ];

  // Define the LatLng coordinates for an inner path.
  var innerCoords1 = [
    {lat: 38.8714, lng: -99.3445},
  ];

  // Define the LatLng coordinates for another inner path.
  var innerCoords3 = [
    {lat: 38.8721, lng: -99.3424}

  // Define the LatLng coordinates for another inner path.
  ];
  var innerCoords4 = [
    {lat: 38.857060, lng: -99.336680},

  // Define the LatLng coordinates for another inner path.
  ];
  var innerCoords5 = [
    {lat: 38.866800, lng: -99.340150},

  ];
  map.data.add({geometry: new google.maps.Data.Polygon([outerCoords,
                                                        innerCoords1,
                                                        innerCoords2,
                                                        innerCoords3,
                                                        innerCoords4,
                                                        innerCoords5])})
}
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 38.8792, lng: -99.3268}
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
      'https://github.com/kmnguyenkmn/gmaps/blob/master/haysks.json');
}