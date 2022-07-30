import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from "../../redux/auth/auth-selectors";
import { NavigationStyled } from "./AppBar.styled.js";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavigationStyled>
  );
};

export default AppBar;
