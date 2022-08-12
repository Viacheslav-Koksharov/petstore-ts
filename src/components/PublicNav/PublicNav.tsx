import { ListStyled, ItemStyled, LinkStyled } from "./PublicNav.styled";
import links from "../../mocks/data/public-nav.json";

const PublicNav = () => {
  return (
    <ListStyled>
      {links.map((link) => (
        <ItemStyled key={link}>
          {link === "home" ? (
            <LinkStyled aria-label={link} to="/">
              {link}
            </LinkStyled>
          ) : (
            <LinkStyled aria-label={link} to={`/${link}`}>
              {link}
            </LinkStyled>
          )}
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default PublicNav;
