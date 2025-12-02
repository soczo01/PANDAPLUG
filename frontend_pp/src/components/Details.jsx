import React, { useEffect, useState, useRef } from "react";
import "../App.css";

export default function Details({ product, onClose, onAddToCart, onSelectProduct }) {

    const [related, setRelated] = useState([]);
    const sliderRef = useRef(null);

    // -------- RELATED PRODUCTS --------
    useEffect(() => {
        if (!product) return;

        fetch(`http://localhost:8080/api/termekek/tipus/${product["Típus"]}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter((p) => p.termek_id !== product.termek_id);
                const firstFive = filtered.slice(0, 5);

                // Duplázás → végtelen görgetés miatt
                setRelated([...firstFive, ...firstFive]);
            });
    }, [product]);


    // -------- AUTO SCROLL (végtelen, akadások nélkül) --------
    useEffect(() => {
        if (!sliderRef.current || related.length === 0) return;

        const slider = sliderRef.current;

        let scrollSpeed = 1; // px
        let maxScroll = slider.scrollWidth / 2; // fél pont → itt kell visszaugrani

        const interval = setInterval(() => {
            slider.scrollLeft += scrollSpeed;

            if (slider.scrollLeft >= maxScroll) {
                slider.scrollLeft = 0; // folytatólagos, nem ugrik láthatót
            }
        }, 20);

        return () => clearInterval(interval);
    }, [related]);

    if (!product) return null;

    return (
        <div className="details-overlay">
            <div className="details-card">

                <span className="details-close" onClick={onClose}>×</span>

                {/* BAL OLDAL */}
                <div className="details-left">
                    <img
                        src={`http://localhost:8080/images/${product.kep_id}.png`}
                        alt={product.Név}
                        className="details-image"
                    />
                </div>

                {/* JOBB OLDAL */}
                <div className="details-right">

                    <h2 className="details-title">{product["Név"]}</h2>
                    <p className="details-price">${product["Ár(usd)"]}</p>

                    <p><strong>Márka:</strong> {product["Márka"]}</p>
                    <p><strong>Szín:</strong> {product["Szín"]}</p>
                    <p><strong>Méret:</strong> {product["Méret"]}</p>
                    <p><strong>Státusz:</strong> Raktáron</p>

                    <button
                        className="details-cart-btn"
                        onClick={() => onAddToCart(product.termek_id)}
                    >
                        Kosárba
                    </button>

                    {/* ---- RELATED PRODUCTS ---- */}
                    <h3 className="related-title">További Termékek</h3>

                    <div className="related-slider" ref={sliderRef}>
                        {related.map((r, index) => (
                            <div
                                key={index} // duplázás miatt index!
                                className="related-card"
                                onClick={() => onSelectProduct(r)}
                            >
                                <img
                                    src={`http://localhost:8080/images/${r.kep_id}.png`}
                                    className="related-img"
                                    alt={r.Név}
                                />
                                <p className="related-name">{r["Név"]}</p>
                                <p className="related-price">${r["Ár(usd)"]}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}
