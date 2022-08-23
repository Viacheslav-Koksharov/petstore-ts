import styled from "styled-components";
import { breakpoints } from '../../helpers/variables';
const { main } = breakpoints;

interface Props {
  accent?: boolean;
  flex?: boolean;
}

const MainStyled = styled.main`

@media screen and (min-width: ${main.desktop}px){
  height: 100%;
  text-align: center;
}
`;

const SectionStyled = styled.section`
  display: ${(props: Props) => (props.flex || props.flex ? "flex" : "block")};
  justify-content: ${(props: Props) => (props.flex || props.flex ? "space-around" : "flex-start")};
  align-items: ${(props: Props) => (props.flex || props.flex ? "center" : "flex-start")};
  margin-bottom: 200px;
  padding: ${(props: Props) => (props.flex || props.flex ? "0 150px" : "20px 0")};
  background: white;
`;

const TaglineStyled = styled.h1`
  margin: 20px 20px 40px;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
`;

const TextStyled = styled.p`
  width: 65%;
  margin: 0 auto 30px;
  color: ${(props: Props) => (props.accent ? "#708db3" : "auto")};
  font-size: ${(props: Props) => (props.accent ? "22px" : "18px")};
  line-height: 1.4;
  font-style: ${(props: Props) => (props.accent ? "italic" : "normal")};
`;

export { MainStyled, SectionStyled, TaglineStyled, TextStyled };
