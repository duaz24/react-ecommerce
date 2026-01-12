import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cartao");
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    morada: "",
    cidade: "",
    codPostal: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    mbwayPhone: ""
  });

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "100px 0" }}>
        <h2>O teu carrinho está vazio 🛒</h2>
        <button 
          className="checkout-btn" 
          onClick={() => navigate("/")}
          style={{ maxWidth: "200px", background: "#333", marginTop: "20px" }}
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
    setIsProcessing(true);

    // Simulação de processamento
    setTimeout(() => {
      setIsProcessing(false);
      alert(`🎉 Obrigado pela compra, ${formData.nome}!`);
      clearCart();
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "30px" }}>Finalizar Encomenda</h2>
      
      <form onSubmit={handleSubmit} className="checkout-wrapper">
        
        {/* ESQUERDA: FORMULÁRIOS */}
        <div className="checkout-form-container">
          
          {/* Dados de Envio */}
          <div className="form-section">
            <h3>📍 Dados de Envio</h3>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Nome Completo</label>
              <input type="text" name="nome" required className="form-input" onChange={handleChange} value={formData.nome} />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input type="email" name="email" required className="form-input" onChange={handleChange} value={formData.email} />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Morada</label>
              <input type="text" name="morada" required className="form-input" onChange={handleChange} value={formData.morada} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Código Postal</label>
                <input type="text" name="codPostal" required className="form-input" onChange={handleChange} value={formData.codPostal} />
              </div>
              <div className="form-group">
                <label>Cidade</label>
                <input type="text" name="cidade" required className="form-input" onChange={handleChange} value={formData.cidade} />
              </div>
            </div>
          </div>

          {/* Pagamento */}
          <div className="form-section">
            <h3>💳 Método de Pagamento</h3>
            
            <div className="payment-methods">
              <div 
                className={`payment-btn ${paymentMethod === "cartao" ? "active" : ""}`}
                onClick={() => setPaymentMethod("cartao")}
              >
                Cartão de Crédito
              </div>
              <div 
                className={`payment-btn ${paymentMethod === "mbway" ? "active" : ""}`}
                onClick={() => setPaymentMethod("mbway")}
              >
                MB WAY
              </div>
            </div>

            {paymentMethod === "cartao" && (
              <div className="fade-in">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Número do Cartão</label>
                  <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000" maxLength="19" className="form-input" onChange={handleChange} value={formData.cardNumber} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Validade</label>
                    <input type="text" name="cardExpiry" placeholder="MM/AA" maxLength="5" className="form-input" onChange={handleChange} value={formData.cardExpiry} />
                  </div>
                  <div className="form-group">
                    <label>CVC</label>
                    <input type="text" name="cardCvc" placeholder="123" maxLength="3" className="form-input" onChange={handleChange} value={formData.cardCvc} />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "mbway" && (
              <div className="fade-in">
                <div className="form-group">
                  <label>Número de Telemóvel</label>
                  <input type="tel" name="mbwayPhone" placeholder="912 345 678" className="form-input" onChange={handleChange} value={formData.mbwayPhone} />
                  <small style={{ color: "#666", marginTop: "5px" }}>Enviaremos um pedido de pagamento para a tua app.</small>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DIREITA: RESUMO */}
        <div className="checkout-summary-container">
          <h3 style={{ marginBottom: "20px" }}>Resumo</h3>
          
          <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "20px" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "0.9rem" }}>
                <span>{item.qty}x {item.title}</span>
                <strong>{(item.price * item.qty).toFixed(2)} €</strong>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", color: "#28a745" }}>
              <span>Envio</span>
              <span>Grátis</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: "bold" }}>
              <span>Total</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>
          </div>

          <button type="submit" className="checkout-btn" disabled={isProcessing}>
            {isProcessing ? "A Processar..." : `Pagar ${subtotal.toFixed(2)} €`}
          </button>
          
          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#888", marginTop: "15px" }}>
            🔒 Pagamento 100% Seguro e Encriptado
          </p>
        </div>

      </form>
    </div>
  );
}
