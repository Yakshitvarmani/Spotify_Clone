import React from "react";
import ReactDOM from "react-dom";
const MyFirstPortal = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>My First Portal</h1>
      <p>out side the dom tree</p>
    </div>,
    document.getElementById("root1")
  );
};

export default MyFirstPortal;
