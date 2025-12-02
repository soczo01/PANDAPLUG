import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Details from "./Details";

export default function TermekLista({ selectedCategory, filters }) {
    const [termekek, setTermekek] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const { setCart } = useCart();

    // ------------ TERMÉKEK BETÖLTÉSE LAPOKBAN --------------
    const loadProducts = async (nextPage = 1) => {
    try {
        const res = await fetch(
            `http://localhost:8080/api/termekek/paged?page=${nextPage}&limit=16`
        );
        const data = await res.json();

        // 🔥 EZT ITT KELL ELHELYEZNI, SEHOL MÁSHOL
        if (!Array.isArray(data)) {
            console.error("Hibás adat érkezett:", data);
            setHasMore(false);
            return;
        }

        if (data.length === 0) {
            setHasMore(false);
            return;
        }

        if (nextPage === 1) {
            setTermekek(data);
        } else {
            setTermekek(prev => [...prev, ...data]);
        }

    } catch (err) {
        console.error("Betöltési hiba:", err);
    } finally {
        setLoading(false);
        setLoadingMore(false);
    }
};

    // ------------ ELSŐ BETÖLTÉS --------------
    useEffect(() => {
        loadProducts(1);
    }, []);

    // ------------ GÖRGETÉS LISTENER --------------
    useEffect(() => {
        const handleScroll = () => {
            if (!hasMore || loadingMore) return;

            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 500
            ) {
                setLoadingMore(true);
                setPage(prev => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore, loadingMore]);

    // ------------ LAP VÁLTOZÁSAKOR TÖLTÜNK --------------
    useEffect(() => {
        if (page > 1) loadProducts(page);
    }, [page]);

    // ---------------- SZŰRÉS (mint eddig) ------------------
    const filteredProducts = termekek
        .filter((t) => {
            // KATEGÓRIA
            if (selectedCategory !== "ALL") {
                const map = {
                    shirts: "polo",
                    hoodies: "pulover",
                    pants: "nadrag",
                    shorts: "rovidnadrag"
                };
                if (t["Típus"] !== map[selectedCategory]) return false;
            }

            if (filters.brand !== "ALL" && t["Márka"] !== filters.brand) return false;
            if (filters.size !== "ALL" && t["Méret"] !== filters.size) return false;
            if (filters.color !== "ALL" && t["Szín"] !== filters.color) return false;

            return true;
        })
        .sort((a, b) => {
            if (filters.price === "ASC") return a["Ár(usd)"] - b["Ár(usd)"];
            if (filters.price === "DESC") return b["Ár(usd)"] - a["Ár(usd)"];
            return 0;
        });

    // ------------ KOSÁRBA --------------
    const handleAddToCart = (termek_id) => {
        fetch("http://localhost:8080/api/cart/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: 1,
                termek_id,
                mennyiseg: 1,
            }),
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

            {/* Részletes nézet */}
            <Details
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
    onAddToCart={handleAddToCart}
    onSelectProduct={(p) => setSelectedProduct(p)}
/>



            <h1 className="mb-4 text-center">Termékek</h1>

            <div className="row g-4">
                {filteredProducts.map((t) => (
                    <div
                        className="col-6 col-md-4 col-lg-3"
                        key={t.termek_id}
                        onClick={() => setSelectedProduct(t)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="card h-100 text-center shadow-sm">

                            <img
                                src={`http://localhost:8080/images/${t.kep_id}.png`}
                                className="card-img-top p-3"
                                style={{ height: "250px", objectFit: "contain" }}
                                alt={t.Nev}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{t["Név"]}</h5>
                                <p className="card-text.fw-bold">${t["Ár(usd)"]}</p>
                                <p className="text-muted mb-2">
                                    Méret: <strong>{t["Méret"]}</strong>
                                </p>

                                <button
                                    className="btn btn-dark w-100"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart(t.termek_id);
                                    }}
                                >
                                    Kosárba
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {loadingMore && <p className="text-center mt-4">Töltés...</p>}

            {!hasMore && (
                <p className="text-center mt-4 text-muted">
                    Nincsen több termék.
                </p>
            )}
        </div>
    );
}
