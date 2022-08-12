import { useSelector } from "react-redux";
import { ModalProvider } from "../../context/ModalContextProvider";
import { NavigationStyled, ListStyled } from "./Navigation.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import PublicNav from "../PublicNav";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ModalProvider>
      <NavigationStyled>
        <ListStyled>
          <PublicNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ListStyled>
      </NavigationStyled>
    </ModalProvider>
  );
};

export default Navigation;
