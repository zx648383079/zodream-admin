import { ICategory } from './category';
import { IBrand } from './brand';

export interface IProduct {
    id:           string;
    name:         string;
    thumb:        string;
    price:        string;
    market_price: string;
    shop:         string;
    category?:     ICategory;
    brand?:        IBrand;
    stock?:        number;
    is_new?:       boolean;
    is_best?:      boolean;
    is_hot?:       boolean;
}

export interface IHomeProduct {
    hot_products: IProduct[];
    new_products: IProduct[];
    best_products: IProduct[];
}
