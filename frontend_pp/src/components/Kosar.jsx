import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Kosar() {
    const { cart, setCart } = useCart();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Kosár friss lekérése
    useEffect(() => {
        fetch("http://localhost:8080/api/cart/1")
            .then(res => res.json())
            .then(data => setCart(data));
    }, [setCart]);

    const removeItem = (itemId) => {
        fetch(`http://localhost:8080/api/cart/remove/${itemId}`, {
            method: "DELETE"
        })
        .then(() =>
            fetch("http://localhost:8080/api/cart/1")
                .then(res => res.json())
                .then(cartData => setCart(cartData))
        );
    };

    const clearCart = () => {
        fetch("http://localhost:8080/api/cart/clear/1", {
            method: "DELETE"
        })
        .then(() => setCart([]));
    };

    // Összesített ár számítása
    const total = cart.reduce((sum, item) => sum + Number(item["Ár(usd)"] || 0), 0);

    if (!Array.isArray(cart)) {
        return <div style={{color:'red'}}>Hiba: a kosár tartalma nem tömb!</div>;
    }

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow} className="cart-btn">
                <FaShoppingCart size={28} />
                {cart.length > 0 && (
                    <span className="cart-badge">{cart.length}</span>
                )}
            </Button>
            <Modal show={show} onHide={handleClose} centered contentClassName="cart-modal-overlay">
                <div className="cart-modal-card">
                    <Modal.Header closeButton className="cart-modal-header">
                        <Modal.Title className="cart-modal-title">Kosár tartalma</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="cart-modal-body">
                        {cart.length === 0 ? (
                            <p className="cart-modal-empty">A kosár üres.</p>
                        ) : (
                            <>
                                {cart.map(item => (
                                    <div className="cart-modal-item" key={item.item_id}>
                                        <img
                                            src={`http://localhost:8080/images/${item.kep_id}.png`}
                                            alt={item.Név}
                                            className="cart-modal-image"
                                        />
                                        <div className="cart-modal-details">
                                            <h2 className="cart-modal-title2">{item.Név}</h2>
                                            <p className="cart-modal-price">${item["Ár(usd)"]}</p>
                                            <p><strong>Márka:</strong> {item["Márka"]}</p>
                                            <p><strong>Szín:</strong> {item["Szín"]}</p>
                                            <p><strong>Méret:</strong> {item["Méret"]}</p>
                                            <p><strong>Státusz:</strong> {item["Státusz"]}</p>
                                            <Button size="sm" variant="danger" className="cart-modal-remove" onClick={() => removeItem(item.item_id)}>Törlés</Button>
                                        </div>
                                    </div>
                                ))}
                                <div className="cart-modal-summary">
                                    <div className="cart-modal-total-row">
                                        <span>Összesen:</span>
                                        <span className="cart-modal-total">${total.toFixed(2)}</span>
                                    </div>
                                    <Button className="cart-modal-order-btn" variant="success" block>➔ Tovább a megrendeléshez</Button>
                                </div>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer className="cart-modal-footer">
                        {cart.length > 0 && (
                            <Button className="cart-modal-clear" variant="secondary" onClick={clearCart}>Kosár ürítése</Button>
                        )}
                        <Button className="cart-modal-close" variant="primary" onClick={handleClose}>Bezárás</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
