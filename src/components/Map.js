import React from 'react'

export default function Map() {
  const H = window.H;
  var platform = new H.service.Platform({
    'apikey': 'YmbouIOh9J-N8q7TlAQFs66AG0OXJsWnwJSmn29RGQft4AuBMP0cyT5fehWfLYCjTzA4MsgOCVANIuBY6TmUWQ'
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lng: 13.4, lat: 52.51 }
    });

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers);
  return (
    <div>
      
    </div>
  )
}
