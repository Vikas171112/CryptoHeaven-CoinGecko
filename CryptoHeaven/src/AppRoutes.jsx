import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import AppErrorBoundary from "./components/CustomErrorBoundary";
import Loader from "./components/Loader";

const HomePageContainer = lazy(() =>
  import("./Pages/Homepage/HomePageConatiner")
);
const CoinDetails = lazy(() => import("./Pages/CoinDetailsPage/CoinDetails"));
const NftDetails = lazy(() => import("./Pages/NftPages/NftDetails"));
const CategoryDetail = lazy(() =>
  import("./Pages/CategoryPages/CategoryDetail")
);
const ExchangeList = lazy(() => import("./Pages/ExchangePages/ExchangeList"));
const ExchangeDetails = lazy(() =>
  import("./Pages/ExchangePages/ExchangeDetails")
);
const GlobalMarketPage = lazy(() =>
  import("./Pages/GlobalMarketData/GlobalMarketPage")
);

function AppRoutes() {
  return (
    <AppErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePageContainer />} />
            <Route path="details/:id" element={<CoinDetails />} />
            <Route path="globalmarket" element={<GlobalMarketPage />} />{" "}
          </Route>
          <Route path="nft/list" element={<NftDetails />} />
          <Route path="categories/list" element={<CategoryDetail />} />
          <Route path="exchanges/list" element={<ExchangeList />} />
          <Route path="exchanges/details/:id" element={<ExchangeDetails />} />
        </Routes>
      </Suspense>
    </AppErrorBoundary>
  );
}

export default AppRoutes;
