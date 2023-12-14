var mapOptions = {
    center: [62.04524421835813, 129.68644949999995],
    zoom: 9
}

var map = new L.map('map', mapOptions);
var layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

var marker = new L.marker([62.03266406124629, 129.74994649999985]);
var marker2 = new L.marker([62.33497691674746, 129.64200499999984]);

marker.bindPopup('IT PARK').openPopup();

marker.addTo(map);
marker2.addTo(map);