import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import SignInSide from "./screens/SignInSide";

const App: FC = () => {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = getAnalytics(app);
  return (
    <div className="App">
      <SignInSide />
    </div>
  );
};

export default App;
