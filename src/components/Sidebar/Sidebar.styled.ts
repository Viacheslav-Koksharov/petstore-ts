import styled from "styled-components";

const AsideStyled = styled.aside`
    width: 20%;
    padding: 20px;
    color: #708db3;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const TitleStyled = styled.p`
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
`;

const ListStyled = styled.ul`
    text-align: right;
`;

const ItemStyled = styled.li`
    padding-right: 20px;
    cursor: pointer;
`;

const TextStyled = styled.p`
    padding: 10px;
    font-weight: 500;

    :hover {
        transform: scale(1.05);
    }

    :focus {
        outline: 1px solid green;
    }
`;

export { AsideStyled, TitleStyled, ListStyled, ItemStyled, TextStyled };