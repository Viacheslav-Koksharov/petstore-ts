import { ListStyled, ItemStyled } from './ProductsList.styled';
import products from '../../mocks/data/products.json';
import IProduct from '../../interfaces/Products.interface';

const ProductsList = () => {
    const items: IProduct[] = [...products];

    return (
        <ListStyled>{
            items.map(item => (
                <ItemStyled key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                </ItemStyled>
        ))
        }</ListStyled>
    )
}

export default ProductsList;
