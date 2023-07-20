import React, { useState } from "react";

// Array distructing used
// text is the variable . parse any value .. and we we update this text through
// setText function..

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was pressed" + text)
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

  //   \s is a special character class in regular expressions that matches any whitespace character, such as spaces, tabs, and newlines.

  // The g flag stands for "global" and is used to perform a global search, replacing all occurrences of the matched pattern.

  const handleSentenceCase = () => {
    let newText = text.toLowerCase();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText);
    props.showAlert("converted into Sentence Case!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
    
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied!", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;


  // text='Write Something please ' // there is an error we cannot directly set state this method you have to use function .

  //  text=" write something please";  // wrong way to change the state.
  //  setText("write something please"); // correct way to change the state.

  // text name ka aik variable set ki ha   aur us ki default value ya ha 'enter text here   '

  // always used into the function components..

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
              // double curly braces used . object write ..
              id="myBox"
              rows="9"
            ></textarea>
            {/* whenever user changes textarea then what should happened the value which i have suppose the user write aaa  at the moment the value will be add the text . also run onchange value function and new value add hence our text means state updated   */}
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
          {/* <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p> {0.008 * text.split("").length} </p> */}

{/* // Empty String not count solution  */}
          <p>{wordCount} words and {text.trim().length} characters</p>
          <p>{0.008 * text.trim().length}</p>

          <h2>Preview</h2>
          <h2>{text.length>0?text:'Type something in the box below to see a preview.'}</h2>

          {/* // split the text with a space  . text.split will  give the array which will contains the array  .  */}
        </div>
      </div>
    </>
  );
}


// props ko ham pass karty han aik component ham na jo bana rakha ha aur
// wo cheez render hoty ha  hamaray component ma ...

// state belong to the component.
// we can import the usestae in react. usestate is the hook.
// hooks basically helps in using features without making a class.

// How to handle Events ? // onchange{handleOn Change}
// How to set state
// one Important Thing is how to make the variable which react
// will watch automatically
// How to listen event .
// There are many events in JS for many event you can make handler like this .
// har event ka lei handler bana sakty han ham

// Regular Expression/regex in JS:
// Regular expressions are patterns that allow you to describe, match, or parse text. With regular expressions, you can do things like find and replace text, verify that input data follows the format required, and and other similar things.
//

// Regular Expressions  changes mutiples things at a time.
//  /g for global replacing any things.
// const regex=/very/g;
// const text="Software Requirements Engineering and  reverse Engineering";
// console.log(regex,"Development");

//Regex means  regular expressions  is used for pattern match or string matching.
// It is used for email validation or password validation.
// Example: if you want to the password to contain lowercase alphabets and
// uppercase alphabets , special charters
// Regex is an object that descibes a sequence of characters used for
// defining a search pattern .
// RegExp can be used for text search and text replace operations

// Syntax : /pattern/modifiers;

// create search pattern  and used different places regex is the object

// Example of Regex  :
// let pattern=/[a-z]/i;

// used i ignore case means i typed /[a-z]/    .. pass="A" . it returns null but add
// i / modifiiers ...
// let pass ="12345"; // "m" //23f
// console.log(pattern.exec(pass));

// output null .. Not match the string so it returns null value.

//  object call methods


