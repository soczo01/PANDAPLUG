import { useState } from "react";

export default function SearchBar({ onResults }) {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (!trimmedQuery) return;

        setLoading(true);

        try {
            // Meghívjuk a meglévő backend search route-ot
            const response = await fetch(
                `http://localhost:8080/api/termekek/search?q=${encodeURIComponent(trimmedQuery)}`
            );

            if (!response.ok) throw new Error("Hiba a keresés során");

            const results = await response.json();

            // visszaküldjük a TermekLista-nak
            onResults(results);

        } catch (err) {
            console.error("Keresési hiba:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="d-flex mb-3" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control me-2"
                placeholder="Keresés..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Keresés..." : "Keresés"}
            </button>
        </form>
    );
}
