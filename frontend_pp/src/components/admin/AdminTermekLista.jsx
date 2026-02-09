import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const LIMIT = 16;

export default function AdminTermekLista({ user }) {
    const [termekek, setTermekek] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [editProduct, setEditProduct] = useState(null);
    const [saving, setSaving] = useState(false);

    const observerRef = useRef(null);

    const loadMore = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const res = await fetch(
                `/api/termekek/paged?page=${page}&limit=${LIMIT}`
            );
            if (!res.ok) throw new Error();

            const data = await res.json();

            setTermekek(prev => [...prev, ...data]);
            setHasMore(data.length === LIMIT);
            setPage(prev => prev + 1);
        } catch {
            setError("Nem sikerült betölteni a termékeket!");
        } finally {
            setLoading(false);
        }
    };

    // első betöltés
    useEffect(() => {
        loadMore();
        // eslint-disable-next-line
    }, []);

    // infinite scroll observer
    useEffect(() => {
        if (!observerRef.current) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });

        observer.observe(observerRef.current);

        return () => observer.disconnect();
        // eslint-disable-next-line
    }, [observerRef.current, hasMore, loading]);

    // törlés
    const handleDelete = async (id) => {
        if (!window.confirm("Biztosan törlöd ezt a terméket?")) return;
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`/api/termekek/admin/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) throw new Error();

            setTermekek(prev => prev.filter(t => t.termek_id !== id));
        } catch {
            alert("Hiba a törlés során!");
        }
    };

    // szerkesztés
    const handleEdit = (termek) => setEditProduct({ ...termek });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleEditSave = async () => {
        setSaving(true);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(
                `/api/termekek/admin/${editProduct.termek_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(editProduct)
                }
            );
            if (!res.ok) throw new Error();

            setTermekek(prev =>
                prev.map(t =>
                    t.termek_id === editProduct.termek_id ? editProduct : t
                )
            );
            setEditProduct(null);
        } catch {
            alert("Hiba a szerkesztés során!");
        } finally {
            setSaving(false);
        }
    };

    if (error) return <div className="text-danger text-center mt-5">{error}</div>;

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Admin terméklista</h2>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Márka</th>
                        <th>Ár (USD)</th>
                        <th>Méret</th>
                        <th>Típus</th>
                        <th>Kép</th>
                        <th>Művelet</th>
                    </tr>
                </thead>
                <tbody>
                    {termekek.map(t => (
                        <tr key={t.termek_id}>
                            <td>{t.termek_id}</td>
                            <td>{t["Név"]}</td>
                            <td>{t["Márka"]}</td>
                            <td>{t["Ár(usd)"]}</td>
                            <td>{t["Méret"]}</td>
                            <td>{t["Típus"]}</td>
                            <td>
                                <img
                                    src={`/images/${t.kep_id}.png`}
                                    alt="kep"
                                    style={{ width: 60 }}
                                />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(t.termek_id)}
                                >
                                    Törlés
                                </Button>{" "}
                                <Button
                                    variant="warning"
                                    size="sm"
                                    onClick={() => handleEdit(t)}
                                >
                                    Szerkesztés
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* infinite scroll sentinel */}
            <div ref={observerRef} style={{ height: 1 }} />

            {loading && (
                <div className="text-center my-3">Betöltés…</div>
            )}

            {!hasMore && (
                <div className="text-center text-muted my-3">
                    Nincs több termék
                </div>
            )}

            {/* Szerkesztő modal */}
            <Modal show={!!editProduct} onHide={() => setEditProduct(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Termék szerkesztése</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editProduct && (
                        <Form>
                            {["Név", "Márka", "Ár(usd)", "Méret", "Típus"].map(f => (
                                <Form.Group className="mb-2" key={f}>
                                    <Form.Label>{f}</Form.Label>
                                    <Form.Control
                                        name={f}
                                        value={editProduct[f] || ""}
                                        onChange={handleEditChange}
                                    />
                                </Form.Group>
                            ))}
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEditProduct(null)}>
                        Mégse
                    </Button>
                    <Button variant="primary" onClick={handleEditSave} disabled={saving}>
                        Mentés
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
