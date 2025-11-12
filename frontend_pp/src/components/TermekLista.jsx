
import { useEffect, useState } from 'react';

export default function TermekLista() {
    const [termekek, setTermekek] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/termekek')
            .then(res => res.json())
            .then(data => setTermekek(data))
            .catch(err => console.error('Hiba:', err));
    }, []);

    return (
        <div>
            <h2>Termékek listája</h2>
            <ul>
                {termekek.map(t => (
                    <li key={t.termek_id}>
                        {t.Nev} — {t.Ar} USD — {t.Tipus} — {t.Szin}
                    </li>
                ))}
            </ul>
        </div>
    );
}
