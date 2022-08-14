import { IconContext } from 'react-icons';
import { MdPrivacyTip } from 'react-icons/md';
import { MainStyled, SectionStyled, ListStyled, ItemStyled, TextStyled, iconStyle } from './PrivacyPolicyView.styled';
import rules from '../../mocks/data/privacy-policy.json';
import Sidebar from "../../components/Sidebar";

const PrivacyPolicyView = () => {
    return(
        <MainStyled>
            <Sidebar staticLinks/>
            <SectionStyled>
                <ListStyled>{
                    rules.map(({content}) => (
                        <ItemStyled key={content}>
                            <IconContext.Provider value={{ style: iconStyle }}>
                                <MdPrivacyTip />
                            </IconContext.Provider>
                            <TextStyled>{content}</TextStyled>
                        </ItemStyled>
                    ))
                    }</ListStyled>
            </SectionStyled>
        </MainStyled>
    )
}

export default PrivacyPolicyView;
