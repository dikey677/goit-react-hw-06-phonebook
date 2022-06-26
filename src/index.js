import React from "react";
import "./index.css";
import App from "./components/App/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./redux/store.js";

// React 18

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </StrictMode>
);
