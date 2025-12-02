// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import Filter from "./components/Filter";
import TermekLista from "./components/TermekLista";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // 🔥 Filter state
  const [filters, setFilters] = useState({
    size: "ALL",
    color: "ALL",
    brand: "ALL",
    price: "ALL",
  });

  // 🔥 EZ HIÁNYZOTT!
  const handleFilterChange = (newFilter) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilter,
    }));
  };

  return (
    <CartProvider>

      <div className="header-image">
        <img src="https://wallpapers.com/images/featured/y2k-star-28rf6krz5u3ryvqd.jpg" alt="header"/>
      </div>

      {/* Menü ugyanúgy marad */}
      <Menu onCategoryChange={setSelectedCategory} />

      {/* 🔥 FILTER HOZZÁADVA */}
      <div className="container">
        <Filter onFilterChange={handleFilterChange} />
      </div>

      <div className="container mt-4">
        <TermekLista
          selectedCategory={selectedCategory}
          filters={filters}
        />
      </div>

    </CartProvider>
  );
}

export default App;
