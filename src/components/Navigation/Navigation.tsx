import { NavigationStyled, LinkStyled } from "./Navigation.styled.js";

const Navigation = () => {

  return (
    <NavigationStyled>
      <LinkStyled  to="/">
        Home
      </LinkStyled>   
      <LinkStyled to="/store">Store</LinkStyled>
    </NavigationStyled>
  );
};

export default Navigation;
