import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function AdminTermekLista({ user }) {
    const [termekek, setTermekek] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editProduct, setEditProduct] = useState(null); // szerkesztett termék
    const [saving, setSaving] = useState(false);

    // Termékek betöltése
    useEffect(() => {
        fetch("/api/termekek/paged?page=1&limit=1000")
            .then(res => res.json())
            .then(data => setTermekek(data))
            .catch(() => setError("Nem sikerült betölteni a termékeket!"))
            .finally(() => setLoading(false));
    }, []);

    // Termék törlése
    const handleDelete = async (id) => {
        if (!window.confirm("Biztosan törlöd ezt a terméket?")) return;
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`/api/termekek/admin/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (!res.ok) throw new Error("Törlés sikertelen");
            setTermekek(termekek.filter(t => t.termek_id !== id));
        } catch (err) {
            alert("Hiba a törlés során!");
        }
    };

    // Termék szerkesztése
    const handleEdit = (termek) => {
        setEditProduct({ ...termek });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleEditSave = async () => {
        setSaving(true);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`/api/termekek/admin/${editProduct.termek_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(editProduct)
            });
            if (!res.ok) throw new Error("Szerkesztés sikertelen");
            // Frissítsük a listát helyben
            setTermekek(termekek.map(t => t.termek_id === editProduct.termek_id ? editProduct : t));
            setEditProduct(null);
        } catch (err) {
            alert("Hiba a szerkesztés során!");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-center mt-5">Betöltés...</div>;
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
                            <td><img src={`/images/${t.kep_id}.png`} alt="kep" style={{width:60}} /></td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(t.termek_id)}>
                                    Törlés
                                </Button>{' '}
                                <Button variant="warning" size="sm" onClick={() => handleEdit(t)}>
                                    Szerkesztés
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Szerkesztő modal */}
            <Modal show={!!editProduct} onHide={() => setEditProduct(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Termék szerkesztése</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editProduct && (
                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Label>Név</Form.Label>
                                <Form.Control name="Név" value={editProduct["Név"] || ""} onChange={handleEditChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Márka</Form.Label>
                                <Form.Control name="Márka" value={editProduct["Márka"] || ""} onChange={handleEditChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Ár (USD)</Form.Label>
                                <Form.Control name="Ár(usd)" value={editProduct["Ár(usd)"] || ""} onChange={handleEditChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Méret</Form.Label>
                                <Form.Control name="Méret" value={editProduct["Méret"] || ""} onChange={handleEditChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Típus</Form.Label>
                                <Form.Control name="Típus" value={editProduct["Típus"] || ""} onChange={handleEditChange} />
                            </Form.Group>
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
