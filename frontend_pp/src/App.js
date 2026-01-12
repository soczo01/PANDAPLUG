
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Kosar from "./components/Kosar";
import Filter from "./components/Filter";
import TermekLista from "./components/TermekLista";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import RegForm from "./components/RegForm";
import { jwtDecode } from "jwt-decode";
import { getToken, logout } from "./api";

function App() {
    const [user, setUser] = useState(null);
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (token) {
            const decoded = jwtDecode(token);
            setUser({ username: decoded.username, role: decoded.role });
        }
    }, []);

    return (
        <CartProvider>
            {!user ? (
                <div className="container mt-5 d-flex justify-content-center">
                    {showRegister ? (
                        <RegForm onSwitchToLogin={() => setShowRegister(false)} />
                    ) : (
                        <LoginForm
                            onLogin={setUser}
                            onSwitchToRegister={() => setShowRegister(true)}
                        />
                    )}
                </div>
            ) : (
                <>
                    <Menu />
                    <Kosar />
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            logout();
                            setUser(null);
                        }}
                    >
                        Kijelentkezés
                    </button>
                    <Filter />
                    <TermekLista />
                </>
            )}
        </CartProvider>
    );
}

export default App;
