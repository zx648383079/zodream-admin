export interface IProduct {
    id:           string;
    name:         string;
    thumb:        string;
    price:        string;
    market_price: string;
    shop:         string;
}

export interface IHomeProduct {
    hot_products: IProduct[];
    new_products: IProduct[];
    best_products: IProduct[];
}
