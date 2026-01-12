import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Estado para controlar o loading e o método de pagamento
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cartao");
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    morada: "",
    // Campos específicos de pagamento
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    mbwayPhone: ""
  });

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "50px 0" }}>
        <h2>O teu carrinho está vazio 🛒</h2>
        <p>Adiciona alguns produtos fantásticos antes de finalizares.</p>
        <button 
          className="qty-btn" 
          onClick={() => navigate("/")}
          style={{ marginTop: "20px", background: "#333", color: "white", padding: "10px 20px" }}
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
    setIsProcessing(true); // Ativa o estado de loading

    // Simula uma chamada de API (atraso de 2 segundos)
    setTimeout(() => {
      setIsProcessing(false);
      alert(`🎉 Sucesso! Obrigado pela tua compra, ${formData.nome}.`);
      clearCart();
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "2rem", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        Finalizar Compra
      </h2>
      
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "flex-start" }}>
        
        {/* --- LADO ESQUERDO: FORMULÁRIO --- */}
        <div style={{ flex: 2, minWidth: "300px" }}>
          
          <form onSubmit={handleSubmit} id="checkout-form">
            
            {/* Secção 1: Dados Pessoais */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "1rem", color: "#555" }}>1. Dados de Envio</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome Completo"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="input-field"
                    style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                  />
                </div>
                <textarea
                  name="morada"
                  placeholder="Morada de Entrega Completa"
                  required
                  value={formData.morada}
                  onChange={handleChange}
                  style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "80px", resize: "vertical" }}
                />
              </div>
            </div>

            {/* Secção 2: Pagamento */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "1rem", color: "#555" }}>2. Pagamento</h3>
              
              {/* Seletor de Método */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cartao")}
                  style={{
                    flex: 1,
                    padding: "15px",
                    border: paymentMethod === "cartao" ? "2px solid #007bff" : "1px solid #ddd",
                    borderRadius: "8px",
                    background: paymentMethod === "cartao" ? "#e7f1ff" : "white",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  💳 Cartão de Crédito
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("mbway")}
                  style={{
                    flex: 1,
                    padding: "15px",
                    border: paymentMethod === "mbway" ? "2px solid #007bff" : "1px solid #ddd",
                    borderRadius: "8px",
                    background: paymentMethod === "mbway" ? "#e7f1ff" : "white",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  📱 MB WAY
                </button>
              </div>

              {/* Campos Dinâmicos: Cartão */}
              {paymentMethod === "cartao" && (
                <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px", animation: "fadeIn 0.5s" }}>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número do Cartão (0000 0000 0000 0000)"
                    required
                    maxLength="19"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/AA"
                      required
                      maxLength="5"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                    />
                    <input
                      type="text"
                      name="cardCvc"
                      placeholder="CVC"
                      required
                      maxLength="3"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                    />
                  </div>
                </div>
              )}

              {/* Campos Dinâmicos: MB WAY */}
              {paymentMethod === "mbway" && (
                <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px", animation: "fadeIn 0.5s" }}>
                  <p style={{marginBottom: "10px", fontSize: "0.9rem"}}>Enviaremos uma notificação para a tua app MB WAY.</p>
                  <input
                    type="tel"
                    name="mbwayPhone"
                    placeholder="Número de Telemóvel"
                    required
                    value={formData.mbwayPhone}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                  />
                </div>
              )}
            </div>

          </form>
        </div>

        {/* --- LADO DIREITO: RESUMO STICKY --- */}
        <div style={{ 
          flex: 1, 
          minWidth: "300px", 
          backgroundColor: "white", 
          padding: "25px", 
          borderRadius: "12px", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          position: "sticky", // Faz o elemento "colar"
          top: "100px", // Distância do topo quando colado
          height: "fit-content"
        }}>
          <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px", marginBottom: "15px" }}>Resumo do Pedido</h3>
          
          <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "15px" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem" }}>
                <span style={{color: "#555"}}>{item.qty}x {item.title}</span>
                <span style={{fontWeight: "500"}}>{(item.price * item.qty).toFixed(2)} €</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "2px solid #eee", paddingTop: "15px", marginTop: "10px" }}>
             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", color: "#666" }}>
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} €</span>
             </div>
             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "#666" }}>
                <span>Envio</span>
                <span>Grátis</span>
             </div>
             <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.4rem", fontWeight: "bold", color: "#333" }}>
                <span>Total</span>
                <span>{subtotal.toFixed(2)} €</span>
             </div>
          </div>

          <button 
            type="submit" 
            form="checkout-form" // Liga este botão ao form lá de cima
            disabled={isProcessing} // Bloqueia clique se estiver a carregar
            style={{ 
              width: "100%", 
              padding: "16px", 
              marginTop: "20px", 
              backgroundColor: isProcessing ? "#999" : "#28a745", 
              color: "white", 
              border: "none", 
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: isProcessing ? "not-allowed" : "pointer",
              transition: "background 0.3s"
            }}
          >
            {isProcessing ? "A processar..." : `Pagar ${subtotal.toFixed(2)} €`}
          </button>
          
          <p style={{textAlign: "center", fontSize: "0.8rem", color: "#888", marginTop: "10px"}}>
            🔒 Pagamento 100% Seguro
          </p>
        </div>

      </div>
    </div>
  );
}
