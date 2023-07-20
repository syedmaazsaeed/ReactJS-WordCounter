import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* // used backticks because i can  used templates literals  */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
                About Us
              </a> */}
            </li> 
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
        
          <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
            {/* // i will be add backticks so it will be a template literals */}
            {/* // anyting write in culry braces that will be considered as JS  used backticks in js used to $ sign to used variable */}
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
 
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
  {props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
</div>
         
        </div>
      </div>
    </nav>

    // this is the Navbar components
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// number , objects , arrasy also passses..
// Navbar.prototype={title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string} // faces error is required if not pass.

// is required props must not be  undefined eg title ...

Navbar.defaultProps = {
  title: "set title ",
  // aboutText: "About Us  ",
};

// 1. props
// 2. PropTypes
// 3. default props
