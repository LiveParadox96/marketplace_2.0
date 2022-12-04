import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
<script
  src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<MY_API_CODE>&apm;lang=ru_RU"
  type="text/javascript"
></script>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="marketplace_2.0">
    <App />
  </BrowserRouter>
);
