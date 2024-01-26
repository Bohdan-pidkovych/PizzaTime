function initMap() {
  var pos = {lat: 34.815928, lng: -111.739939};
  var opt = {
    center: pos,
    zoom: 7,
  }
  var myMap = new google.maps.Map(document.getElementById("map"), opt);
  var image = {
    url: "images/common/marker.svg",
    scaledSize: new google.maps.Size(27, 27),
  };
  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    optimized: false,
    title: "Седона",
    icon: image
  });
}