import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from "react-dom/client";
import App from "./App";

import CartProvider from "./context/CartContext";
import './App.css';
ReactDOM.createRoot(document.getElementById("root")).render(

  <CartProvider>
      <App />
  </CartProvider>

);