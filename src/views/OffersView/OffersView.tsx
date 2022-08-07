import { MainStyled } from './OffersView.styled';
import { ProductsProvider } from '../../context/ProductsContextProvider';
import Sidebar from '../../components/Sidebar';
import ProductsList from '../../components/ProductsList';

const OffersView = () => {
    return (
        <ProductsProvider>
            <MainStyled>
                <Sidebar offers/>
                <ProductsList cost/>
            </MainStyled>
        </ProductsProvider>
    )
}

export default OffersView;