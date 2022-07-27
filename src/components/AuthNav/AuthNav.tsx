import { NavigationStyled, LinkStyled } from "./AuthNav.styled.js";

const AuthNav = () => {
  return (
    <NavigationStyled>
      <LinkStyled  to="/register">
        Register
      </LinkStyled>
      <LinkStyled to="/login">Login</LinkStyled>
    </NavigationStyled>
  );
};

export default AuthNav;
