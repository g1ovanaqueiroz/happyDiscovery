// create map
const map = L.map('mapid').setView([-7.2266755,-35.8994048], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68]
})

// create and add marker
L.marker([-7.2266755,-35.8994048], {icon}).addTo(map)