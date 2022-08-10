import { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { FaShoppingCart } from "react-icons/fa";
import {
  NavigationStyled,
  ButtonCart,
  iconStyle,
  Text,
  Button,
  ContainerCounter,
  Counter,
  ModalTitle,
  ContainerButton,
} from "./UserMenu.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "400px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UserMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <NavigationStyled>
      <Text>willkommen, {name || "quest"}!</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
      <ButtonCart onClick={openModal}>
        <IconContext.Provider value={{ style: { ...iconStyle } }}>
          <FaShoppingCart />
        </IconContext.Provider>
        <ContainerCounter>
          <Counter>3</Counter>
        </ContainerCounter>
      </ButtonCart>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Cart"
      >
        <ModalTitle>Your Order</ModalTitle>
        <Text>I am a modal</Text>
        <ContainerButton>
          <Button onClick={closeModal}>Continue</Button>
          <Button onClick={closeModal}>close</Button>
        </ContainerButton>
      </Modal>
    </NavigationStyled>
  );
};

export default UserMenu;
