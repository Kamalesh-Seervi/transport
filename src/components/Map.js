import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ';

const Map = () => {
  const mapContainerRef = useRef(null);
  const [inputNumber, setInputNumber] = useState(5); // Default input number
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.2167, 28.644800], // Delhi coordinates
      zoom: 12
    });

    const getRandomCoordinate = (center, radius) => {
      const [centerLng, centerLat] = center;
      const radiusInMeters = radius * 1000; // Convert radius to meters

      const randomLng = centerLng + (Math.random() * 2 - 1) * (radiusInMeters / 111300);
      const randomLat = centerLat + (Math.random() * 2 - 1) * (radiusInMeters / 111300);

      return [randomLng, randomLat];
    };

    const markerRadius = 5; // 5km

    for (let i = 0; i < inputNumber; i++) {
      const randomCoordinate = getRandomCoordinate([77.2167, 28.644800], markerRadius);

      new mapboxgl.Marker({ color: 'red' })
        .setLngLat(randomCoordinate)
        .addTo(mapRef.current);
    }

    mapRef.current.addControl(new mapboxgl.NavigationControl());

    return () => mapRef.current.remove();
  }, [inputNumber]);

  const handleInputChange = (e) => {
    setInputNumber(parseInt(e.target.value));
  };

  const handleZoomIn = () => {
    mapRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    mapRef.current.zoomOut();
  };

  return (
    <div>
      <input type="number" value={inputNumber} onChange={handleInputChange} />
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: 'calc(80vh - 40px)' }} // Adjust the height as needed
      />
      <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default Map;
