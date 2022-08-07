import { ContainerStyled, ListStyled, ItemStyled, LinkStyled } from './StaticLinksFilter.styled';
import staticLinks from '../../mocks/data/static-links.json';
import ImageFAQ from '../../images/aside_faq1.jpg';
import Container from '../Container';

const StaticLinksFilter = () => {
    return(
        <ContainerStyled>
            <ListStyled>{
                staticLinks.map((link) => (
                    <ItemStyled key={link}>
                        <LinkStyled aria-label={link} to={`/${link.replace(/ /g,"-")}`}>{link}</LinkStyled>
                    </ItemStyled>
                ))
                }</ListStyled>
                <Container>
                    <img src={ImageFAQ} alt="pets" />
                </Container>
        </ContainerStyled>
    )
}

export default StaticLinksFilter;