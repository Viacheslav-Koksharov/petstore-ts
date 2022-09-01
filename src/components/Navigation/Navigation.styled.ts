import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const NavigationStyled = styled.nav`
  padding: 5px;
  background-color: white;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);

@media screen and (min-width: ${main.tablet}px){
  padding: 20px;
}
`;

const ListStyled = styled.ul`
  display: flex;
justify-content: space-between;
`;

const LinkStyled = styled(NavLink)``;

export { NavigationStyled, ListStyled, LinkStyled };
