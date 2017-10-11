// Set the center point and starting zoom level of the map
var map = L.map('map').setView([38.031,-78.484], 13);  // Replace 'map' with the ID of the map div

// Add the basemap tiles from Mapbox Studio. Note, I changed the URL to use a new leaflet base map WITHOUT added layers from the City of Charlottesville
L.tileLayer('https://api.mapbox.com/styles/v1/reveillette/cj7umikhm29r72so1ph49xoqr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmV2ZWlsbGV0dGUiLCJhIjoidmZvYW11SSJ9.2WIhYoRgi7LZF1zOS2xUoA', {
	attribution: 'Map data: Mapbox and City of Charlottesville',
	minZoom: 10,
	maxZoom: 17
}).addTo(map);  // "map" is the variable name. Change this if a different variable name is used.



// NEW CODE TO ADD INTERACTIVITY //

// Add geoJSON layers to map - bicycle lanes

	// function to change color based on speed limit
	function getColor(d) {
		return 	d <= 25 ? '#96FF00' : 		// If using a different field besides SpeedLimit, replace the values (25, 35, 45, etc.)
				d = 35  ? '#F3FF00' :
				d = 45  ? '#FFB000' :
				d > 45  ? '#FC4E2A' :
							'#000000';
	}

	// function to set styles based on geoJSON properties
	function bikeLanesStyle(feature) {
	    return {
	    	"color": getColor(feature.properties.SpeedLimit),  // Remember the SpeedLimit here can be replaced with any column name from the shapefile (case-sensitive)
	    	"weight": feature.properties.SpeedLimit/5,  // This must be a numerical value
	    };
	}

	// Use the Leaflet Ajax library to add a geojson from an external file. Use https://mygeodata.cloud/converter/ to convert from Shapefile to geoJSON
	var bikeLanes = new L.GeoJSON.AJAX("data/bikelanes.geojson", {  // replace with your geojson file name
		// Create a popup for each feature
		onEachFeature: function (feature, layer) {
			layer.bindPopup('<h1>'+feature.properties.STREETNAME+'</h1><p>Street Type: '+feature.properties.street_cla+'</p><p>Speed Limit: '+feature.properties.SpeedLimit+'</p>'); 	// Replace with whatever HTML you want to use in your tooltip popup
		},
		// This calls the style function we defined earlier (line 27)
		style: bikeLanesStyle

	});
	bikeLanes.addTo(map);  // adds the new layer to the map



// Add geoJSON layers to map - bus stops
	
	// Custom icon styles. See http://leafletjs.com/reference-1.2.0.html#path-option for more info on other options and what values to use.  
	var busStopIcon = new L.icon({
		    iconUrl: 'img/bus-11.svg',  // Replace with path to your icon file (can be png, jpg, svg, tif, gif, etc.)
		    iconSize: [20, 40],  // in pixels
		    iconAnchor: [0, 0],	// in pixels
		    popupAnchor: [0, 0],	// in pixels
		    shadowUrl: 'img/bus-11-shadow.svg', // Replace with path to your icon shadow file (can be png, jpg, svg, tif, gif, etc.)
		    shadowSize: [22, 44],	// in pixels
		    shadowAnchor: [0, 0]	// in pixels
		});

	// Use the Leaflet Ajax library to add a geojson from an external file. Use https://mygeodata.cloud/converter/ to convert from Shapefile to geoJSON
	var busStops = new L.GeoJSON.AJAX("data/busstops.geojson", {
		// Use this to add your custom icon styles
		pointToLayer: function(feature, latlng) {
	       return L.marker(latlng, {icon: busStopIcon});  // replace "busStopIcon" with whatever name you used for the variable on line 52 above
	    },
	    // Create a popup for each feature
		onEachFeature: function (feature, layer) {
			layer.bindPopup('<h1>Stop ID: '+feature.properties.stop_id+'</h1><p><b>Stop name: </b>'+feature.properties.stop_name+'</p>'); 	// Replace with whatever HTML you want to use in your tooltip popup
		}
	});     
	busStops.addTo(map);	// adds the new layer to the map

