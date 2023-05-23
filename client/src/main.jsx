import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Applayout from "./components/layout/Applayout.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Applayout>
      <App />
    </Applayout>
  </React.StrictMode>
);
