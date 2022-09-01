import {
  ContainerStyled,
  ListStyled,
  ItemStyled,
  LinkStyled,
  ContainerImage,
} from "./StaticLinksFilter.styled";
import staticLinks from "../../mocks/data/static-links.json";
import ImageFAQ from "../../images/aside_faq1.jpg";
import Container from "../Container";

const StaticLinksFilter = () => {
  return (
    <ContainerStyled>
      <ListStyled>
        {staticLinks.map((link) => (
          <ItemStyled key={link}>
            <LinkStyled aria-label={link} to={`/${link.replace(/ /g, "-")}`}>
              {link}
            </LinkStyled>
          </ItemStyled>
        ))}
      </ListStyled>
      <ContainerImage>
        <Container>
          <img src={ImageFAQ} alt="pets" />
        </Container>
      </ContainerImage>
    </ContainerStyled>
  );
};

export default StaticLinksFilter;
