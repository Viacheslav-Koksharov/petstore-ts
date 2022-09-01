import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

interface Props {
    staticLinks?: boolean;
}

const FooterStyled = styled.footer`
    padding: 10px;
    margin: 0;
    background-color: white;
    border-top: 1px solid #708db3;

@media screen and (min-width: ${main.tablet}px){
    padding: 20px;
}
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
    flex-wrap: wrap;
    margin-left:${(props: Props) => (props.staticLinks ? "10px" : "0")};
    width: ${(props: Props) => (props.staticLinks ? "200px" : "200px")};}

@media screen and (min-width: ${main.tablet}px) {
    width: ${(props: Props) => (props.staticLinks ? "350px" : "200px")};}
`;

const ItemStyled = styled.li``;

const LinkStyled = styled.a`
    display: inline-block;

    :hover {
        transform: scale(1.1);
    }
`;

const StaticLinkStyled = styled(Link)`
    display: inline-block;
    padding: 5px;
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

export { FooterStyled, TitleStyled, ListStyled, ItemStyled, LinkStyled, StaticLinkStyled, TextStyled };