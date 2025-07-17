import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeLayout from "./Layouts/HomeLayout";
import Swiper from "./components/Swiper";
import HomePage from "./Pages/HomePage";
import Table from "./components/Table";
import { fetchcoinData } from "./apis/fetchCoinData";
import { BrowserRouter } from "react-router-dom";

import { CurrencyContextProvider } from "./Contexts/CurrencyContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <CurrencyContextProvider>
        <BrowserRouter>
          {" "}
          <AppRoutes />
        </BrowserRouter>{" "}
      </CurrencyContextProvider>
    </>
  );
}

export default App;
