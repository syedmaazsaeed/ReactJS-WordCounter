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
      <h1 className="my-3">Front End Frameworks</h1>
    
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
              Next JS
            </button>
          </h2>
       
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Next.js is an open-source web development framework</strong> created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.

React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js" Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.
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
             Angular JS
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Angular is a platform and framework for building single-page client applications using HTML and TypeScript.</strong> Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.

The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into NgModules. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules. An application always has at least a root module that enables bootstrapping, and typically has many more feature modules.
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
              Vue JS
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Vue (pronounced /vjuː/, like view)</strong> is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.
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