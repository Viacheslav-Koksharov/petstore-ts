import styled from "styled-components";

interface Props {
  main?: boolean;
  background?: boolean;
  carousel?: boolean;
  flex?: boolean;
}

const ContainerStyled = styled.div`
  position: ${(props: Props) => (props.background ? "fixed" : "static")};
  top: ${(props: Props) => (props.background ? "140px" : "0")};
  display: ${(props: Props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props: Props) => (props.flex ? "space-between" : "none")};
  align-items: ${(props: Props) => (props.flex ? "center" : "none")};
  width: ${(props: Props) => (props.carousel ? "680px" : "100%")};
  height: ${(props: Props) => (props.background ? "700px" : "auto")};
  margin: ${(props: Props) => (props.main ? '120px auto 0' : '0')};
  padding: ${(props: Props) => (props.carousel ? "50px 0" : "0")};
  overflow: ${(props: Props) => (props.carousel ? "hidden" : "visible")};
  background-image: ${(props: Props) => (props.background ? 'url(https://cdn.shopify.com/s/files/1/0252/6642/1869/files/brown-white-dogs.jpg?v=1583726310)' : 'none')};
  background-size: ${(props: Props) => (props.background ? 'cover' : 'auto')};
  z-index: ${(props: Props) => (props.background ? "-1" : "0")};
`;

export { ContainerStyled };
