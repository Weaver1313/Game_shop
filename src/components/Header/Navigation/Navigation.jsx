import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { BsBasket } from "react-icons/bs";
import Basket from "../../Basket/basket";

const navMenu = [
    {
        name: "Кабинет",
        to: "/cabinet",
    },
    {
        name: "Контакты",
        to: "/contacts",
    },
    {
        name: "О нас",
        to: "/about_us",
    },
];

export default function Navigation({ setBasketInOpen, basketInOpen }) {
    return (
        <div className={`${styles.nav__block}`}>
            <div className={styles.logo}>
                <Link to="/" className={styles.nav__link}>
                    Shop
                </Link>
            </div>

            <div className={styles.nav__block__menu}>
                <BsBasket
                    onClick={() => setBasketInOpen(!basketInOpen)}
                    className={styles.basket}
                />
                {navMenu.map((el) => (
                    <Link key={el.to} className={styles.nav__link} to={el.to}>
                        {el.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
