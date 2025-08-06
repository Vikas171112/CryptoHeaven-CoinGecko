import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CurrencyContextProvider } from "./Contexts/CurrencyContext";
import AppRoutes from "./AppRoutes";
import { ModalContextProvider } from "./Contexts/ModalContext";
import LoginModal from "./components/Modals/LoginModal";
import SignupModal from "./components/Modals/SignUpModal";

function App() {
  return (
    <>
      <CurrencyContextProvider>
        <ModalContextProvider>
          <LoginModal />
          <SignupModal />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ModalContextProvider>
      </CurrencyContextProvider>
    </>
  );
}

export default App;
