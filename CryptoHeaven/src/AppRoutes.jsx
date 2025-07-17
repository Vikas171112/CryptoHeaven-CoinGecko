import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Table from "./components/Table";
import HomePage from "./Pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />{" "}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
