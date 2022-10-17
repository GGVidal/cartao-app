import React, { FC } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  CardRewards,
  UserSignUp,
  Login,
  PartnerSignUp,
  SignInAdmin,
  DashboardContent,
  PartnerRequests,
} from "./screens";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Header } from "./components";

const App: FC = () => {
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = getAnalytics(app);
  return (
    <>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route index element={<CardRewards />} />
          <Route path="/rewards" element={<CardRewards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userSignUp" element={<UserSignUp />} />
          <Route path="/partnerSignUp" element={<PartnerSignUp />} />
          <Route path="/loginAdmin" element={<SignInAdmin />} />
          <Route path="/admin_dashboard" element={<DashboardContent />} />
          <Route path="/partner_requests" element={<PartnerRequests />} />
        </Routes>
      </RecoilRoot>
    </>
  );
};

export default App;
