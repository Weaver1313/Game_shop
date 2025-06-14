import styles from "./FilterProduct.module.css";
import React, { useContext } from "react";
import { FilterContext, SetFilterContext } from "../../Context";
const categories = [
    {
        key: "",
        name: "Все",
    },
    {
        key: "laptop",
        name: "Ноутбуки",
    },
    {
        key: "headphones",
        name: "Наушники",
    },
    {
        key: "mouse",
        name: "Мышки",
    },
    {
        key: "pc",
        name: "ПК",
    },
];

export default function FilterProduct() {
    const setSearchParams = useContext(SetFilterContext);

    const filter = (type) => {
        setSearchParams({ category: type });
    };

    return (
        <div className={styles.category}>
            {categories.map((el) => (
                <button
                    onClick={() => {
                        filter(el.key);
                    }}
                    type="button"
                    key={el.key}
                >
                    {el.name}
                </button>
            ))}
        </div>
    );
}
