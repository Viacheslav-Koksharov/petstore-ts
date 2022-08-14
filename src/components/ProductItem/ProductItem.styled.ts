import styled from "styled-components";
import { Link } from "react-router-dom";

const MainStyled = styled.main`
  width: 100%;
  padding:20px;
  background-color: white;
`;

const GoBackButton = styled.button`
  width: 120px;
  height: 40px;
  margin-bottom: 25px;
  padding: 10px;
  color: white;
  background-color: #bbb1df;
  font-size: 15px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductContainer = styled.div`
  display: flex;
`;

const ImageContainerStyled = styled.div`
  width: 50%;
  height: 400px;
  margin: 0px;
`;

const TextContainerStyled = styled.div`
  width: 50%;
  text-align: center;
`;

const TitleStyled = styled.p`
  margin: 0 0 30px 0;
  font-size: 32px;
  font-weight: bold;
`;

const BrandStyle = styled.p`
  margin: 0 0 30px 0;
  font-size: 26px;
  font-weight: bold;
`;

const List = styled.ul`
  display:flex;
  margin: 0 0 20px 0;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const LinkItem = styled(Link)`
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

  :hover {
    transform: scale(1.1);
  }
`;

const button = {
  'margin': '0 0 30px 0',
  'width': '120px',
  'height': '40px',
  'padding': '10px',
  'color': 'white',
  'backgroundColor': '#bbb1df',
}

export { MainStyled, GoBackButton, ProductContainer, ImageContainerStyled, button, TextContainerStyled, TitleStyled, BrandStyle, List, LinkItem };