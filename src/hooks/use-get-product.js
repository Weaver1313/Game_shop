import React, { useEffect } from "react";
import { useState } from "react";
const getProductsFromServer = () => [
    {
        id: 1,
        title: "ПК Кибертрон",
        img: "cybertron.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
        category: "pc",
        price: "100000",
    },
    {
        id: 2,
        title: "ПК Кибертрон V-2.0",
        img: "cybertron_v_2.0.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
        category: "pc",
        price: "150000",
    },
    {
        id: 3,
        title: "Razer Mamba",
        img: "Razer_mamba.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
        category: "mouse",
        price: "10500",
    },
    {
        id: 4,
        title: "Razer Kraken",
        img: "razer_kraken.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
        category: "headphones",
        price: "15000",
    },
    {
        id: 5,
        title: "MSI GE62",
        img: "msi_ge62.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
        category: "laptop",
        price: "200000",
    },
    {
        id: 6,
        title: "Razer Blade",
        img: "razer_blade.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
        category: "laptop",
        price: "200000",
    },
];

export default function useGetProduct(dispatch, setIsLoaded) {
    const [productsInServer, setProductsInServer] = useState([]);
    useEffect(() => {
        setIsLoaded(true);

        new Promise((resolve) => {
            setTimeout(() => {
                resolve(getProductsFromServer());
            }, 2000);
        })
            .then((loadedData) => {
                return loadedData;
            })

            .then((data) => {
                setProductsInServer(data);
                dispatch({ type: "SET_PRODUCTS_DATA", payload: data });
            })

            .finally(() => {
                setIsLoaded(false);
            });
    }, [dispatch]);
    return productsInServer;
}
