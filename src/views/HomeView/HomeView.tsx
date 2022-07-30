import { MainStyled, SectionStyled, TaglineStyled, TextStyled } from "./HomeView.styled";
import Carousel from '../../components/Carousel';

interface Props {
  tagline: string;
  message: string;
  conditions: string;
  accent?: boolean;
  flex?: boolean;
}

const HomeView = ({ tagline, message, conditions }: Props) => {
  return (
    <MainStyled>
      <SectionStyled>
        <TaglineStyled>{tagline}</TaglineStyled>
        <TextStyled accent>{message}</TextStyled>
        <TextStyled>{conditions}</TextStyled>
      </SectionStyled>
      <SectionStyled flex>
        <Carousel/>
      </SectionStyled>
    </MainStyled>
  );
};

export default HomeView;
