import { useEffect, useState } from 'react';
import { AsideStyled, TitleStyled, ListStyled, ItemStyled, TextStyled } from './Sidebar.styled';
import products from '../../mocks/data/products.json';
import IProduct from '../../interfaces/Products.interface';

const Sidebar = () => {
    const [categories, setCategories] = useState<Array<string>>([]);

    useEffect(() => {
        const items: IProduct[] = [...products];
        let allCategories: string[] = [];

        for (const item of items) {
            if (!allCategories.includes(item.category)) {
                allCategories.push(item.category)
            }
        }
        setCategories(allCategories)   
    }, [])

    return (
        <AsideStyled>
            <TitleStyled>Categories</TitleStyled>
            <ListStyled>{
                categories.map(category => (
                    <ItemStyled key={category}>
                        <TextStyled>
                            {category}
                        </TextStyled>
                    </ItemStyled>
            ))
            }</ListStyled>
        </AsideStyled>
    )
}

export default Sidebar;