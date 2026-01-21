import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Filter({ onFilterChange }) {
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceRange, setPriceRange] = useState(null);

    useEffect(() => {
        // MÉRETEK
        fetch("http://localhost:8080/api/filters/sizes")
            .then(res => res.json())
            .then(data => setSizes(Array.isArray(data) ? data : []));

        // SZÍNEK
        fetch("http://localhost:8080/api/filters/colors")
            .then(res => res.json())
            .then(data => setColors(Array.isArray(data) ? data : []));

        // 🔥 MÁRKÁK – EZ HIÁNYZOTT!
        fetch("http://localhost:8080/api/filters/brands")
            .then(res => res.json())
            .then(data => setBrands(Array.isArray(data) ? data : []));

        // ÁRTARTOMÁNY
        fetch("http://localhost:8080/api/filters/prices")
            .then(res => res.json())
            .then(data => setPriceRange(data));
    }, []);

    return (
        <NavDropdown title="Filter" id="filter-dropdown" className="text-white">

            {/* ---- MÁRKA --- */}
            <NavDropdown.Header >Márka</NavDropdown.Header>

            <NavDropdown.Item style={{ color: '#fff', fontWeight: 500 }}  onClick={() => onFilterChange({ brand: "ALL" })}>
                Összes
            </NavDropdown.Item>

            {brands.map((b) => (
                <NavDropdown.Item
                    key={b.markanev}
                    onClick={() => onFilterChange({ brand: b.markanev })}
                    style={{ color: '#fff', fontWeight: 500 }}
                >
                    {b.markanev}
                </NavDropdown.Item>
            ))}

            <NavDropdown.Divider />

            {/* ---- MÉRET ---- */}
            <NavDropdown.Header>Méret</NavDropdown.Header>

            <NavDropdown.Item style={{ color: '#fff', fontWeight: 500 }} onClick={() => onFilterChange({ size: "ALL" })}>
                Összes
            </NavDropdown.Item>

            {sizes.map((s) => (
                <NavDropdown.Item
                    key={s.meretnev}
                    onClick={() => onFilterChange({ size: s.meretnev })}
                    style={{ color: '#fff', fontWeight: 500 }}
                >
                    {s.meretnev}
                </NavDropdown.Item>
            ))}

            <NavDropdown.Divider />

            {/* ---- SZÍN ---- */}
            <NavDropdown.Header>Szín</NavDropdown.Header>

            <NavDropdown.Item style={{ color: '#fff', fontWeight: 500 }} onClick={() => onFilterChange({ color: "ALL" })}>
                Összes
            </NavDropdown.Item>

            {colors.map((c) => (
                <NavDropdown.Item
                    key={c.szinnev}
                    onClick={() => onFilterChange({ color: c.szinnev })}
                    style={{ color: '#fff', fontWeight: 500 }}
                >
                    {c.szinnev}
                </NavDropdown.Item>
            ))}

            <NavDropdown.Divider />

            {/* ---- ÁR ---- */}
            <NavDropdown.Header>Ár</NavDropdown.Header>
            <NavDropdown.Item style={{ color: '#fff', fontWeight: 500 }} onClick={() => onFilterChange({ price: "ASC" })}>
                Ár: alacsony → magas
            </NavDropdown.Item>

            <NavDropdown.Item style={{ color: '#fff', fontWeight: 500 }} onClick={() => onFilterChange({ price: "DESC" })}>
                Ár: magas → alacsony
            </NavDropdown.Item>
        </NavDropdown>
    );
}
