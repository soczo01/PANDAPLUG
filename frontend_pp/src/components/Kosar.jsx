import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Kosar() {
    const { cart, setCart } = useCart();

    // Kosár friss lekérése
    useEffect(() => {
        fetch("http://localhost:8080/api/cart/1")
            .then(res => res.json())
            .then(data => setCart(data));
    }, [setCart]);

    const removeItem = (itemId) => {
        fetch(`http://localhost:8080/api/cart/remove/${itemId}`, {
            method: "DELETE"
        })
        .then(() =>
            fetch("http://localhost:8080/api/cart/1")
                .then(res => res.json())
                .then(cartData => setCart(cartData))
        );
    };

    const clearCart = () => {
        fetch("http://localhost:8080/api/cart/clear/1", {
            method: "DELETE"
        })
        .then(() => setCart([]));
    };

    return (
        <div className="kosar">
            <h1>Kosár</h1>

            {cart.length === 0 && <p>A kosár üres.</p>}

            {cart.map(item => (
                <div className="kosar-item" key={item.item_id}>
                    <img
                        src={`http://localhost:8080/images/${item.kep_id}.png`}
                        alt={item.Nev}
                        className="kosar-kep"
                    />
                    <div className="info">
                        <h3>{item.Nev}</h3>
                        <p>{item["Ár (usd)"]} USD</p>
                        <p>Mennyiség: {item.mennyiseg}</p>
                    </div>
                    <button
                        onClick={() => removeItem(item.item_id)}
                    >
                        Törlés
                    </button>
                </div>
            ))}

            {cart.length > 0 && (
                <button className="clear-cart" onClick={clearCart}>
                    Kosár ürítése
                </button>
            )}
        </div>
    );
}
