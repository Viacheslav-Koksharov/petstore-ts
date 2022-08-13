import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import {
  NavigationStyled,
  LinkStyled,
  ButtonAccount,
  accStyle,
  ButtonCart,
  iconStyle,
  Text,
  button,
  ContainerCounter,
  ItemsCounter,
} from "./UserMenu.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { ModalContext } from "../../context/ModalContextProvider";
import { BasketContext } from "../../context/BasketContextProvider";
import Button from "../Button";
import CustomModal from "../CustomModal";
import Cart from "../Cart";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const { openModal } = useContext(ModalContext);
  const { basketItems } = useContext(BasketContext);

  return (
    <NavigationStyled>
      <Text>
        welcome,
        <br /> {name || "quest"}!
      </Text>
      <LinkStyled to={`/account`}>
        <ButtonAccount>
          <IconContext.Provider value={{ style: { ...accStyle } }}>
            <VscAccount />
          </IconContext.Provider>
        </ButtonAccount>
      </LinkStyled>
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
      <Button type="button" style={button} onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </NavigationStyled>
  );
};

export default UserMenu;
