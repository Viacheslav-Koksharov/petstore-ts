import { IProduct } from '../../interfaces/Product.interface';

interface IOrder {
    items: IProduct[];
    total: number;
}

interface IOrders {
    order: IOrder[]
}

export type { IOrder,IOrders };