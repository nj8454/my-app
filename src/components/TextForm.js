import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLoClick = () => {
    //console.log("uppercase was clicked"+ text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  const handleOnchange = (event) => {
    //console.log("onchange");
    setText(event.target.value);
  }
  const handleCopy = (event) =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  }
  const [text, setText] = useState('');
    //setText("new text will be released by this function");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary:</h2>
            <p> {text.split(" ").length}words and {text.length}characters</p>
            <p> {.008*text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something above to preview here"}</p>
        </div>
        </>
  )
}
