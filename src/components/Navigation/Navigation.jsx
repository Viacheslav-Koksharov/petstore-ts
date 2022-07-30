import { useSelector } from "react-redux";
import {
  NavigationStyled,
  ListStyled,
  ItemStyled,
  LinkStyled,
} from "./Navigation.styled.js";
import authSelectors from "../../redux/auth/auth-selectors.js";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled>
      <ListStyled>
        <ItemStyled>
          <LinkStyled aria-label="Home page" exact="true" to="/">
            Home
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <AuthNav />
        </ItemStyled>
        {isLoggedIn && (
          <>
            <LinkStyled to="/store">Store</LinkStyled>
            <UserMenu />
          </>
        )}
      </ListStyled>
    </NavigationStyled>
  );
};

export default Navigation;
