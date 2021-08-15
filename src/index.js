import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Login } from "./Login";

ReactDOM.render(
  <React.StrictMode>
    <div className="g-signin">
      <Login />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
