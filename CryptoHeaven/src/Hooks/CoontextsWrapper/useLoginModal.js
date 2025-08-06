import { useContext } from "react";
import ModalContext from "../../Contexts/ModalContext";

export const uselogInModalContext = () => {
  return useContext(ModalContext);
};
