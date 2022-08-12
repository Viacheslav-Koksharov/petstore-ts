import { IProduct } from '../interfaces/Product.interface';

interface IBasketContextProps {
    children?: React.ReactNode;
}

interface IBasketContext {
    basketItems: IProduct[];
    setBasketItems: (basketItems: IProduct[]) => void;
}

export type { IBasketContextProps, IBasketContext };