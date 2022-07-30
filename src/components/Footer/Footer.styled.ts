import styled from "styled-components";

const FooterStyled = styled.footer`
    padding: 20px;
    background-color: white;
    border-top: 1px solid #708db3;  
`;

const TitleStyled = styled.p`
    margin-bottom: 10px;
    color: #708db3;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
`;

const ListStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 200px;
`;

const ItemStyled = styled.li``;

const LinkStyled = styled.a`
    display: inline-block;    
`;

const iconStyle = {
    width: '30px',
    height: '30px',
    color: '#708db3'
}

export { FooterStyled, TitleStyled, ListStyled, ItemStyled, LinkStyled, iconStyle };