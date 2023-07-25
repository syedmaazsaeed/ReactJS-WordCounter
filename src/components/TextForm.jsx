import React, { useState } from "react";

export default function TextForm(props) {
   
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  // Use Arrow function
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

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length;

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
                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="9"
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to UpperCase{" "}
          </button>
          <button disabled={text.length===0}
            className="btn btn-info mx-1"
            onClick={handlelwClick}
            style={{ margin: "7px" }}
          >
            Convert to LowerCase{" "}
          </button>
          <button disabled={text.length===0}
            className="btn btn-danger"
            onClick={handleClearClick}
            style={{ margin: "7px" }}
          >
            Clear Text
          </button>
          <button disabled={text.length===0}
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-2 my-2"
          >
            Speak
          </button>
          <button disabled={text.length===0}
            type="submit"
            onClick={pauseSpeaking}
            className="btn btn-secondary mx-2 my-2"
          >
            Pause Speak
          </button>
          <button disabled={text.length===0}
            type="submit"
            onClick={resumeSpeaking}
            className="btn btn-success mx-2 my-2"
          >
            Resume Speak
          </button>
          <button disabled={text.length===0}
            type="submit"
            onClick={handleRemoveSpace}
            className="btn btn-dark mx-2 my-2"
          >
            Remove Spaces
          </button>
          <button disabled={text.length===0}
            type="submit"
            onClick={handleSentenceCase}
            className="btn btn-info mx-2 my-2"
          >
            Sentence Case{" "}
          </button>
          <button disabled={text.length===0}
            type="submit"
            onClick={handleCopy}
            className="btn btn-success mx-2 my-2"
          >
            Copy Text{" "}
          </button>
        </div>

        <div className="container my-3">
          <h3>Your Text Summary</h3>

          <p>
            {wordCount} words and {text.trim().length} characters
          </p>
          <h3>Time to Read one Word</h3>
          <p>{0.008 * text.trim().length}</p>

          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to preview! ."}
          </p>
        </div>
      </div>
    </>
  );
}
