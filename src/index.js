import React from "react";
import ReactDOM from "react-dom/client";


import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    user-select: none;

  }

  html, body, #root {
    width: 100%;
    height: 100%;
    min-width: 300px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={ store }>
		<Global />
		<App />
	</Provider>
);
