import { IProduct } from '../../interfaces/Product.interface';

interface IOrder {
    items: IProduct[];
    total: number;
}

interface IOrders {
    map(arg0: ({ order }: any) => JSX.Element): import("react").ReactNode;
    order: IOrder[]
}

export type { IOrder, IOrders };