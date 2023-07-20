import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import React from 'react' // type imr to import react...
// we can use function based components so we dont't need  to

function App() {
  const [mode, setMode] = useState("light"); // by default set false it is
  // state variable whether the dark mode is enabled or not .
  const [alert, setAlert] = useState(null);
  // setAlert  value ko set kary ga jo hamara state variable ha alert ka  aur showAlert
  // hamara aik function ha jo help kary ga to show alert message
  // make the  alert an object ..(alert ko ham aik object bana rahy han .)
  // and write set alert method.... ham set alert ka name sa method bnaye ga
  // agar same name laan ga to name conflict kar jaye ga is lei name change kar lia
  // firstly alert null ha phir alert ko object bana dia ..

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a46";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About us "/> */}
      {/* <Navbar/> */}
      <Navbar title="TextWizard" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* // sending prop.. /*}
      {/* // passing mode  */}
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to Analyze Below"
          mode={mode}
        />

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

// passes props . props means properties

// In React there are two components function based components and className based
// create react app used function based components.....
// Everything you are added/ write in curly braces that is considererd as javascript..
// prosps stands for properties
// we make the custom components ..
//   eg navbar is the custom components

// nameExport and defaultExport in js..
// props : props just properties han for example apna aik component banaya aur
// ap us component ka andar kuch cheezan pass karna chaty han . eg is components ka andar juch variables han jo ma btao ga

// Enabling dark mode I want to manage the whole state of my app from app.js
//
