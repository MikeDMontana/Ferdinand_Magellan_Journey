function displayCoordinates(pnt) {
  var lat = pnt.lat();
  lat = lat.toFixed(4);
  var lng = pnt.lng();
  lng = lng.toFixed(4);
  console.log("Latitude 🐰 : " + lat + "  Longitude 🎩 : " + lng);
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 1.1944, lng: 10.3586},
    scrollwheel: false,
    zoom: 3,
    mapTypeId: 'terrain'
  });

  //  You need and array of cooridinates
  var journeyCoordinates = [
    {lat: 36.7844, lng: -6.3586},
    {lat: 28.4398, lng: -16.9743},
    {lat: 15.3689, lng: -19.4021},
    {lat: 1.0456, lng: -30.0456},
    {lat: -7.1317, lng: -34.1016},
    {lat: -9.3190, lng: -34.8486},
    {lat: -13.3401, lng: -38.3104}
  ];

  var journeyPath = new google.maps.Polyline({
    path: journeyCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 0.9,
    strokeWeight: 1
  });

  var marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: -13.3401, lng: -38.3104}
    });

  marker.addListener('click', toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  google.maps.event.addListener(map, 'mousemove', function (event) {
      displayCoordinates(event.latLng);
  });

  journeyPath.setMap(map);
}
