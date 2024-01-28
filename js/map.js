function initMap() {
  const myLatLng = {lat: 50.405884832006464, lng: 30.666894464095805};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatLng,
  });
  const image = {
      url: "images/common/marker.svg",
      scaledSize: new google.maps.Size(40, 64),
    };
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "вул. Вірменська, 3",
    icon: image
  });
}
window.initMap = initMap;