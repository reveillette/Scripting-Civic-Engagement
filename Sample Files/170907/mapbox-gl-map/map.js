mapboxgl.accessToken = 'pk.eyJ1IjoicmV2ZWlsbGV0dGUiLCJhIjoidmZvYW11SSJ9.2WIhYoRgi7LZF1zOS2xUoA'; // replace this with your access token
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/reveillette/cj70uedyj042q2sp4ty33c11p' // replace this with your style URL
});

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['bus_stops'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>Stop number: ' + feature.properties.stop_id + '</h3><p>' + feature.properties.stop_name + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});
