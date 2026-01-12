import React from 'react';

export default function Contact() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>Fale Connosco</h1>
      <p style={{ marginBottom: "3rem", fontSize: "1.1rem", color: "#666" }}>
        Tens alguma dúvida sobre um produto ou sobre a tua encomenda? Estamos aqui para ajudar!
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
        
        {/* Email */}
        <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "10px", width: "250px" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>✉️</div>
          <h3>Email</h3>
          <p style={{ marginTop: "10px" }}>
            <a href="mailto:suporte@luxitens.com" style={{ color: "#333", textDecoration: "none", fontWeight: "bold" }}>
              suporte@luxitens.com
            </a>
          </p>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>Respondemos em 24h</p>
        </div>

        {/* Telefone (Opcional) */}
        <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "10px", width: "250px" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>📞</div>
          <h3>Telefone</h3>
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>+351 210 000 000</p>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>Seg - Sex: 9h às 18h</p>
        </div>

        {/* Redes Sociais */}
        <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "10px", width: "250px" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>💬</div>
          <h3>Redes Sociais</h3>
          <p style={{ marginTop: "10px" }}>
             Segues-nos no Instagram e Facebook para novidades diárias.
          </p>
          <p style={{ fontWeight: "bold", marginTop: "5px" }}>@LuxItens</p>
        </div>
        
      </div>
    </div>
  );
}
