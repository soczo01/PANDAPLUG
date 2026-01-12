import { useState } from "react";
import { register } from "../api";

export default function RegForm({ onSwitchToLogin }) {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const [userdata, setUserdata] = useState({
        username: "",
        email: "",
        password: "",
        role: "user",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        try {
            await register(
                userdata.username,
                userdata.password,
                userdata.email,
                userdata.role
            );
            setMessage("Sikeres regisztráció! Most jelentkezz be.");
            setTimeout(() => {
                onSwitchToLogin();
            }, 1500);
        } catch (err) {
            setError(err.message || "Hiba a regisztráció során");
        }
    };

    return (
        <div>
            <h2>Regisztráció</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Felhasználónév:</label>
                    <input
                        type="text"
                        name="username"
                        value={userdata.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userdata.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Jelszó:</label>
                    <input
                        type="password"
                        name="password"
                        value={userdata.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Regisztráció</button>
            </form>

            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <p>
                Már van fiókod?{" "}
                <button onClick={onSwitchToLogin}>Bejelentkezés</button>
            </p>
        </div>
    );
}
