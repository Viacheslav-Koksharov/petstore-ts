import styled from "styled-components";
import { Link } from "react-router-dom";
import { IProductsList } from '../../interfaces/ProductsList.interface';

const ListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 100%;
    padding: 40px;
`;

const ItemStyled = styled.li`
    width: calc((100% - 80px) / 3);
    height: calc((100% - 80px) / 3);
    margin: 0 40px 40px 0;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:nth-last-child(-n + 3) {
        margin-bottom: 0;
    }

    :hover {
        transform: scale(1.005);
    }
`;

const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const ImageContainerStyled = styled.div`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
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
    'margin': '0 auto',
    'width': '120px',
    'height': '40px',
    'padding': '10px',
    'color': 'white',
    'backgroundColor': '#bbb1df',
}

export { ListStyled, ItemStyled, LinkStyled, ImageContainerStyled, TextStyled, button };