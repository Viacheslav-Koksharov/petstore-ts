import { useState, createContext } from "react";
import {
  IModalContextProps,
  IModalContext,
} from "../interfaces/ModalContext.interface";

const ModalContext = createContext<IModalContext>({
  modalIsOpen: false,
  setIsOpen: () => {},
  openModal: () => {},
});

const ModalProvider = ({ children }: IModalContextProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const sampleModalContext: IModalContext = {
    modalIsOpen,
    setIsOpen,
    openModal,
  };

  return (
    <ModalContext.Provider value={sampleModalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
