import { IconContext } from 'react-icons';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FooterStyled, TitleStyled, ListStyled, ItemStyled, LinkStyled, iconStyle } from './Footer.styled';

interface Props {
    message: string;
}

const Footer = ({ message }: Props) => {
    return (
        <FooterStyled>
            <TitleStyled>{message}</TitleStyled>
            <ListStyled>
                    <ItemStyled key="facebook">
                        <LinkStyled href="https://www.facebook.com/" aria-label="facebook" target="blank">
                            <IconContext.Provider value={{ style: iconStyle }}>
                                <FaFacebook /></IconContext.Provider>
                            </LinkStyled>
                    </ItemStyled>
                    <ItemStyled key="linkedin">
                        <LinkStyled href="https://www.linkedin.com/" aria-label="linkedin" target="blank">
                            <IconContext.Provider value={{ style: iconStyle }}>
                                <FaLinkedin/>
                            </IconContext.Provider>
                        </LinkStyled>
                    </ItemStyled>
                    <ItemStyled key="instagram">
                        <LinkStyled href="https://www.instagram.com/" aria-label="instagram" target="blank">
                            <IconContext.Provider value={{ style: iconStyle }}>
                                <FaInstagram/>
                            </IconContext.Provider>
                        </LinkStyled>
                    </ItemStyled>
                    <ItemStyled key="twitter">
                        <LinkStyled href="https://twitter.com/" aria-label="twitter" target="blank">
                            <IconContext.Provider value={{ style: iconStyle }}>
                                <FaTwitter/>
                            </IconContext.Provider>
                        </LinkStyled>
                    </ItemStyled>
                    <ItemStyled key="pinterest">
                        <LinkStyled href="https://www.pinterest.com/" aria-label="pinterest" target="blank">
                            <IconContext.Provider value={{ style: iconStyle }}>
                                <FaPinterest />
                            </IconContext.Provider>
                        </LinkStyled>
                    </ItemStyled>
           </ListStyled>
        </FooterStyled>
    )
}

export default Footer;