import React from "react";
import { render } from "react-dom";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import "./Global.css";

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector("#root")
);
