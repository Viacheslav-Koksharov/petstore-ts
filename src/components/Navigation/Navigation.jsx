import { useSelector } from "react-redux";
import {
  NavigationStyled,
  ListStyled,
  ItemStyled,
  LinkStyled,
} from "./Navigation.styled.js";
import authSelectors from "../../redux/auth/auth-selectors";
import PublicNav from "../PublicNav";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled>
      <ListStyled>
        <ItemStyled>
          <PublicNav />
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
