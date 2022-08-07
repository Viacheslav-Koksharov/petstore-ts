import { useEffect, useState, useContext } from 'react';
import { ContainerStyled, TitleStyled, ListStyled, ItemStyled, button } from './ProductsFilter.styled';
import { IProduct } from '../../interfaces/Product.interface';
import { productsContext } from '../../context/ProductsContextProvider';
import ImageCategory from '../../images/aside_category.jpg';
import photo1 from '../../images/aside_photo1.jpg';
import photo2 from '../../images/aside_photo2.jpg';
import photo3 from '../../images/aside_photo3.jpg';
import photo4 from '../../images/aside_photo4.jpg';
import products from '../../mocks/data/products.json';
import Container from '../Container';
import Button from '../Button';

const ProductsFilter = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const { setFilteredProducts } = useContext(productsContext);
    const images = [photo1, photo2, photo3, photo4];

    useEffect(() => {
        let allCategories: string[] = [];

        for (const product of products) {
            if (!allCategories.includes(product.category)) {
                allCategories.push(product.category)
            }
        }
        setCategories(allCategories)
    }, [])

    const onButtonClick = (e: React.MouseEvent) => {
        const filteredItems: IProduct[] = products.filter(({category}) => category === e.currentTarget.id);

        e.currentTarget.id !== 'all'
            ? setFilteredProducts(filteredItems)
            : setFilteredProducts(products);
    }

    return(
        <>
            <ContainerStyled>
                <TitleStyled>Category</TitleStyled>
                <ListStyled>{
                    <>
                        {categories.map(category => (
                            <ItemStyled key={category}>
                                <Button id={category} style={button} onClick={onButtonClick}>
                                    {category}
                                </Button>
                            </ItemStyled>
                        ))}
                        <ItemStyled>
                            <Button id="all" style={button} onClick={onButtonClick}>
                                all products
                            </Button>
                        </ItemStyled>
                    </>
                }</ListStyled>
                <Container>
                    <img src={ImageCategory} alt="dog" />
                </Container>
            </ContainerStyled>
            <ListStyled>{
                images.map(image => (
                    <ItemStyled key={image}>
                        <img src={image} alt="animal food" />
                    </ItemStyled>
                ))
            }</ListStyled>
        </>
    )
}

export default ProductsFilter;