import { useRef, useEffect } from "react";
import {
  MainStyled,
  SectionStyled,
  TitleStyled,
  ListStyled,
  ItemStyled,
  TextStyled,
} from "./CustomerService.styled";
import faq from "../../mocks/data/faq.json";
import Sidebar from "../../components/Sidebar";

const CustomerService = () => {
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
        <TitleStyled>Frequently asked Questions</TitleStyled>
        <ListStyled>
          {faq.map(({ question, answer }) => (
            <ItemStyled key={question}>
              <TextStyled>
                <b>{question}</b>
              </TextStyled>
              <br />
              <TextStyled>{answer}</TextStyled>
            </ItemStyled>
          ))}
        </ListStyled>
      </SectionStyled>
    </MainStyled>
  );
};

export default CustomerService;
