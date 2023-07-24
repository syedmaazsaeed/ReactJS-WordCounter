import React, { useState } from "react";
import ReactDOM from 'react-dom';


export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  //It is the  js object

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border:'1px solid white'
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
    <div className="container my-4 text-end">
    <button onClick={toggleStyle} type="button" className="btn btn-warning">
      {btntext}
    </button>
  </div>
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
    
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
        <strong>    What does the website 'TextMastery' do? </strong>
            </button>
          </h2>
       
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextMastery</strong> allows users to perform the following text transformations: convert text to uppercase, convert text to lowercase, generate speech for the text, resume speech from where it was paused, pause the ongoing speech, clear the text input, copy the text, convert text to sentence case, and remove extra spaces.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
         <strong>   TextMastery an Open-Source ? </strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Yes my website is open source, and I am delighted to welcome contributions from anyone. I have developed this website using ReactJS.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
          <strong>What libraries and features did you use while building this website?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            I used the ReactJS JavaScript library to create this website. ReactJS was chosen because of its components-based architecture, which enables a more structured and modular approach to development. React allows us to build reusable components, which greatly streamline the development process and enhance code maintainability.ReactJS is also a good choice for creating single-page applications (SPAs). We can build dynamic and interactive user interfaces that offer a smooth user experience without the need for full page reloads by utilising React's virtual DOM and effective rendering.
            ReactJS's component-based methodology and SPA framework features have overall been crucial in creating an adaptable and user-friendly website for TextMastery.
            </div>
          </div>
        </div>
      </div>
     
    </div>

    </>);
}

// JavaScript objects

// let myobject={
//     color:'red',
//     backgroundColor:'cyan'
// }  // this is the JS objects

// In javascript we can change the elements style then you write
// .style.backgroundColor like this

// $0 is those elements that you can select.. we use $0 to refer any element.
// $0 used in chrome .
// JS use Camel Case and react also used camel case
// react is a kind of raw JS ...

// Important *   : I make this style a state variable i can easily change this style
// and by clicking the button enabled dark mode then change it


// usestate variables to Enabled dark mode or white mode ..