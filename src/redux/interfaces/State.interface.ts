import { IOrder } from "./Order.interface";

interface IUser {
    name: string;
    email: string;
}

interface IState {
    user: IUser;
    token: null;
    loading: boolean;
    isLoggedIn: boolean;
    isFetchingCurrentUser: boolean;
    orders: IOrder[]
}

export type { IState };