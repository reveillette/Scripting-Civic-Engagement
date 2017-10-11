var map = L.map('map').setView([38.051,-78.474], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/reveillette/cj70uedyj042q2sp4ty33c11p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmV2ZWlsbGV0dGUiLCJhIjoidmZvYW11SSJ9.2WIhYoRgi7LZF1zOS2xUoA', {
    attribution: 'Map data: Mapbox Streets v7. Transit data: City of Charlottesville.',
    maxZoom: 22,
}).addTo(map);
