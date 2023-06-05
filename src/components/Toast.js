import React from 'react'
import cogoToast from 'cogo-toast';


export default function Toast() {
    const notify = ()=>{
      cogoToast.success('This is a success message!');
// Default
          
    }
  return (
            <div>
            <button type="" className="btn btn-primary mb-3 bg-dark Sidebar" onClick={notify}>Locate</button>
        </div>
  
  )
}
