import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import MyFirstPortal from "./Pages/MyFirstPortal";
import "./SpotifyGlobal.css";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

// ReactDOM.render(<MyFirstPortal />, document.getElementById("root1"));
