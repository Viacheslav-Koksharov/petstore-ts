import { MainStyled, SectionStyled, TitleStyled, ListStyled, ItemStyled, TextStyled } from './TermsAndConditions.styled';
import Sidebar from "../../components/Sidebar";
import conditions from '../../mocks/data/terms-and-conditions.json';

const TermsAndConditions = () => {
    return(
        <MainStyled>
            <Sidebar staticLinks/>
            <SectionStyled>
                <TitleStyled>Terms and Conditions</TitleStyled>
                <ListStyled>{
                    conditions.map(({content}) => (
                        <ItemStyled>
                            <TextStyled>{content}</TextStyled>
                        </ItemStyled>
                    ))
                    }</ListStyled>
            </SectionStyled>
        </MainStyled>
    )
}

export default TermsAndConditions;
