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

const TitleStyled = styled.h2`
  font-size:22px;
  margin-top: 0;
@media screen and (min-width: ${main.tablet}px){
  font-size:26px;
}
`;

const ListStyled = styled.ol`
  margin: 0;
  padding:0;
  counter-reset: customCounter;
`;

const ItemStyled = styled.li`
  margin-bottom: 0;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:before {
    counter-increment: customCounter;
    content:counter(customCounter);
    margin-right: 10px;
    text-align: center;
    color: white;
    background: rgb(187, 177, 223);
    line-height: 40px;
  }

  @media screen and (min-width: ${main.tablet}px){
    &:before {
      display: inline-block;
      width: 40px;
      height: 40px;
    }
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

export { MainStyled, SectionStyled, TitleStyled, ListStyled, ItemStyled, TextStyled };