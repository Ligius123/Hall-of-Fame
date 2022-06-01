import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './reducers';
import "./index.css";
import App from "./App";

const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
