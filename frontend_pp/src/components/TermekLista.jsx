import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function TermekLista({ selectedCategory }) {
    const [termekek, setTermekek] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setCart } = useCart();

    useEffect(() => {
        fetch("http://localhost:8080/api/termekek")
            .then(res => res.json())
            .then(data => {
                setTermekek(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // ---------- KATEGÓRIA SZŰRÉS ----------
    // A view1 "Típus" mező APO-értékei:
    // pólók → polo
    // pulcsik → hoodie
    // nadrágok → pants
    // rövidnadrág → shorts

    const filteredProducts = termekek.filter((t) => {
        if (!selectedCategory || selectedCategory === "ALL") return true;

        switch (selectedCategory) {
            case "shirts":
                return t.Típus === "polo";
            case "hoodies":
                return t.Típus === "hoodie";
            case "pants":
                return t.Típus === "pants" || t.Típus === "nadrag";
            case "shorts":
                return t.Típus === "shorts" || t.Típus === "short";
            default:
                return true;
        }
    });

    const handleAddToCart = (termek_id) => {
        fetch("http://localhost:8080/api/cart/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: 1,
                termek_id: termek_id,
                mennyiseg: 1
            })
        })
            .then(res => res.json())
            .then(() => {
                fetch("http://localhost:8080/api/cart/1")
                    .then(res => res.json())
                    .then(cartData => setCart(cartData));
            });
    };

    if (loading) return <p>Betöltés...</p>;

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Termékek</h1>

            <div className="row g-4">
                {filteredProducts.map((t) => (
                    <div className="col-6 col-md-4 col-lg-3" key={t.termek_id}>
                        <div className="card h-100 text-center shadow-sm">

                            <img
                                src={`http://localhost:8080/images/${t.kep_id}.png`}
                                className="card-img-top p-3"
                                style={{ height: "250px", objectFit: "contain" }}
                                alt={t.Nev}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{t.Nev}</h5>
                                <p className="card-text">{t["Ár (usd)"]} USD</p>

                                <button
                                    className="btn btn-dark w-100"
                                    onClick={() => handleAddToCart(t.termek_id)}
                                >
                                    Kosárba
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
