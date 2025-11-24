import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import TermekLista from "./components/TermekLista";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <CartProvider>
      <div className="header-image">
    <img
      src="https://wallpapers.com/images/featured/y2k-star-28rf6krz5u3ryvqd.jpg"
      alt="header"
    />
    </div>
      <Menu onCategoryChange={setSelectedCategory} />
      <div className="container mt-4">
        <TermekLista selectedCategory={selectedCategory} />
    </div>
    </CartProvider>
  );
}

export default App;
