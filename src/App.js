import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';





function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
const removeBodyClasses=()=>{
  document.body.classList.remove('primary');
  document.body.classList.remove('success');
  document.body.classList.remove('warning');
  document.body.classList.remove('danger');
}
const toggleMode1=(cls)=>{
  console.log(cls);
  document.body.classList.add('bg-'+cls);
  removeBodyClasses();
}
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021426";
      showAlert("dark mode has been activated", "success");
      document.title = "dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been activated", "success");
      document.title = "light mode";
    }
  };
  return (
    <>
      {/* <About/> */}
      <Router>
 <Navbar
          title="TextUtils"
          aboutText="contacts"
          showAlert={showAlert}
          mode={Mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
        />
        <Alert Alert={alert}/>
        <Routes>
          <Route exact path='/' element={<TextForm showAlert = {showAlert} heading="Enter text to Analyze" mode={Mode}/>}/>
          <Route exact path='/about' element={<About mode={Mode}/>}/>
        
        </Routes>
        </Router>
    
    </>
  );
}

export default App;
