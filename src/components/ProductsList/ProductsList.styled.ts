import styled from "styled-components";
import { Link } from "react-router-dom";
import { IProductsList } from '../../interfaces/ProductsList.interface';
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const ListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 0;
    margin:10px 0 0 0 ;
@media screen and (min-width: ${main.tablet}px){
    width: 70%;
    height: 100%;
    padding: 40px;}
`;

const ItemStyled = styled.li`
 width: calc((100% - 10px) /2);
    height: calc((100% - 10px) / 2);
    margin: 0 5px 5px 0;

    &:nth-child(2n) {
        margin-right: 0;
    }

    &:nth-last-child(-n + 2) {
        margin-bottom: 0;
    }

box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
:hover {
        transform: scale(1.005);
    }
@media screen and (min-width: ${main.tablet}px){
    width: calc((100% - 80px) / 3);
    height: calc((100% - 80px) / 3);
    margin: 0 40px 40px 0;

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:nth-last-child(-n + 3) {
        margin-bottom: 0;
    }
}
`;

const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;}

@media screen and (min-width: ${main.tablet}px){
    padding: 30px;}
`;

const ImageContainerStyled = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;

@media screen and (min-width: ${main.tablet}px){
    width: 200px;
    height: 200px;
    margin-bottom: 20px;}
`;

const TextStyled = styled.p`
    display: flex;
    align-items: center;
    height: ${(props: IProductsList) => (props.cost ? "auto" : "40px")};
    text-align: center;
    margin-bottom: 20px;
    font-weight: ${(props: IProductsList) => (props.cost ? "700" : "400")};
`;

const button = {
    'margin': '10px auto 0',
    'width': '120px',
    'height': '40px',
    'padding': '10px',
    'color': 'white',
    'backgroundColor': '#bbb1df',
}

export { ListStyled, ItemStyled, LinkStyled, ImageContainerStyled, TextStyled, button };