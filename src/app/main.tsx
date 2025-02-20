import "@fontsource/roboto";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../App";
import '@fontsource/roboto'; // Default to weight 400


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
