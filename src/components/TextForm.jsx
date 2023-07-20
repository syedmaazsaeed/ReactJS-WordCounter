import React, { useState } from "react";



export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
  
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };

  const handlelwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("clear text!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const pauseSpeaking = () => {
    window.speechSynthesis.pause();
  };
  const resumeSpeaking = () => {
    window.speechSynthesis.resume();
  };

  const handleRemoveSpace = () => {
    let newText = text.replace(/\s/g, "");
    setText(newText);
    props.showAlert("Remove Spaces!", "success");
  };

  const handleSentenceCase = () => {
    let newText = text.toLowerCase();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText);
    props.showAlert("converted into Sentence Case!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied!", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;


 
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                resize: "none",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color:props.mode ==='dark' ? "white" : 'black'
              }}
              id="myBox"
              rows="9"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to UpperCase{" "}
          </button>
          <button className="btn btn-info mx-1" onClick={handlelwClick}>
            Convert to LowerCase{" "}
          </button>
          <button className="btn btn-danger" onClick={handleClearClick}>
            Clear Text
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-2 my-2"
          >
            Speak
          </button>
          <button
            type="submit"
            onClick={pauseSpeaking}
            className="btn btn-secondary mx-2 my-2"
          >
            Pause Speak
          </button>
          <button
            type="submit"
            onClick={resumeSpeaking}
            className="btn btn-success mx-2 my-2"
          >
            Resume Speak
          </button>
          <button
            type="submit"
            onClick={handleRemoveSpace}
            className="btn btn-dark mx-2 my-2"
          >
            Remove Spaces
          </button>
          <button
            type="submit"
            onClick={handleSentenceCase}
            className="btn btn-info mx-2 my-2"
          >
            Sentence Case{" "}
          </button>
          <button
            type="submit"
            onClick={handleCopy}
            className="btn btn-success mx-2 my-2"
          >
            Copy Text{" "}
          </button>
        </div>

        <div className="container my-3">
          <h2>Your Text Summary</h2>
        
          <p>{wordCount} words and {text.trim().length} characters</p>
          <p>{0.008 * text.trim().length}</p>

          <h2>Preview</h2>
          <h2>{text.length>0?text:'Type something in the box below to see a preview.'}</h2>

        </div>
      </div>
    </>
  );
}


