import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import images from '../../mocks/carousel.json';
import { ButtonStyled, ListStyled, ItemStyled, ImageStyled, iconStyle } from './Carousel.styled';
import Container from '../Container';

const Carousel = () => {
    return (
        <>
            <ButtonStyled>
                <IconContext.Provider value={{ style: iconStyle }}>
                    <IoIosArrowBack />
                </IconContext.Provider>
            </ButtonStyled>
            <Container carousel>
                <ListStyled>{
                images.items.map(({ src, alt }) => (
                    < ItemStyled key={src} >
                        <ImageStyled src={src} alt={alt} />
                    </ItemStyled>
                ))
                }</ListStyled>
            </Container>
            <ButtonStyled>
                <IconContext.Provider value={{ style: iconStyle }}>
                    <IoIosArrowForward />
                </IconContext.Provider>
            </ButtonStyled>
        </>
    )
}

export default Carousel;