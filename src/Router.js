import React from "react";
import Main from "./router/Main";
import AboutUs from "./router/AboutUs";
import Home from "./router/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./router/userDetail";
import SignIn from "./router/SignIn";
import Profile from "./router/Profile";

const AppRouter = ({ userObj, isLoggedIn }) => {
  return (
    <Router base="/">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/userDetail/:id" element={<UserDetail />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
