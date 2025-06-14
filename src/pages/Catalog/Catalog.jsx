import React from "react";
import styles from "./Catalog.module.css";
import FilterProduct from "../../components/Filter_product/FilterProduct";
import CatalogItems from "../../components/Ctalog_items/CatalogItems";
import { PacmanLoader } from "react-spinners";

export default function Catalog({ isLoaded }) {
    return (
        <>
            <div className={styles.catalog__block}>
                <div className={styles.banner}></div>
            </div>
            <FilterProduct />
            {isLoaded ? (
                <div className={styles.loader}>
                    <PacmanLoader color="#5a247b" />{" "}
                </div>
            ) : (
                <CatalogItems />
            )}
        </>
    );
}
