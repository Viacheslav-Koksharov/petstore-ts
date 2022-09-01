import { ContainerStyled, TextStyled } from "./Banner.styled";

interface Props {
  text: string;
}

const Banner = ({ text }: Props) => {
  return (
    <ContainerStyled>
      <TextStyled>{text}</TextStyled>
    </ContainerStyled>
  );
};

export default Banner;
