import { ContainerStyled } from "./Container.styled";
import { IContainer } from "../../interfaces/Container.interface";

const Container = ({
  children,
  main,
  background,
  carousel,
  flex,
}: IContainer) => {
  return (
    <ContainerStyled
      main={main}
      background={background}
      carousel={carousel}
      flex={flex}
    >
      {children}
    </ContainerStyled>
  );
};

export default Container;
