import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.css";
import Basket from "../Basket/basket";

export default function Header() {
    const [basketInOpen, setBasketInOpen] = useState(false);
    return (
        <>
            <div className={styles.header}>
                <Navigation
                    setBasketInOpen={setBasketInOpen}
                    basketInOpen={basketInOpen}
                />
            </div>
            {basketInOpen && <Basket />}
        </>
    );
}
