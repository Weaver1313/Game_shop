import React, { useContext, useState } from "react";
import styles from "./CatalogItems.module.css";
import {
    FilterContext,
    ProductContext,
    SetProductInBasketContext,
} from "../../Context";
import ItemWindow from "./Item_windiw/itemWindow";

export default function CatalogItems() {
    const product = useContext(ProductContext);
    const filterContext = useContext(FilterContext);
    const categoryFilter = filterContext.get("category");
    const setProductInBasket = useContext(SetProductInBasketContext);

    const [inOpenWindowItem, setInOpenWindowItem] = useState(null);
    console.log(inOpenWindowItem);

    const filteredProducts = categoryFilter
        ? product.filter((el) => el.category === categoryFilter)
        : product;

    const addProductInBasket = (el) => {
        setProductInBasket({ type: "SET_PRODUCT_IN_BASKET", payload: el });
    };

    return (
        <div className={styles.block__article}>
            {filteredProducts.map((el) => (
                <article key={el.id} className={styles.article}>
                    <div>
                        <img
                            className={styles.article__img}
                            onClick={() => {
                                setInOpenWindowItem(el);
                            }}
                            src={`/img/${el.img}`}
                        />
                    </div>
                    <div className={styles.article__title}>
                        <span>{el.title}</span>
                    </div>
                    <div className={styles.article__title}>
                        <span>{el.price}р</span>
                        <button
                            onClick={() => {
                                addProductInBasket(el);
                            }}
                            type="button"
                        >
                            +
                        </button>
                    </div>
                    <div></div>
                </article>
            ))}
            {inOpenWindowItem && (
                <ItemWindow
                    item={inOpenWindowItem}
                    setInOpenWindowItem={setInOpenWindowItem}
                />
            )}
        </div>
    );
}
