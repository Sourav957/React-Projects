import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick=() =>{
      
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","secondary");
    }
   
    const getSurprise = (event) =>{
      
      const body = document.body;
       body.style.backgroundColor = "yellow";
       body.style.color = "black";
       props.showAlert("SURPRISE SURPRISE MOTHEFUKAAA","danger");
      
      

      
  }
    const handleOnchange = (event) =>{
       
        setText(event.target.value);
    }
    const handleLoClick = () =>{
      const lowerText = text.toLowerCase();
      setText(lowerText);
      props.showAlert("Converted to LowerCase","danger");
    }
    const [text, setText] = useState("Enter Text Here2"); 
    let words = text.trim();
  
 
  return (
    <>
      <h1 style={{color:props.mode === "dark"? "white":"black"}}>{props.heading}</h1>
      <div className="container">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox"
            value={text}
            onChange={handleOnchange}
            rows="10"
            style={{backgroundColor:props.mode === "dark"? "grey":"white",color:props.mode === "dark"? "white":"black"}}
          ></textarea>
        </div>
          <button className="btn btn-primary" type="submit" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" type="submit" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" type="submit" onClick={getSurprise}>press for surprise</button>
      </div>
      <div className='container my-3'>
  <h1 style={{color:props.mode === "dark"? "white":"black"}}>your text contains:</h1>
  <p style={{color:props.mode === "dark"? "white":"black"}}>it has {words.split(" ").length} words and {text.length} characters.  
  </p>
  <p style={{color:props.mode === "dark"? "white":"black"}}>{words.split(" ").length * 0.008 } minutes to read</p>
  <h2 style={{color:props.mode === "dark"? "white":"black"}}>Preview</h2>
  <p style={{color:props.mode === "dark"? "white":"black"}}>{text.length > 0 ? text : "write some thing for preview"}</p>
</div>
    </>
  );
}
