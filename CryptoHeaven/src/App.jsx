import { useEffect, useState } from "react";

import "./App.css";
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
