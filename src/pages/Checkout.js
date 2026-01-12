import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    morada: "",
    pagamento: "cartao"
  });

  // Se o carrinho estiver vazio, redireciona ou mostra mensagem
  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Checkout</h2>
        <p>O teu carrinho está vazio.</p>
        <button 
          className="qty-btn" 
          style={{ marginTop: "1rem", backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px" }}
          onClick={() => navigate("/")}
        >
          Voltar à Loja
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de processamento de pagamento
    alert(`Compra confirmada com sucesso!\nObrigado, ${formData.nome}.`);
    
    clearCart(); // Limpa o carrinho
    navigate("/"); // Redireciona para a Home
  };

  return (
    <div className="container">
      <h2>Finalizar Compra</h2>
      
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
        
        {/* Lado Esquerdo: Formulário */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3>Dados de Envio e Pagamento</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              required
              value={formData.nome}
              onChange={handleChange}
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
            />
            
            <textarea
              name="morada"
              placeholder="Morada de Entrega"
              required
              value={formData.morada}
              onChange={handleChange}
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ddd", minHeight: "80px" }}
            />
            
            <label style={{ fontWeight: "bold", marginTop: "10px" }}>Método de Pagamento:</label>
            <select 
              name="pagamento" 
              value={formData.pagamento} 
              onChange={handleChange}
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
            >
              <option value="cartao">Cartão de Crédito</option>
              <option value="mbway">MB WAY</option>
              <option value="multibanco">Multibanco</option>
              <option value="paypal">PayPal</option>
            </select>

            <button 
              type="submit" 
              className="qty-btn" 
              style={{ 
                width: "100%", 
                padding: "15px", 
                marginTop: "20px", 
                backgroundColor: "#28a745", 
                color: "white", 
                border: "none", 
                fontSize: "1.1rem",
                cursor: "pointer"
              }}
            >
              Pagar {subtotal.toFixed(2)} €
            </button>
          </form>
        </div>

        {/* Lado Direito: Resumo */}
        <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", height: "fit-content" }}>
          <h3>Resumo do Pedido</h3>
          <div style={{ marginTop: "1rem" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                <div>
                  <strong>{item.qty}x</strong> {item.title}
                </div>
                <div>{(item.price * item.qty).toFixed(2)} €</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "20px", borderTop: "2px solid #ddd", paddingTop: "10px", textAlign: "right", fontSize: "1.2rem", fontWeight: "bold" }}>
            Total: {subtotal.toFixed(2)} €
          </div>
        </div>

      </div>
    </div>
  );
}
