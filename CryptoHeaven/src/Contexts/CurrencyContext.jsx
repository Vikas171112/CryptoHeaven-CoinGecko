import { createContext, useState } from "react";
const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("inr");
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
export default CurrencyContext;
