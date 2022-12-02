import { Login } from "pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AuthPanel = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />}></Route>;
    </Routes>
  );
};

export default AuthPanel;
