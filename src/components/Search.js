// import React, { useState } from 'react';
// import { AddressAutofill } from '@mapbox/search-js-react';

// export default function Search() {
//   const [shipperAddress, setShipperAddress] = useState('');
//   const [destinationAddress, setDestinationAddress] = useState('');
//   const [shipperLatLng, setShipperLatLng] = useState(null);
//   const [destinationLatLng, setDestinationLatLng] = useState(null);

//   const handleShipperAddressChange = (event) => {
//     setShipperAddress(event.target.value);
//   };

//   const handleDestinationAddressChange = (event) => {
//     setDestinationAddress(event.target.value);
//   };

//   const handleShipperAddressSelect = (result) => {
//     setShipperAddress(result.place_name);
//     setShipperLatLng(result.geometry.coordinates);
//   };

//   const handleDestinationAddressSelect = (result) => {
//     setDestinationAddress(result.place_name);
//     setDestinationLatLng(result.geometry.coordinates);
//   };

//   return (
//     <div>
//       <form>
//         <h7 style={{ marginLeft: '11px', fontWeight: 'bold' }}>Shipper Address</h7>
//         <AddressAutofill
//           accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
//           onSelect={handleShipperAddressSelect}
//         >
//           <input
//             name="shipperAddress"
//             title="Your Address"
//             placeholder="Address"
//             type="text"
//             className="form-control"
//             style={{ marginLeft: '10px', marginTop: '10px' }}
//             autoComplete="address-line1"
//             value={shipperAddress}
//             onChange={handleShipperAddressChange}
//           />
//         </AddressAutofill>

//         <h7 style={{ marginLeft: '11px', fontWeight: 'bold' }}>Destination Address</h7>
//         <AddressAutofill
//           accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
//           onSelect={handleDestinationAddressSelect}
//         >
//           <input
//             name="destinationAddress"
//             title="Your Address"
//             placeholder="Address"
//             type="text"
//             className="form-control"
//             style={{ marginLeft: '10px', marginTop: '10px' }}
//             autoComplete="address-line1"
//             value={destinationAddress}
//             onChange={handleDestinationAddressChange}
//           />
//         </AddressAutofill>
        
//       </form>
//       {shipperLatLng && <p>Shipper Latitude: {shipperLatLng[1]}</p>}
//       {shipperLatLng && <p>Shipper Longitude: {shipperLatLng[0]}</p>}
//       {destinationLatLng && <p>Destination Latitude: {destinationLatLng[1]}</p>}
//       {destinationLatLng && <p>Destination Longitude: {destinationLatLng[0]}</p>}
//     </div>
//   );
// }
