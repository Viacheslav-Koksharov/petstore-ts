import { useState, useEffect, useContext } from 'react';
import { ListStyled, ItemStyled, LinkStyled, ImageContainerStyled, TextStyled, button } from './ProductsList.styled';
import { IProduct } from '../../interfaces/Product.interface';
import {IProductsList } from '../../interfaces/ProductsList.interface';
import { productsContext } from '../../context/ProductsContextProvider';
import products from '../../mocks/data/products.json';
import Button from '../Button/Button';

const ProductsList = ({ cost }: IProductsList) => {
    const [visibleProducts, setVisibleProducts] = useState<IProduct[]>(products);
    const { filteredProducts } = useContext(productsContext);

    useEffect(() => {
        setVisibleProducts(products);
    }, [])

    useEffect(() => {
        if (filteredProducts.length > 0) {
            setVisibleProducts(filteredProducts);
        }
    }, [filteredProducts])

    return (
        <ListStyled>{
            visibleProducts.map(({id, image, name, price}) => (
                <ItemStyled key={id}>
                    <LinkStyled to={`/offers/${id}`}>
                        <ImageContainerStyled>
                            <img src={image} alt={name} />
                        </ImageContainerStyled>
                        <TextStyled>{name}</TextStyled>
                        <TextStyled cost={cost}>{price}</TextStyled>
                        <Button style={button} aria-label="add to cart">add to cart</Button>
                    </LinkStyled>
                </ItemStyled>
        ))
        }</ListStyled>
    )
}

export default ProductsList;
