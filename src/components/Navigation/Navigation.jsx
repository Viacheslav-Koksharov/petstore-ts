import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors.js";
import { NavigationStyled, LinkStyled } from "./Navigation.styled.js";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavigationStyled>
      <LinkStyled exact="true" to="/">
        Home
      </LinkStyled>
      {isLoggedIn && <LinkStyled to="/store">Store</LinkStyled>}
    </NavigationStyled>
  );
};

export default Navigation;
