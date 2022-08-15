import { useRef, useEffect } from "react";
import {
  MainStyled,
  SectionStyled,
  TitleStyled,
  ListStyled,
  ItemStyled,
  TextStyled,
} from "./TermsAndConditions.styled";
import Sidebar from "../../components/Sidebar";
import conditions from "../../mocks/data/terms-and-conditions.json";

const TermsAndConditions = () => {
  const topRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: -50, behavior: "smooth" });
    }
  }, []);

  return (
    <MainStyled ref={topRef}>
      <Sidebar staticLinks />
      <SectionStyled>
        <TitleStyled>Terms and Conditions</TitleStyled>
        <ListStyled>
          {conditions.map(({ content }) => (
            <ItemStyled key={content}>
              <TextStyled>{content}</TextStyled>
            </ItemStyled>
          ))}
        </ListStyled>
      </SectionStyled>
    </MainStyled>
  );
};

export default TermsAndConditions;
