import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Table from "./components/Table";
import HomePageContainer from "./Pages/Homepage/HomePageConatiner";
import CoinDetailsPage from "./Pages/CoinDetailsPage/CoinDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePageContainer />} />{" "}
      </Route>
      <Route path="details/:id" element={<CoinDetailsPage />} />
    </Routes>
  );
}

export default AppRoutes;
