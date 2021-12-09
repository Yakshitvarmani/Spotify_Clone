import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import "./SpotifyGlobal.css";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
