import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TermekLista() {
  const [termekek, setTermekek] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => setTermekek(data))
      .catch(err => console.error('Hiba:', err));
  }, []);

  const handleKosarba = (t) => {
    if (t['Státusz'] === 'Nem elérhető') {
      alert('Ez a termék jelenleg nem elérhető!');
    } else {
      alert(`${t['Név']} (${t['Méret']}) a kosárba került!`);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {termekek.map((t) => (
        <Card key={t.termek_id} style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            // Itt használjuk a kep_id mezőt a kép nevéhez

            
            src={`http://localhost:8080/images/${t.kep_id}.png`}
            alt={t['Név']}
            style={{ height: '180px', objectFit: 'cover' }}

            />
          <Card.Body style={{ minHeight: '200px' }}>
            <Card.Title>{t['Név']}</Card.Title>

            <p>Ár: {t['Ár(usd)']} USD</p>
            <p>Méret: {t['Méret']}</p>
            <p>Típus: {t['Típus']}</p>
            <p>Szín: {t['Szín']}</p>
            <p>Státusz: {t['Státusz']}</p>

            <Button
              type="button"
              variant="primary"
              disabled={t['Státusz'] !== 'Elérhető'}
              onClick={() => handleKosarba(t)}
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
