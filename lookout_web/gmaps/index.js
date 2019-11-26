function initMap() {
  var center = {lat: 38.8792, lng: -99.3268};
  
  var locations = [
    ['Fort Hays Historic Site<br>\
    1472 US Highway 183 Alt, Hays, KS 67601<br>\
   <a href="https://goo.gl/maps/tThvrbTRY7CZ7zsGA>Get Directions</a>', 38.8616784, -99.3423263],
    ['Fort Hays State University<br>\
    600 Park St, Hays, KS 67601<br>\
   <a href="https://goo.gl/maps/qgA48CMdChkJ21ns9">Get Directions</a>', 38.8714, -99.3445],
    ['Forsyth Library<br>\
    502 S Campus Dr, Hays, KS 67601<br>\
    <a href="https://goo.gl/maps/9xLd1N3cuQ3hBqxLA">Get Directions</a>', 38.8721, -99.3424],
    ['Agricultural Research Center - Hays<br>\
    1232 240th Ave, Hays, KS 67601<br>\
    <a href="https://goo.gl/maps/4CJMD2haL9sZFR1z6">Get Directions</a>', 38.857060, -99.336680],
    ['Hays Area Childrens Center<br>\
    94 Lewis Dr, Hays, KS 676014<br>\
   <a href="https://goo.gl/maps/niWvXULNNRfQhSaj9">Get Directions</a>', 38.866800, -99.340150]
  ];
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: center
  });
  
  var infowindow =  new google.maps.InfoWindow({});var marker, count;for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
    
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}