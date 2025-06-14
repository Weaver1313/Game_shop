import React, { useContext } from "react";
import styles from "./basket.module.css";
import {
    ProductInBasketContext,
    SetProductInBasketContext,
} from "../../Context";
import { FaTrashCanArrowUp } from "react-icons/fa6";

export default function Basket() {
    const productInBasket = useContext(ProductInBasketContext);
    const setProductInBaske = useContext(SetProductInBasketContext);

    const delProductInBasket = (el) => {
        setProductInBaske({ type: "REMOVE_PRODUCT_FROM_BASKET", payload: el });
    };

    return (
        <div className={styles.basket}>
            <div className={styles.basket__content}>
                {productInBasket.length === 0 ? (
                    <div className={styles.product__mok}>
                        "Товары не добавлены"
                    </div>
                ) : (
                    productInBasket.map((el) => (
                        <article className={styles.basket__article}>
                            <div className={styles.basket__article__content}>
                                <div>
                                    <img src={`/img/${el.img}`} alt="" />
                                </div>
                                <div>
                                    <div>
                                        <span>{el.title}</span>
                                    </div>

                                    <div>
                                        <span>{el.price}р</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.basket__article__button}>
                                <FaTrashCanArrowUp
                                    className={styles.button}
                                    onClick={() => {
                                        delProductInBasket(el);
                                    }}
                                />
                            </div>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
