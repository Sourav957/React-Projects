import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
const [Change,setChange] = useState("red");

const toggleChange = ()=>{
if(Change === "red"){
  const body = document.body;
  body.style.backgroundColor = "#e04553";
props.showAlert("red dark mode activated","danger");
}else{
 
  props.showAlert("nothing activated","success");
}
}
const toggleGreen = ()=>{
  const body = document.body;
  body.style.backgroundColor = "green";
  props.showAlert("green mode activated","success")
}


  return (
    <div> <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">{props.aboutText}</a> 
        </li>
      
      </ul>
      <div className='container'>
      <button type="button" className="btn btn-danger" onClick={toggleChange}>Red Dark Mode</button>
      <button type="button" className="btn btn-success mx-3" onClick={toggleGreen}>Green Mode</button>
      </div>
      <div className={`form-check form-switch text-${props.mode === "dark"? "light":"dark"}`}>
     
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav></div>
  )
}

// Navbar.propTypes = {
//     title:propTypes.string,
//     aboutText:propTypes.string
// }
Navbar.defaultProps = {
  title:"set title here",
  aboutText:"set here"
}

