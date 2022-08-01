import styled from "styled-components";

const ListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    padding: 30px;
`;

const ItemStyled = styled.li`
    width: calc((100% - 40px) / 3);
`;

export { ListStyled, ItemStyled };