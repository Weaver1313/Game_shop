import React, { Children } from "react";
import {
    ProductInBasketContext,
    SetProductInBasketContext,
} from "../../Context";

export default function BasketProductProvider({
    productInBasket,
    children,
    dispatchProductInBasket,
}) {
    return (
        <ProductInBasketContext.Provider value={productInBasket}>
            <SetProductInBasketContext.Provider value={dispatchProductInBasket}>
                {children}
            </SetProductInBasketContext.Provider>
        </ProductInBasketContext.Provider>
    );
}
