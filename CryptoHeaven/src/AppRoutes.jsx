import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Table from "./components/Table";
import HomePageContainer from "./Pages/Homepage/HomePageConatiner";
import CoinDetailsPage from "./Pages/CoinDetailsPage/CoinDetailsPage";
import CoinDetails from "./Pages/CoinDetailsPage/CoinDetails";
import NfTTables from "./components/NfTTables";
import NftDetails from "./Pages/NftPages/NftDetails";
import CategoryDetail from "./Pages/CategoryPages/CategoryDetail";
import ExchangeList from "./Pages/ExchangePages/ExchangeList";
import ExchangeDetails from "./Pages/ExchangePages/ExchangeDetails";
import GlobalMarketPage from "./Pages/GlobalMarketData/GlobalMarketPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePageContainer />} />
        <Route path="details/:id" element={<CoinDetails />} />{" "}
      </Route>
      <Route path="nft/list" element={<NftDetails />} />
      <Route path="categories/list" element={<CategoryDetail />} />
      <Route path="exchanges/list" element={<ExchangeList />} />
      <Route path="exchanges/details/:id" element={<ExchangeDetails />} />
      <Route path="/globalmarket" element={<GlobalMarketPage />} />
    </Routes>
  );
}

export default AppRoutes;
