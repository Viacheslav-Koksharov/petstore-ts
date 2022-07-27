import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationStyled = styled.nav``;

const LinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 17px;
  text-decoration: none;
  margin-right: 10px;
  color: black;
  &.active {
    font-weight: 700;
    color: #99c2f8;
  }
`;

export { NavigationStyled, LinkStyled };
