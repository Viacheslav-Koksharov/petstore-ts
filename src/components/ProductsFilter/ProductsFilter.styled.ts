import styled from "styled-components";

const ContainerStyled = styled.div`
    margin-bottom: 20px;
    padding: 30px;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const TitleStyled = styled.p`
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 700;
`;

const ListStyled = styled.ul`
    text-align: right;
`;

const ItemStyled = styled.li`
    padding-right: 20px;
`;

const button = {
    "padding": "10px",
    "color": "inherit",
    "fontSize": "20px",
    "fontWeight": "500",
    "backgroundColor": "transparent"
};

export { ContainerStyled, TitleStyled, ListStyled, ItemStyled, button };
