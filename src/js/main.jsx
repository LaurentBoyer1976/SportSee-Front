import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "../../Router";


/**
 * @description Render the application
 * @returns {void} Render the application
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
