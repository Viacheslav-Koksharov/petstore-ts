import authNav from '../../mocks/auth-nav.json';
import { ListStyled, ItemStyled, LinkStyled } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <ListStyled>
      {authNav.map(el => (
        <ItemStyled key={el}>
          <LinkStyled aria-label={el} to={`/${el}`}>{el}</LinkStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default AuthNav;
