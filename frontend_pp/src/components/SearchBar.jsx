import { useState } from "react";

export default function SearchBar({ onQuery }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (!trimmedQuery) return;
        onQuery(trimmedQuery);
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
            <button type="submit" className="btn btn-primary">
                Keresés
            </button>
        </form>
    );
}
