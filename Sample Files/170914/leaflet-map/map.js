// This is a comment

var map = L.map('map').setView([38.031,-78.484], 13);  // Replace 'map' with the ID of the map div

L.tileLayer('https://api.mapbox.com/styles/v1/reveillette/cj70uedyj042q2sp4ty33c11p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmV2ZWlsbGV0dGUiLCJhIjoidmZvYW11SSJ9.2WIhYoRgi7LZF1zOS2xUoA', {
	attribution: 'Map data: Mapbox and City of Charlottesville',
	minZoom: 10,
	detectRetina: true,
	maxZoom: 17
}).addTo(map);  // map is the variable name. Change if a different variable name is used.
