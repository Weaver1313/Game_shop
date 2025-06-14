import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Header from "./components/Header/Header";
import Contacts from "./pages/Contacts/Contacts";
import Cabinet from "./pages/Cabinet/Cabinet";
import AboutUs from "./pages/About_us/AboutUs";
import { ProductContext } from "./Context";
import useGetProduct from "./hooks/use-get-product";
import { useReducer, useState } from "react";
import { productListReducer } from "./Store/Reducers/productListReducer";
import FilterProvider from "./Store/Context/FilterProvider";
import BasketProductProvider from "./Store/Context/BasketProductProvider";
import { productInBasketReduser } from "./Store/Reducers/productInBasketReducer";

function App() {
    const [productData, dispatch] = useReducer(productListReducer, []);
    const [isLoaded, setIsLoaded] = useState(false);
    const [productInBasket, dispatchProductInBasket] = useReducer(
        productInBasketReduser,
        []
    );

    useGetProduct(dispatch, setIsLoaded);

    return (
        <BasketProductProvider
            productInBasket={productInBasket}
            dispatchProductInBasket={dispatchProductInBasket}
        >
            <FilterProvider>
                <ProductContext.Provider value={productData}>
                    <div className="container">
                        <Header />
                        <Routes>
                            <Route
                                path="/"
                                element={<Catalog isLoaded={isLoaded} />}
                            ></Route>
                            <Route
                                path="/contacts"
                                element={<Contacts />}
                            ></Route>
                            <Route
                                path="/cabinet"
                                element={<Cabinet />}
                            ></Route>
                            <Route
                                path="/about_us"
                                element={<AboutUs />}
                            ></Route>
                        </Routes>
                    </div>
                </ProductContext.Provider>
            </FilterProvider>
        </BasketProductProvider>
    );
}

export default App;
