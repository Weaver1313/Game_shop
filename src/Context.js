import { createContext } from "react";

export const ProductContext = createContext([]);
export const FilterContext = createContext(null);
export const SetFilterContext = createContext(() => {});
export const ProductInBasketContext = createContext([]);
export const SetProductInBasketContext = createContext(() => {});
