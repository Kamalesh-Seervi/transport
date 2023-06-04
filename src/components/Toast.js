import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Toast() {
    const notify = ()=>{
        // // Set to 10sec
        // toast.warning('Danger', {autoClose:10000})
        // // Set to 3sec
        // toast.success('successful', {autoClose:3000})
        // // User have to close it
        // toast.info('GeeksForGeeks', {autoClose:false})
        toast.error('Runtime error', {
         // Set to 15sec
        position: toast.POSITION.TOP_RIGHT, autoClose:15000})
// Default
          
    }
  return (
            <div>
            <button type="submit" className="btn btn-primary mb-3 bg-dark Sidebar"style={{marginLeft:"10px"}} onClick={notify}>Locate</button>
            <ToastContainer />
        </div>
  
  )
}
