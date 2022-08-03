import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  staticLinks?: boolean;
}

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
    width: ${(props: Props) => (props.staticLinks ? "350px" : "200px")};
`;

const ItemStyled = styled.li``;

const LinkStyled = styled.a`
    display: inline-block;

    :hover {
        transform: scale(1.1);
    }
`;

const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    padding: 10px;
    color: #708db3;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;

    :hover {
        transform: scale(1.1);
    }
`;

const TextStyled = styled.p`
    margin-top: 20px;
    color: #708db3;
    font-size: 10px;
    font-weight: 500;
`;

const iconStyle = {
    width: '30px',
    height: '30px',
    color: '#708db3'
}

export { FooterStyled, TitleStyled, ListStyled, ItemStyled, LinkStyled, NavLinkStyled, TextStyled, iconStyle };