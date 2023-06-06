import React from 'react';
import MyMap, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ';

const Map = ({ inputNumber }) => {
  const markerRadius = 5; // 5km

  const getRandomCoordinate = (center, radius) => {
    const [centerLng, centerLat] = center;
    const radiusInMeters = radius * 1000; // Convert radius to meters

    const randomLng =
      centerLng + (Math.random() * 2 - 1) * (radiusInMeters / 111300);
    const randomLat =
      centerLat + (Math.random() * 2 - 1) * (radiusInMeters / 111300);

    return [randomLng, randomLat];
  };

  return (
    <div>
      <MyMap
        initialViewState={{
          longitude: 77.2167,
          latitude: 28.6448,
          zoom: 12,
        }}
        style={{ width: '100%', height: 'calc(80vh - 40px)' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={mapboxgl.accessToken}
      >
        {[...Array(inputNumber || 0)].map((_, i) => {
          const [lon, lat] = getRandomCoordinate(
            [77.2167, 28.6448],
            markerRadius
          );

          return (
            <Marker
              key={i}
              longitude={lon}
              latitude={lat}
              color="red"
              scale={1}
            />
          );
        })}
      </MyMap>
    </div>
  );
};

export default Map;
