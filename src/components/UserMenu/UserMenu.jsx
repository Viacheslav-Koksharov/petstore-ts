import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import {
  NavigationStyled,
  LinkStyled,
  ButtonAccount,
  ButtonCart,
  Text,
  LogOutButton,
  ContainerCounter,
  ItemsCounter,
} from "./UserMenu.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { ModalContext } from "../../context/ModalContextProvider";
import { BasketContext } from "../../context/BasketContextProvider";
import CustomModal from "../CustomModal";
import Cart from "../Cart";
import "../../index.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const { openModal } = useContext(ModalContext);
  const { basketItems } = useContext(BasketContext);

  return (
    <NavigationStyled>
      <Text>
        welcome,
        <br /> {name.split(" ")[0] || "quest"}!
      </Text>
      <LinkStyled to={`/account`}>
        <ButtonAccount>
          <VscAccount className="IconAccount" />
        </ButtonAccount>
      </LinkStyled>
      <CustomModal>
        <Cart />
      </CustomModal>
      <ButtonCart onClick={openModal}>
        <FaShoppingCart className="IconCart" />
        <ContainerCounter>
          <ItemsCounter>{basketItems.length}</ItemsCounter>
        </ContainerCounter>
      </ButtonCart>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutButton>
    </NavigationStyled>
  );
};

export default UserMenu;
