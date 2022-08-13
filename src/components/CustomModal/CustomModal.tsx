import { useContext } from "react";
import Modal from "react-modal";
import {
  button,
  ModalTitle,
  ContainerButton,
  customStyles,
  LinkStyled,
} from "./CustomModal.styled";
import { IModalContextProps } from "../../interfaces/ModalContext.interface";
import { ModalContext } from "../../context/ModalContextProvider";
import Button from "../../components/Button";

const CustomModal = ({ children }: IModalContextProps) => {
  const { modalIsOpen, setIsOpen } = useContext(ModalContext);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal Cart"
    >
      <ModalTitle>Your Order</ModalTitle>
      {children}
      <ContainerButton>
        <Button style={button} onClick={closeModal}>
          Continue
        </Button>
        <LinkStyled to={"/cart"}>
          <Button style={button} onClick={closeModal}>
            Place order
          </Button>
        </LinkStyled>
      </ContainerButton>
    </Modal>
  );
};

export default CustomModal;
