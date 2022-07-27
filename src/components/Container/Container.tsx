import { ContainerStyled } from "./Container.styled.js";

interface Props {
  children?: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
