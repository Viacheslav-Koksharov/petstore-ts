import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;



const ContainerStyled = styled.div`
    margin: 0;
    padding: 10px;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);

@media screen and (min-width: ${main.tablet}px){
    margin-bottom: 20px;
    padding: 30px;
    }
`;

const TitleStyled = styled.p`
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;

@media screen and (min-width: ${main.tablet}px){
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 700;}
`;

const ListFilterStyled = styled.ul`
    display: flex;

@media screen and (min-width: ${main.tablet}px){
    display: block;
    text-align: right;}
`;

const ItemFilterStyled = styled.li`
padding: 5px;

@media screen and (min-width: ${main.tablet}px){
    padding-right: 20px;}
`;

const ListImageStyled = styled.ul`
    display: none;

@media screen and (min-width: ${main.tablet}px){
    display: block;
    text-align: right;}
`;

const ItemImageStyled = styled.li`
@media screen and (min-width: ${main.tablet}px){
    display: block;
    padding-right: 20px;}
`;

const button = {
    "padding": "5px",
    "color": "inherit",
    "fontSize": "20px",
    "fontWeight": "500",
    "backgroundColor": "transparent"
};

export { ContainerStyled, TitleStyled, ListFilterStyled, ListImageStyled, ItemFilterStyled, ItemImageStyled, button };
