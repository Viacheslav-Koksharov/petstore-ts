import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const MainStyled = styled.main`
  width: 100%;
  padding:10px;
  background-color: white;

@media screen and (min-width: ${main.tablet}px){
  padding:20px;
 }
`;

const GoBackButton = styled.button`
  width: 90px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  color: white;
  background-color: #bbb1df;
  font-size: 12px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

@media screen and (min-width: ${main.tablet}px){
  width: 120px;
  height: 40px;
  margin-bottom: 25px;
  padding: 10px;
  font-size: 15px;
}
`;

const ProductContainer = styled.div`
  display: flex;
`;

const ImageContainerStyled = styled.div`
  width: 50%;
  height: 200px;
  margin: 0px;
`;

const TextContainerStyled = styled.div`
  width: 50%;
  text-align: center;
`;

const TitleStyled = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
@media screen and (min-width: ${main.tablet}px){
  margin: 0 0 30px 0;
  font-size: 32px;
 }
`;

const AlertStyle = styled.p`
margin: 0 0 10px 0;
  color:red;
  font-size: 12px;
  font-weight: 400;

@media screen and (min-width: ${main.tablet}px){
  margin: 0 0 30px 0;
  font-size: 15px;
  font-weight: 500;}
`;

const BrandStyle = styled.p`
margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;

@media screen and (min-width: ${main.tablet}px){
  margin: 0 0 30px 0;
  font-size: 26px;
  }
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
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }

  :hover {
    transform: scale(1.1);
  }
@media screen and (min-width: ${main.tablet}px){
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
}
`;

const button = {
  'margin': '0 0 20px 0',
  'width': '120px',
  'height': '40px',
  'padding': '10px',
  'color': 'white',
  'backgroundColor': '#bbb1df',
}

export { MainStyled, GoBackButton, ProductContainer, ImageContainerStyled, AlertStyle, button, TextContainerStyled, TitleStyled, BrandStyle, List, LinkItem };