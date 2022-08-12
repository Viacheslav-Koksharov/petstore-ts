import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import {
  NavigationStyled,
  ButtonCart,
  iconStyle,
  Text,
  ButtonOut,
  ContainerCounter,
  ItemsCounter,
} from "./UserMenu.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { ModalContext } from "../../context/ModalContextProvider";
import { BasketContext } from "../../context/BasketContextProvider";
import CustomModal from "../CustomModal";
import Cart from "../Cart";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const { openModal } = useContext(ModalContext);
  const { basketItems } = useContext(BasketContext);

  return (
    <NavigationStyled>
      <Text>willkommen, {name || "quest"}!</Text>
      <ButtonOut type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ButtonOut>
      <CustomModal>
        <Cart />
      </CustomModal>
      <ButtonCart onClick={openModal}>
        <IconContext.Provider value={{ style: { ...iconStyle } }}>
          <FaShoppingCart />
        </IconContext.Provider>
        <ContainerCounter>
          <ItemsCounter>{basketItems.length}</ItemsCounter>
        </ContainerCounter>
      </ButtonCart>
    </NavigationStyled>
  );
};

export default UserMenu;
