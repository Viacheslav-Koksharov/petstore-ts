import { useState, useRef } from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import images from '../../mocks/data/carousel.json';
import { ButtonStyled, ListStyled, ItemStyled, ImageStyled, iconStyle } from './Carousel.styled';
import Container from '../Container';

const Carousel = () => {
    const numberOfSlides = 6;
    const slideWidth = 180;

    const [move, setMove] = useState(null);
    const [step, setStep] = useState(0);
    const [width] = useState(slideWidth);
    const carousel = useRef(null);

    const onButtonPrevClick = (e: React.MouseEvent) => {
        setMove(carousel.current);

        if (step === 0 || step === 1) {
            e.currentTarget.setAttribute('style', 'visibility: hidden');
        }

        if (step > 0) {
            const btnNext = document.getElementById('next');

            if (btnNext && btnNext?.hasAttribute('style')) {
                btnNext.removeAttribute('style');
            }
            setStep(prevState => prevState - 1); 
        } 
    }

    const onButtonNextClick = (e: React.MouseEvent) => {
        setMove(carousel.current);
        const btnPrev = document.getElementById('prev');

        if (btnPrev && btnPrev?.hasAttribute('style')) {
            btnPrev.removeAttribute('style');
        }

        if (step < numberOfSlides) {
            setStep(prevState => prevState + 1);
        }

        if (step === numberOfSlides - 1) {
            e.currentTarget.setAttribute('style', 'visibility: hidden');
        }
    }

    const defineRule = () => {
        let value = 0;

        if (step) {            
            value = -width*step;
            return `translate(${value}px, 0%)`;
        }
    }

    return (
        <>
            <ButtonStyled onClick={onButtonPrevClick} aria-label="previous" id="prev">
                <IconContext.Provider value={{ style: iconStyle }}>
                    <IoIosArrowBack />
                </IconContext.Provider>
            </ButtonStyled>
            <Container carousel>
                <ListStyled ref={carousel} style={{transform: move? defineRule() : ''}}>{
                images.items.map(({ src, alt }) => (
                    <ItemStyled key={src}>
                        <ImageStyled src={src} alt={alt} />
                    </ItemStyled>
                ))
                }</ListStyled>
            </Container>
            <ButtonStyled onClick={onButtonNextClick} aria-label="next" id="next">
                <IconContext.Provider value={{ style: iconStyle }}>
                    <IoIosArrowForward/>
                </IconContext.Provider>
            </ButtonStyled>
        </>
    )
}

export default Carousel;