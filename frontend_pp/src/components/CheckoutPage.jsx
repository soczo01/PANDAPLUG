import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function CheckoutPage() {
    const { cart, setCart } = useCart();
    const navigate = useNavigate();
    
    // Szállítási adatok állapota
    const [formData, setFormData] = useState({
        nev: "",
        email: "",
        telefon: "",
        cim: "",
        megjegyzes: ""
    });

    const total = cart.reduce((sum, item) => sum + Number(item["Ár(usd)"] || 0), 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const rendelesAdatok = {
            felhasznalo: formData,
            termekek: cart,
            osszeg: total,
            datum: new Date().toISOString()
        };

        try {
            // Itt küldjük a backendnek (ezt az útvonalat majd meg kell írnod a szerveren)
            const response = await fetch("http://localhost:8080/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(rendelesAdatok)
            });

            if (response.ok) {
                alert("Sikeres rendelés!");
                setCart([]); // Kosár ürítése
                navigate("/"); // Vissza a főoldalra
            } else {
                alert("Hiba történt a rendelés során.");
            }
        } catch (error) {
            console.error("Hiba:", error);
        }
    };

    if (cart.length === 0) {
        return (
            <Container className="text-center mt-5">
                <h2>A kosarad üres, így nem tudsz rendelni.</h2>
                <Button variant="primary" onClick={() => navigate("/")}>Vissza a termékekhez</Button>
            </Container>
        );
    }

    return (
        <Container className="checkout-container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="checkout-title mb-0">Megrendelés</h1>
                <Button variant="secondary" onClick={() => navigate("/")}>Vissza a vásárláshoz</Button>
            </div>
            <Row>
                {/* Bal oldal: Adatok megadása */}
                <Col md={7}>
                    <Card className="checkout-card p-4">
                        <h3>Szállítási adatok</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Teljes név</Form.Label>
                                <Form.Control name="nev" type="text" required onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email cím</Form.Label>
                                <Form.Control name="email" type="email" required onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Telefonszám</Form.Label>
                                <Form.Control name="telefon" type="text" required onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Szállítási cím</Form.Label>
                                <Form.Control name="cim" as="textarea" rows={2} required onChange={handleChange} />
                            </Form.Group>
                            <Button variant="success" type="submit" size="lg" className="w-100 mt-3">
                                Rendelés véglegesítése
                            </Button>
                        </Form>
                    </Card>
                </Col>

                {/* Jobb oldal: Összegzés */}
                <Col md={5}>
                    <Card className="checkout-summary p-4">
                        <h3>Összesítés</h3>
                        <hr className="hr" />
                        {cart.map((item, idx) => (
                            <div key={idx} className="d-flex justify-content-between mb-2">
                                <span>{item.Név} ({item.Méret})</span>
                                <span>${item["Ár(usd)"]}</span>
                            </div>
                        ))}
                        <hr className="hr" />
                        <div className="d-flex justify-content-between fw-bold fs-4">
                            <span>Fizetendő:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}