import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MyMap, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ";

const Map = () => {
  const [inputNumber, setInputNumber] = useState(5); // Default input number

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

  const handleInputChange = (e) => {
    setInputNumber(parseInt(e.target.value));
  };

  // const handleZoomIn = () => {
  //   mapRef.current.zoomIn();
  // };

  // const handleZoomOut = () => {
  //   mapRef.current.zoomOut();
  // };

  return (
    <div>
      <input type="number" value={inputNumber} onChange={handleInputChange} />
      {/* <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "calc(80vh - 40px)" }} // Adjust the height as needed
      /> */}

      <MyMap
        initialViewState={{
          longitude: 77.2167,
          latitude: 28.6448,
          zoom: 12,
        }}
        style={{ width: "100%", height: "calc(80vh - 40px)" }} // Adjust the height as needed
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
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

      {/* <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div> */}
    </div>
  );
};

export default Map;
