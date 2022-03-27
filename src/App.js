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
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="contacts"
          showAlert={showAlert}
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert Alert={alert}/>
        {/* <TextForm showAlert = {showAlert} heading="Enter text to Analyze" mode={Mode}/> */}
        {/* <Routes>
          
          <Route exact path="/about" element={<About/>}/>
         
        

          // // <Route */}
          {/* //   path="/"
          //   element={ */}
             < TextForm
            showAlert={showAlert}
                heading="Enter text to Analyze"
                mode={Mode}
           /> 
      {/* //     />
      //   </Routes>  */}
      {/* // </Router> */}
    </>
  );
}

export default App;
