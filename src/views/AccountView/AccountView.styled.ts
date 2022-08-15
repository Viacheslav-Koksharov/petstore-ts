import styled from "styled-components";

const TitleStyled = styled.h2`
  text-align: center;
  margin: 0 0 30px 0;
  color: #708db3;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;
const MainStyled = styled.main`
  width: 100%;
  padding:20px;
  background-color: white;
`;

const ListStyled = styled.ul`
  width: 70%;
  height: 100%;
  margin: 0 auto 20px;
  padding: 5px;
`;

const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px 0;
  padding: 20px;
  color: #708db3;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageContainerStyled = styled.div`
    width: 100px;
    height: 100px;

`;
const TotalStyled = styled.p`
  margin-bottom: 30px;
  text-align: center;
  color: #708db3;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

export {
  TitleStyled,
  MainStyled,
  ListStyled,
  ImageContainerStyled,
  ItemStyled,
  TotalStyled,
};