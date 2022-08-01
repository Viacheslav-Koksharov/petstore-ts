import { MainStyled } from './OffersView.styled';
import Sidebar from '../../components/Sidebar';
import ProductsList from '../../components/ProductsList';

const OffersView = () => {
    return (
        <MainStyled>
            <Sidebar />
            <ProductsList/>
        </MainStyled>
    )
}

export default OffersView;