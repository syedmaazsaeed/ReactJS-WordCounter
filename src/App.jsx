import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [activePage, setActivePage] = useState("home"); // Add this state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
//All changes done
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a46";
      showAlert("Dark mode has been Enabled", "success");
      // document.title="TextWizard - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enabled", "success");
      // document.title="TextWizard - Light Mode";
    }
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Navbar
        title="TextWizard"
        mode={mode}
        toggleMode={toggleMode}
        activePage={activePage} // Pass the activePage to Navbar
        onPageChange={handlePageChange} // Pass the handler to Navbar
      />
      <Alert alert={alert} />

      <div className="container my-3">
        {activePage === "home" ? (
          <TextForm
            showAlert={showAlert}
            heading="Try TextWizards - Word Counter"
            mode={mode}
          />
        ) : (
          <About />
        )}
      </div>
    </>
  );
}

export default App;
