import React from 'react'
// import ReactDOM from 'react-dom';

import MyMap, { Marker } from 'react-map-gl';
import { AddressAutofill } from '@mapbox/search-js-react';

export default function Search() {

  return (
    <div>
<form>
<h7 style={{marginLeft: '11px', fontWeight:'bold'}}>Shipper Address</h7>
<AddressAutofill accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ">
<input
name="address"  title=" Your Address" placeholder="Address" type="text" className="form-control" style={{ marginLeft: '10px', marginTop:'10px' }}
autoComplete="address-line1"
/>
</AddressAutofill>

<h7 style={{marginLeft: '11px', fontWeight:'bold'}}>Destination Address</h7>
<AddressAutofill accessToken="pk.eyJ1Ijoia2FteTAwNyIsImEiOiJjbGllZXllaGcwNHkyM2VzZXJmZjFiZWVmIn0.pwB-QPgLZ5nf2qtD2V19KQ">
<input
name="address"  title=" Your Address" placeholder="Address" type="text" className="form-control" style={{ marginLeft: '10px', marginTop:'10px' }}
autoComplete="address-line1"
/>
</AddressAutofill>



</form>
    </div>
  )
}
