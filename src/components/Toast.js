import React from 'react'
import cogoToast from 'cogo-toast';


export default function Toast() {

  const handleClick = (e) => {
    e.preventDefault();
    cogoToast.loading('Loading your data...').then(() => {
      cogoToast.success('Data Successfully Loaded');
    });
    // console.log('The link was clicked.');
  }

  return (
    <div>
    <button type="" className="btn btn-primary mb-3 bg-dark Sidebar" style={{width:'200px',marginLeft:'10px'}} onClick={handleClick} >BFF</button>
</div>
  )
} 




