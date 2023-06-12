// import React, { useState } from "react";
// import MyMap, { Marker } from "react-map-gl";
// import { AddressAutofill } from "@mapbox/search-js-react";

// export default function Search() {
//   const [shipperCoords, setShipperCoords] = useState(null);
//   const [destinationCoords, setDestinationCoords] = useState(null);

//   const handleShipperSelect = (result) => {
//     setShipperCoords(result.result.center);
//   };

//   const handleDestinationSelect = (result) => {
//     setDestinationCoords(result.result.center);
//   };
//   return (
//     <div>
//       <form>
//         <h7 style={{ marginLeft: "11px", fontWeight: "bold" }}>
//           Shipper Address
//         </h7>
//         <AddressAutofill
//           accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
//           onSelect={handleShipperSelect}
//         >
//           <input
//             name="address"
//             title=" Your Address"
//             placeholder="Address"
//             type="text"
//             className="form-control"
//             style={{ marginLeft: "10px", marginTop: "10px" }}
//             autoComplete="address-line1"
//           />
//         </AddressAutofill>

//         <h7 style={{ marginLeft: "11px", fontWeight: "bold" }}>
//           Destination Address
//         </h7>
//         <AddressAutofill
//           accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ"
//           onSelect={handleDestinationSelect}
//         >
//           <input
//             name="address"
//             title=" Your Address"
//             placeholder="Address"
//             type="text"
//             className="form-control"
//             style={{ marginLeft: "10px", marginTop: "10px" }}
//             autoComplete="address-line1"
//           />
//         </AddressAutofill>
//       </form>

//       <MyMap
//         width="100%"
//         height="400px"
//         latitude={28.6448}
//         longitude={77.2167}
//         zoom={12}
//       >
//         {shipperCoords && (
//           <Marker
//             latitude={shipperCoords[1]}
//             longitude={shipperCoords[0]}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <img src="https://img.icons8.com/color/48/000000/marker.png" />
//           </Marker>
//         )}

//         {destinationCoords && (
//           <Marker
//             latitude={destinationCoords[1]}
//             longitude={destinationCoords[0]}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <img src="https://img.icons8.com/color/48/000000/marker.png" />
//           </Marker>
//         )}
//       </MyMap>
//     </div>
//   );
// }