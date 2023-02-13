import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContexProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContexProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContexProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
