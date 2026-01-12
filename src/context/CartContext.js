import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast"; // <--- Importar o Toast

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Carregar carrinho guardado (Com Segurança try/catch)
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (error) {
        console.error("Erro ao ler carrinho, a limpar...", error);
        localStorage.removeItem("cart");
      }
    }
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
      // Notificação de atualização
      toast.success("Quantidade atualizada!", {
        icon: '🔄',
        duration: 2000
      });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      // Notificação de novo produto
      toast.success(`${product.title} adicionado!`, {
        icon: '🛒',
        duration: 3000
      });
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((p) => p.id !== id));
    toast.error("Produto removido.", { icon: '🗑️' });
  }

  function updateQty(id, qty) {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, qty } : p
      )
    );
  }

  function clearCart() {
    setCart([]);
    // Opcional: toast("Carrinho limpo", { icon: '🧹' });
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
