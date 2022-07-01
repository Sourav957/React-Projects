import React, { useState } from "react";

export default function TextForm(props) {
  
    const handleUpClick=() =>{
      
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","secondary");
    }
   
   
    const handleOnchange = (event) =>{
       
        setText(event.target.value);
    }
    const handleLoClick = () =>{
      const lowerText = text.toLowerCase();
      setText(lowerText);
      props.showAlert("Converted to LowerCase","danger");
    }
    const copyText = () =>{
      var text = document.getElementById('MyBox'); //this was made for the copy button but not working because of getElementById
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clip board","success");
    }
    const RemoveSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("extra spaces removed","secondary"); 
    }
    const clearText = () =>{
      setText(" ");
    }
    const [text, setText] = useState("Enter Text Here2"); 
    let words = text.trim();
  
 
  return (
    <>
      <div className="container">
      <h1 style={{color:props.mode === "dark"? "white":"black"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox"
            value={text}
            onChange={handleOnchange}
            rows="10"
            style={{backgroundColor:props.mode === "dark"? "#313241":"white",color:props.mode === "dark"? "white":"black"}}
          ></textarea>
        </div>
          <button disabled={text.length===0} className="btn btn-primary my-2" type="submit" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" type="submit" onClick={handleLoClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" type="submit" onClick={RemoveSpace}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" type="submit" onClick={clearText}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" type="submit" onClick={copyText}>Copy Text</button>
      </div>
      <div className='container my-3'>
  <h1 style={{color:props.mode === "dark"? "white":"black"}}>your text contains:</h1>
  <p style={{color:props.mode === "dark"? "white":"black"}}>it has {text.split(/\s+/).filter((ele) =>{ return ele.length!==0}).length} words and {text.length} characters.  
  </p>
  <p style={{color:props.mode === "dark"? "white":"black"}}>{text.length === 0? 0 :words.split(' ').length * 0.008 } minutes to read</p>
  <h2 style={{color:props.mode === "dark"? "white":"black"}}>Preview</h2>
  <p style={{color:props.mode === "dark"? "white":"black"}}>{text.length > 0 ? text : "write some thing for preview"}</p>
</div>
    </>
  );
}
