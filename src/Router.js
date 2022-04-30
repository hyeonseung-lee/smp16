import React from "react";
import Main from "./router/Main";
import AboutUs from "./router/AboutUs";
import Home from "./router/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./router/userDetail";
import SignIn from "./router/SignIn";
import Profile from "./router/Profile";

const AppRouter = ({ userId, setUserId }) => {
  return (
    <Router base="/">
      <Routes>
        <Route
          exact
          path="/"
          element={<Main userId={userId} setUserId={setUserId} />}
        />

        <Route
          exact
          path="/signIn"
          element={<SignIn userId={userId} setUserId={setUserId} />}
        />
        <Route
          exact
          path="/home"
          element={<Home userId={userId} setUserId={setUserId} />}
        />
        <Route
          exact
          path="/profile"
          element={<Profile userId={userId} setUserId={setUserId} />}
        />
        <Route
          exact
          path="/userDetail/:id"
          element={<UserDetail userId={userId} setUserId={setUserId} />}
        />
        <Route
          exact
          path="/aboutUs"
          element={<AboutUs userId={userId} setUserId={setUserId} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
