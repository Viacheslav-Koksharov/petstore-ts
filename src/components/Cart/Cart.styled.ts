import styled from 'styled-components';
import { ICart } from "../../interfaces/Cart.interface";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const ListStyled = styled.ul`
  margin: 0 auto;
  width:100%;

  @media screen and (min-width: ${main.tablet}px){
  width:${(props: ICart) => (props.main ? "600px" : "100%")};}
`;

const ItemStyled = styled.li`
  display:inline-flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
  padding: 3px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);}

@media screen and (min-width: ${main.tablet}px){
  display:flex;
  flex-wrap: nowrap;
  margin: 0 0 40px 0;
  padding: 40px;
  }
`;

const ImageContainerStyled = styled.div`
  width:100px;
  height:100px;
@media screen and (min-width: ${main.tablet}px){
  width:${(props: ICart) => (props.main ? "200px" : "100px")};
  height:${(props: ICart) => (props.main ? "200px" : "100px")};}
`;

const TextStyled = styled.p`
  display: flex;
  margin: ${(props: ICart) => (props.main ? "0 20px 0 0" : "0")};
  width: ${(props: ICart) => (props.main ? "30%" : "40%")};
  align-items: center;
  text-align: center;
  font-weight:700;
`;

const PriceStyled = styled.p`
display: flex;
  align-items: center;
  margin-right: 10px;
  text-align: center;
  font-weight:700;
@media screen and (min-width: ${main.tablet}px){
  width: ${(props: ICart) => (props.main ? "100px" : "150px")};

}
`;

const ValueStyled = styled.p`
display: flex;
  align-items: center;
  margin-right: 10px;
  text-align: center;
  font-weight:700;

@media screen and (min-width: ${main.tablet}px){
  width: ${(props: ICart) => (props.main ? "100px" : "150px")};
}
`;

const ButtonStyled = styled.button`
display: flex;
  padding: 5px;
  margin: 0;
  color: #708db3;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
@media screen and (min-width: ${main.tablet}px){
  padding: 10px;
  font-size: 18px;
}
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
  ListStyled, ItemStyled, ImageContainerStyled, TextStyled, PriceStyled,
  ValueStyled, ButtonStyled, TotalStyled
};
