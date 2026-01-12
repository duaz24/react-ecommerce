import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Carregar carrinho guardado
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Guardar carrinho sempre que muda
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const exists = cart.find((p) => p.id === product.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((p) => p.id !== id));
  }

  function updateQty(id, qty) {
    if (qty <= 0) return removeFromCart(id);

    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, qty } : p
      )
    );
  }

  // --- NOVA FUNÇÃO ---
  function clearCart() {
    setCart([]);
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
