import { IProduct } from "./product";

export interface IStore {
    id: number;
    name: string;
}

export interface ICartItem {
    id: number;
    amount: number;
    price: number;
    goods: IProduct;
}

export interface ICart {
    shop: IStore;
    goods_list: ICartItem[];
}
