import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;


const ContainerStyled = styled.div`

margin: 0;
    padding: 5px;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
@media screen and (min-width: ${main.tablet}px){

    margin-bottom: 20px;
    padding: 30px;
   }
`;

const ContainerImage = styled.div`
    display: none;

@media screen and (min-width: ${main.tablet}px){
    display: block;
 }
`;

const ListStyled = styled.ul`
display:flex;
@media screen and (min-width: ${main.tablet}px){
    display:block;
    text-align: right;}
`;

const ItemStyled = styled.li`

@media screen and (min-width: ${main.tablet}px){
    padding-right: 20px;
`;

const LinkStyled = styled(NavLink)`
display: inline-block;
    padding: 5px;
    color: #708db3;
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;

    &.active {
        font-weight: 500;
    }

@media screen and (min-width: ${main.tablet}px){
    display: inline-block;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    :hover {
        transform: scale(1.1);
    }
    &.active {
        font-size: 20px;
        font-weight: 700;
    }
`;

export { ContainerStyled, ListStyled, ItemStyled, ContainerImage, LinkStyled };
