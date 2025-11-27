import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Filter({ onFilterChange }) {
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceRange, setPriceRange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/filters/sizes")
            .then(res => res.json())
            .then(data => setSizes(Array.isArray(data) ? data : []));

        fetch("http://localhost:8080/api/filters/colors")
            .then(res => res.json())
            .then(data => setColors(Array.isArray(data) ? data : []));

        fetch("http://localhost:8080/api/filters/prices")
            .then(res => res.json())
            .then(data => setPriceRange(data));
    }, []);

    return (
        <NavDropdown title="Filter" id="filter-dropdown" className="text-white">

            <NavDropdown.Header>Márka</NavDropdown.Header>

            {/* --- ÖSSZES MÁRKA --- */}
            <NavDropdown.Item
                onClick={() => onFilterChange({ brand: "ALL" })}
            >
                Összes
            </NavDropdown.Item>

            {/* --- DINAMIKUS MÁRKÁK --- */}
            {brands.map((c) => (
                <NavDropdown.Item
                    key={c.markanev}
                    onClick={() => onFilterChange({ brand: c.markanev })}
                >
                    {c.markanev}
                </NavDropdown.Item>
            ))}

            {/* MÉRET */}
            <NavDropdown.Header>Méret</NavDropdown.Header>

            {/* --- ÖSSZES MÉRET --- */}
            <NavDropdown.Item 
                onClick={() => onFilterChange({ size: "ALL" })}
            >
                Összes
            </NavDropdown.Item>

            {/* --- DINAMIKUS MÉRETEK --- */}
            {sizes.map((s) => (
                <NavDropdown.Item
                    key={s.meretnev}
                    onClick={() => onFilterChange({ size: s.meretnev })}
                >
                    {s.meretnev}
                </NavDropdown.Item>
            ))}

            <NavDropdown.Divider />

            {/* SZÍN */}
            <NavDropdown.Header>Szín</NavDropdown.Header>

            {/* --- ÖSSZES SZÍN --- */}
            <NavDropdown.Item
                onClick={() => onFilterChange({ color: "ALL" })}
            >
                Összes
            </NavDropdown.Item>

            {/* --- DINAMIKUS SZÍNEK --- */}
            {colors.map((c) => (
                <NavDropdown.Item
                    key={c.szinnev}
                    onClick={() => onFilterChange({ color: c.szinnev })}
                >
                    {c.szinnev}
                </NavDropdown.Item>
            ))}

            <NavDropdown.Divider />

            {/* ÁR */}
            <NavDropdown.Header>Ár</NavDropdown.Header>
            <NavDropdown.Item onClick={() => onFilterChange({ price: "ASC" })}>
                Ár: alacsony → magas
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => onFilterChange({ price: "DESC" })}>
                Ár: magas → alacsony
            </NavDropdown.Item>

        </NavDropdown>
    );
}
