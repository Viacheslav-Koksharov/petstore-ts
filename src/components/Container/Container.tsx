import { ContainerStyled } from "./Container.styled";

interface Props {
  children?: React.ReactNode;
  main?: boolean;
  background?: boolean;
  carousel?: boolean;
}

const Container = ({ children, main, background, carousel }: Props) => {
  return (
    <ContainerStyled
      main={main}
      background={background}
      carousel={carousel}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
