import { useContext } from "react";
import CurrencyContext from "../../Contexts/CurrencyContext";

export const useCurrencyContext = () => {
  return useContext(CurrencyContext);
};
