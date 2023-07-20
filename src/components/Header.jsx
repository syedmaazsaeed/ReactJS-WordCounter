import React from "react";

const Header = () => {
  const handleClick = () => {
    alert("Clicked");
  };
  // handleClick();

  return (
    <>
      <h2>Test</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
        laudantium? hello Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus aliquid neque facere, molestiae vel nulla est sed
        voluptatem, quas a deleniti animi laudantium itaque, quidem temporibus?
        Cumque sunt vel incidunt!
      </p>
      <button onClick={handleClick}>Deleted</button>
    </>
  );
};


export default Header;

// Components names must be start with  capital letters.
