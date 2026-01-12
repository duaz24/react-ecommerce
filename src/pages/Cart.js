import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Carrinho</h2>
        <p>O carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Carrinho</h2>

      {cart.map((product) => (
        <div className="cart-item scroll-animate" key={product.id}>
          <div className="cart-left">
            <img src={product.image} alt={product.title} className="cart-img" />
            <div>
              <p className="cart-item-title">{product.title}</p>
              <p className="cart-price">{product.price.toFixed(2)} €</p>
            </div>
          </div>

          <div className="cart-controls">
            <button
              className="qty-btn"
              onClick={() => updateQty(product.id, product.qty - 1)}
            >
              -
            </button>
            <span className="qty-number">{product.qty}</span>
            <button
              className="qty-btn"
              onClick={() => updateQty(product.id, product.qty + 1)}
            >
              +
            </button>
          </div>

          <div className="cart-right">
            <p className="cart-subtotal">
              {(product.price * product.qty).toFixed(2)} €
            </p>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(product.id)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}

      <h3 className="cart-total">Total: {subtotal.toFixed(2)} €</h3>

      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <Link to="/checkout">
          <button style={{ 
            padding: "15px 30px", 
            fontSize: "1.1rem", 
            background: "#28a745", 
            color: "white", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer" 
          }}>
            Finalizar Compra ➔
          </button>
        </Link>
      </div>
    </div>
  );
}
