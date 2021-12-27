import React from "react";
import ReactDOM from "react-dom";
import AudioContextProvider from "./Apis/AudioContext";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import MyFirstPortal from "./Pages/MyFirstPortal";
import "./SpotifyGlobal.css";

ReactDOM.render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,
  document.getElementById("root")
);

// ReactDOM.render(<MyFirstPortal />, document.getElementById("root1"));
