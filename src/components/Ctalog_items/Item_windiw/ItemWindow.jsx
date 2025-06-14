import React from "react";
import styles from "./itemWindow.module.css";

export default function ItemWindow({ item, setInOpenWindowItem }) {
    return (
        <div className={styles.block__item__window}>
            <div className={styles.item}>
                <div onClick={() => setInOpenWindowItem(null)}>
                    <img
                        className={styles.block__item__window__img}
                        src={`/img/${item.img}`}
                        alt=""
                    />
                </div>

                <div>
                    <span>{item.title}</span>
                </div>

                <div>
                    <span>{item.price}р</span>
                </div>

                <div>
                    <span>{item.desc}</span>
                </div>
            </div>
        </div>
    );
}
