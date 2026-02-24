import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getProfile } from "../api";

export default function UserProfileModal({ show, onClose }) {
    const [uprofile, setUprofile] = useState(null);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!show) return;
        getProfile()
            .then(profile => setUprofile(profile.user || profile))
            .catch(() => setError("Hiba a profil lekérésekor"));
        // TODO: rendelések lekérése, ha van ilyen végpont
    }, [show]);

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Profil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {uprofile && (
                    <div>
                        <p><strong>Felhasználónév:</strong> {uprofile.username}</p>
                        <p><strong>Email:</strong> {uprofile.email}</p>
                    </div>
                )}
                <hr />
                <h5>Korábbi rendelések</h5>
                <p>Rendelés lista fejlesztés alatt...</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Bezárás</Button>
            </Modal.Footer>
        </Modal>
    );
}
