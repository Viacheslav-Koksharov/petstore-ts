import { HeaderStyled } from './Header.styled';
import banner from '../../mocks/data/banner.json';
import Banner from '../Banner';
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <HeaderStyled>
            <Banner text={banner.message} />
            <Navigation />
        </HeaderStyled>
    )
}

export default Header;
