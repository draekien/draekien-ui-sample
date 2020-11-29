import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DraekienUi, ToastContainer, ToastProvider } from "draekien-ui";

ReactDOM.render(
  <React.StrictMode>
    {/** enable the Draekien-UI theme */}
    <DraekienUi>
      {/** enable toast context */}
      <ToastProvider>
        <App />
        {/** add container for rendering toasts */}
        <ToastContainer offsetTop="10%" />
      </ToastProvider>
    </DraekienUi>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
