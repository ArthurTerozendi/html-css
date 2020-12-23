var mapOptions = {
    center: [-19.88722, -43.80772],
    zoom: 15
}

var map = new L.map('map', mapOptions);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);