import { createContext, useRef } from "react";

const ModalContext = createContext();
export const ModalContextProvider = ({ children }) => {
  const loginModalRef = useRef(null);
  const signupModalRef = useRef();
  const openLoginModal = () => loginModalRef.current?.showModal();
  const closeLoginModal = () => loginModalRef.current?.close();
  const openSignupModal = () => signupModalRef.current?.showModal();
  const closeSignupModal = () => signupModalRef.current?.close();
  return (
    <ModalContext.Provider
      value={{
        loginModalRef,
        signupModalRef,
        openLoginModal,
        closeLoginModal,
        openSignupModal,
        closeSignupModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
