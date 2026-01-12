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
      <div className="navbar-container">

        {/* NOME DA LOJA */}
        <div className="navbar-logo">
          <Link to="/">LuxItens</Link>
        </div>

        {/* LINKS */}
        <div className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/cart">
            Carrinho
            <span className="cart-badge">({cart.length})</span>
          </Link>

          <button
            className="dark-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Alternar modo escuro"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  );
}
