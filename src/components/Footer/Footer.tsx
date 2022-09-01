import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import {
  FooterStyled,
  TitleStyled,
  ListStyled,
  ItemStyled,
  LinkStyled,
  StaticLinkStyled,
  TextStyled,
} from "./Footer.styled";
import staticLinks from "../../mocks/data/static-links.json";
import Container from "../Container";
import "../../index.css";

interface IContent {
  title: string;
  text: string;
}

interface IProps {
  content: IContent;
  staticLinks?: boolean;
}

const Footer = ({ content }: IProps) => {
  return (
    <FooterStyled>
      <TitleStyled>{content.title}</TitleStyled>
      <Container flex>
        <ListStyled>
          <ItemStyled key="facebook">
            <LinkStyled
              href="https://www.facebook.com/"
              aria-label="facebook"
              target="blank"
            >
              <FaFacebook className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="linkedin">
            <LinkStyled
              href="https://www.linkedin.com/"
              aria-label="linkedin"
              target="blank"
            >
              <FaLinkedin className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="instagram">
            <LinkStyled
              href="https://www.instagram.com/"
              aria-label="instagram"
              target="blank"
            >
              <FaInstagram className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="twitter">
            <LinkStyled
              href="https://twitter.com/"
              aria-label="twitter"
              target="blank"
            >
              <FaTwitter className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="pinterest">
            <LinkStyled
              href="https://www.pinterest.com/"
              aria-label="pinterest"
              target="blank"
            >
              <FaPinterest className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
        </ListStyled>
        <ListStyled staticLinks>
          {staticLinks.map((link) => (
            <ItemStyled key={link}>
              <StaticLinkStyled
                aria-label={link}
                to={`/${link.replace(/ /g, "-")}`}
              >
                {link}
              </StaticLinkStyled>
            </ItemStyled>
          ))}
        </ListStyled>
      </Container>
      <TextStyled>{content.text}</TextStyled>
    </FooterStyled>
  );
};

export default Footer;
