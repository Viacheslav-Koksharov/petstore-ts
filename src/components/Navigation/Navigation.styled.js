import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationStyled = styled.nav`
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ItemStyled = styled.li``;

const LinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }
`;

export { NavigationStyled, ListStyled, ItemStyled, LinkStyled };
