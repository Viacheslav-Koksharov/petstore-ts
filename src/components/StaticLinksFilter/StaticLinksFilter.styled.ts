import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ContainerStyled = styled.div`
    margin-bottom: 20px;
    padding: 30px;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const ListStyled = styled.ul`
    text-align: right;
`;

const ItemStyled = styled.li`
    padding-right: 20px;
`;

const LinkStyled = styled(NavLink)`
    display: inline-block;
    padding: 10px;
    color: #708db3;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;

    :hover {
        transform: scale(1.1);
    }

    &.active {
        font-size: 20px;
        font-weight: 700;
`;

export { ContainerStyled, ListStyled, ItemStyled, LinkStyled };
