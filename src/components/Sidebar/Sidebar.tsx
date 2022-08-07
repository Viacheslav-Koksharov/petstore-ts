import { AsideStyled } from './Sidebar.styled';
import { ISidebar } from '../../interfaces/Sidebar.interface';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import StaticLinksFilter from '../../components/StaticLinksFilter';

const Sidebar = ({offers, staticLinks}: ISidebar) => {

    return (
        <AsideStyled>
            {offers && <ProductsFilter/>}
            {staticLinks && <StaticLinksFilter/>}
        </AsideStyled>
    )
}

export default Sidebar;