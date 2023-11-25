import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwAE7XTm8BFvx8wEdiSHHIQebMHx9FVzs",
  authDomain: "coderhouse-ecomerce-84e7a.firebaseapp.com",
  projectId: "coderhouse-ecomerce-84e7a",
  storageBucket: "coderhouse-ecomerce-84e7a.appspot.com",
  messagingSenderId: "403502975941",
  appId: "1:403502975941:web:4ea87c2cce86cb337459ac",
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
