import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  return (
    <nav>
      <Link to="/">Loja</Link>
      <Link to="/cart">Carrinho ({cart.length})</Link>

      <button className="dark-toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
