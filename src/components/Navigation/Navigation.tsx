import { useSelector } from "react-redux";
import {
  NavigationStyled,
  ListStyled,
  LinkStyled,
} from "./Navigation.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import PublicNav from "../PublicNav";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled>
      <ListStyled>
        <PublicNav />
        {isLoggedIn ? (
          <>
            <LinkStyled to="/store">Store</LinkStyled>
            <UserMenu />
          </>
        ) : (
          <AuthNav />
        )}
      </ListStyled>
    </NavigationStyled>
  );
};

export default Navigation;
