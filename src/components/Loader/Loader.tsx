import { BallTriangle } from "react-loader-spinner";
import { ContainerStyled, SpinnerStyled } from "./Loader.styled";

interface Props {
  ariaLabel: string;
  height: string | number;
  width: string | number;
  radius: string | number;
  color: string;
}
const Loader = ({ ariaLabel, height, width, radius, color }: Props) => {
  return (
    <>
      <ContainerStyled>
        <SpinnerStyled>
          <BallTriangle
            ariaLabel={ariaLabel}
            height={height}
            width={width}
            radius={radius}
            color={color}
          />
        </SpinnerStyled>
      </ContainerStyled>
    </>
  );
};

export default Loader;
