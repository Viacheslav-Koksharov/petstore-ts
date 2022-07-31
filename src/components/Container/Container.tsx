import { ContainerStyled } from "./Container.styled";

interface Props {
  children?: React.ReactNode;
  main?: boolean;
  background?: boolean;
  carousel?: boolean;
  flex?: boolean;
}

const Container = ({ children, main, background, carousel, flex }: Props) => {
  return (
    <ContainerStyled
      main={main}
      background={background}
      carousel={carousel}
      flex={flex}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
