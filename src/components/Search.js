import React from 'react'
// import ReactDOM from 'react-dom';


import { AddressAutofill } from '@mapbox/search-js-react';

export default function Search() {
    
    const addMarker = (lngLat) => {
        new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
      };
  

  return (
    <div>
<form>
<AddressAutofill accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ">
<input
name="address" placeholder="Address" type="text" className="form-control" style={{ marginLeft: '10px' }}
autoComplete="address-line1"
/>
</AddressAutofill>


</form>
    </div>
  )
}
