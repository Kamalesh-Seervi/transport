import React,{ useState }  from 'react';
import MyMap, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AddressAutofill } from '@mapbox/search-js-react';


const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ';

const Map = ({ inputNumber }) => {
  const markerRadius = 5000; // 5km

  const getRandomCoordinate = (center, radius) => {
    const [centerLng, centerLat] = center;
    const radiusInMeters = radius * 1000; // Convert radius to meters

    const randomLng =
      centerLng + (Math.random() * 2 - 1) * (radiusInMeters / 111300);
    const randomLat =
      centerLat + (Math.random() * 2 - 1) * (radiusInMeters / 111300);

    return [randomLng, randomLat];
  };

  const [shipperCoords, setShipperCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const handleShipperSelect = (result) => {
    setShipperCoords(result.result.center);
  };

  const handleDestinationSelect = (result) => {
    setDestinationCoords(result.result.center);
  };

  return (
    <div>
      <form>
        <h7 style={{ marginLeft: "11px", fontWeight: "bold" }}>
          Shipper Address
        </h7>
        <AddressAutofill
          accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
          onSelect={handleShipperSelect}
        >
          <input
            name="address"
            title=" Your Address"
            placeholder="Address"
            type="text"
            className="form-control"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            autoComplete="address-line1"
          />
        </AddressAutofill>

        <h7 style={{ marginLeft: "11px", fontWeight: "bold" }}>
          Destination Address
        </h7>
        <AddressAutofill
          accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
          onSelect={handleDestinationSelect}
        >
          <input
            name="address"
            title=" Your Address"
            placeholder="Address"
            type="text"
            className="form-control"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            autoComplete="address-line1"
          />
        </AddressAutofill>
      </form>
      <MyMap
        initialViewState={{
          longitude: 77.2167,
          latitude: 28.6448,
          zoom: 12,
        }}
        style={{ width: '100%', height: 'calc(75vh - 40px)', borderRadius:'1%',marginLeft:'10px'}}
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

{shipperCoords && (
          <Marker
            latitude={shipperCoords[1]}
            longitude={shipperCoords[0]}
            offsetLeft={-20}
            offsetTop={-10}
            color="red"
            scale={1}
          >
            {/* <img src="https://img.icons8.com/color/48/000000/marker.png" /> */}
          </Marker>
        )}

        {destinationCoords && (
          <Marker
            latitude={destinationCoords[1]}
            longitude={destinationCoords[0]}
            offsetLeft={-20}
            offsetTop={-10}
            color="red"
            scale={1}
          >
            {/* <img src="https://img.icons8.com/color/48/000000/marker.png" /> */}
          </Marker>
        )}
      </MyMap>
    </div>
  );
};

export default Map;
