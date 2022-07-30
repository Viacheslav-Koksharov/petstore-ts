import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 50px;
    height: 50px;
`;

const ListStyled = styled.ul`
    display: flex;
    width: 2000px;
`;

const ItemStyled = styled.li`
    display: flex;
    justify-content: center;
    width: 140px;
    height: 120px;
    margin-right: 40px;
    padding: 15px;
    border: 1px solid #708db3;
    border-radius: 3px;
`;

const ImageStyled = styled.img``;

const iconStyle = {
    width: '50px',
    height: '50px',
    color: '#708db3'
}

export { ButtonStyled, ListStyled, ItemStyled, ImageStyled, iconStyle };