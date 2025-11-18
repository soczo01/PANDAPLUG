import React, { useEffect, useState } from "react";

export default function TermekLista() {
    const [termekek, setTermekek] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/termekek")
            .then(res => res.json())
            .then(data => {
                console.log("BEÉRKEZETT:", data);
                setTermekek(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Hiba:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Betöltés...</p>;

    return (
        <div className="termek-lista">
            <h1>Termékek</h1>

            <div className="termek-grid">
                {termekek.map((t) => (
                    <div className="termek-kartya" key={t.termek_id}>

                        {/* KÉP MEGJELENÍTÉSE → kep_id + .png */}
                        {t.kep_id && (
                            <img
                                src={`http://localhost:8080/images/${t.kep_id}.png`}
                                alt={t.Nev}
                                className="termek-kep"
                            />
                        )}

                        <h2>{t.Nev}</h2>

                        <p><strong>Ár:</strong> {t["Ár (usd)"]} USD</p>
                        <p><strong>Típus:</strong> {t.Típus}</p>
                        <p><strong>Szín:</strong> {t.Szín}</p>
                        <p><strong>Méret:</strong> {t.Méret}</p>
                        <p><strong>Státusz:</strong> {t.Státusz}</p>

                        <button className="kosar-btn">
                            Kosárba
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
