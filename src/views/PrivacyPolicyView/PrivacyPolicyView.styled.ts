import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const MainStyled = styled.main`
 display: block;
  width: 100%;
  padding:5px;
  background-color: white;

@media screen and (min-width: ${main.tablet}px){
  display: flex;
  padding:20px;
}

`;

const SectionStyled = styled.section`
  width: 100%;
  padding: 5px;

@media screen and (min-width: ${main.tablet}px){
  width: 70%;
  padding: 40px;
}
`;

const ListStyled = styled.ul`
  margin: 0;
`;

const ItemStyled = styled.li`
  margin-bottom: 0;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const TextStyled = styled.p`
  display: inline-block;
  font-size:12px;
  line-height: 1;

@media screen and (min-width: ${main.tablet}px){
  font-size:22px;
  line-height: 2;
}
`;

const iconStyle = {
  width: '50px',
  height: '50px',
  color: 'rgb(187, 177, 223)'
}

export { MainStyled, SectionStyled, ListStyled, ItemStyled, TextStyled, iconStyle };