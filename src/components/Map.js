import React, { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function Search() {
  const [shipperAddress, setShipperAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [shipperLatLng, setShipperLatLng] = useState(null);
  const [destinationLatLng, setDestinationLatLng] = useState(null);
  const [viewport, setViewport] = useState({
    width: '50%',
    height: '300px',
    latitude: 0,
    longitude: 0,
    zoom: 6,
  });

  const handleShipperAddressChange = (event) => {
    setShipperAddress(event.target.value);
  };

  const handleDestinationAddressChange = (event) => {
    setDestinationAddress(event.target.value);
  };

  const handleShipperAddressSelect = (result) => {
    setShipperAddress(result.place_name);
    setShipperLatLng(result.geometry.coordinates);
    setViewport((prevState) => ({
      ...prevState,
      latitude: result.geometry.coordinates[1],
      longitude: result.geometry.coordinates[0],
      zoom: 12,
    }));
  };

  const handleDestinationAddressSelect = (result) => {
    setDestinationAddress(result.place_name);
    setDestinationLatLng(result.geometry.coordinates);
  };

  return (
    <div>
      <form>
        <h7 style={{ marginLeft: '11px', fontWeight: 'bold' }}>Shipper Address</h7>
        <AddressAutofill
          accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
          onSelect={handleShipperAddressSelect}
        >
          <input
            name="shipperAddress"
            title="Your Address"
            placeholder="Address"
            type="text"
            className="form-control"
            style={{ marginLeft: '10px', marginTop: '10px' }}
            autoComplete="address-line1"
            value={shipperAddress}
            onChange={handleShipperAddressChange}
          />
        </AddressAutofill>

        <h7 style={{ marginLeft: '11px', fontWeight: 'bold' }}>Destination Address</h7>
        <AddressAutofill
          accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
          onSelect={handleDestinationAddressSelect}
        >
          <input
            name="destinationAddress"
            title="Your Address"
            placeholder="Address"
            type="text"
            className="form-control"
            style={{ marginLeft: '10px', marginTop: '10px' }}
            autoComplete="address-line1"
            value={destinationAddress}
            onChange={handleDestinationAddressChange}
          />
        </AddressAutofill>
      </form>
      {shipperLatLng && (
        <p>
          Shipper Latitude: {shipperLatLng[1]}, Longitude: {shipperLatLng[0]}
        </p>
      )}
      {destinationLatLng && (
        <p>
          Destination Latitude: {destinationLatLng[1]}, Longitude:
          Destination Latitude: {destinationLatLng[1]}, Longitude: {destinationLatLng[0]}
</p>
)}
{shipperLatLng && (
<ReactMapGL
{...viewport}
mapStyle="mapbox://styles/mapbox/streets-v11"
mapboxApiAccessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
onViewportChange={setViewport}
>
{shipperLatLng && (
<Marker latitude={shipperLatLng[1]} longitude={shipperLatLng[0]}>
<div>Shipper Marker</div>
</Marker>
)}
{destinationLatLng && (
<Marker latitude={destinationLatLng[1]} longitude={destinationLatLng[0]}>
<div>Destination Marker</div>
</Marker>
)}
</ReactMapGL>
)}
</div>
);
}