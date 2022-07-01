import React from 'react'

export default function Alert(props) {
  
    const Capitalize = (msg) =>{
     let loCase = msg.toLowerCase();
    return loCase.CharAt(0).toUpperCase() + loCase.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
   {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.Alert.type}</strong>: {props.Alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}
