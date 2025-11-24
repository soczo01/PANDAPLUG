import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import TermekLista from "./components/TermekLista";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <CartProvider>
      <Menu onCategoryChange={setSelectedCategory} />
      <div className="container mt-4">
        <TermekLista selectedCategory={selectedCategory} />
      </div>
    </CartProvider>
  );
}

export default App;
