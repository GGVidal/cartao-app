import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBhvRRyKPDAkvgDw4t0WtW7sELZ_03ozdo",
    authDomain: "cartaoapi-63bb1.firebaseapp.com",
    projectId: "cartaoapi-63bb1",
    storageBucket: "cartaoapi-63bb1.appspot.com",
    messagingSenderId: "334401711734",
    appId: "1:334401711734:web:474a4c2980d666a7063957",
    measurementId: "G-XPB02R9NC8",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
