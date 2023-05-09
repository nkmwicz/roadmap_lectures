import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@nkmwicz/reactpresentation/dist/style.css";
import "./index.css";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <BrowserRouter basename="/teaching/roadmap/lectures/">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </RecoilRoot>
  </React.StrictMode>
);
