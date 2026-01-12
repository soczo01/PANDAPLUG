import { useState } from "react";
import { login } from "../api";
import { jwtDecode } from "jwt-decode";

function LoginForm({ onLogin, onSwitchToRegister }) {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
        const data = await login(user, pwd);
        const decoded = jwtDecode(data.accessToken);  // <--- itt változott
        onLogin({ 
            username: decoded.username, 
            role: decoded.jogosultsag   // <--- backend JWT mezője
        });
    } catch (err) {
        setError("Hibás felhasználónév vagy jelszó");
    } finally {
        setLoading(false);
    }
};


    return (
        <div>
            <h1>Bejelentkezés</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Felhasználónév:</label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Jelszó:</label>
                    <input
                        type="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    Bejelentkezés
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <p>
                Nincs még fiókod?{" "}
                <button onClick={onSwitchToRegister}>Regisztráció</button>
            </p>
        </div>
    );
}

export default LoginForm;
