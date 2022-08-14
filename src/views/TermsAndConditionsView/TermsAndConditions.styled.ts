import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  width: 100%;
  padding:20px;
  background-color: white;
`;

const SectionStyled = styled.section`
  width: 70%;
  padding: 40px;
`;

const TitleStyled = styled.h2`
  margin-top: 0;
`;

const ListStyled = styled.ol`
  margin: 0;
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

    display: inline-block;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    color: white;
    background: rgb(187, 177, 223);
    line-height: 40px;
  }
`;

const TextStyled = styled.p`
  display: inline;
  line-height: 2;
`;

export { MainStyled, SectionStyled, TitleStyled, ListStyled, ItemStyled, TextStyled };