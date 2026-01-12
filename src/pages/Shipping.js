import React from 'react';

export default function Shipping() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>Envios e Entregas</h1>
      
      <section style={{ marginBottom: "2rem" }}>
        <h3>🚚 Processamento da Encomenda</h3>
        <p>
          Após a confirmação do pagamento, a tua encomenda é processada e despachada no prazo de <strong>1 a 2 dias úteis</strong>. 
          Receberás um e-mail com o código de rastreio assim que a encomenda sair do nosso armazém.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>📦 Prazos de Entrega</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Portugal Continental:</strong> 2 a 3 dias úteis.</li>
          <li><strong>Açores e Madeira:</strong> 3 a 5 dias úteis.</li>
          <li><strong>Resto da Europa:</strong> 5 a 7 dias úteis.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>💰 Custos de Envio</h3>
        <p>Oferecemos <strong>portes grátis</strong> para todas as encomendas superiores a 50€.</p>
        <p>Para encomendas de valor inferior:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Envio Standard: 3,99€</li>
          <li>Envio Expresso: 6,99€</li>
        </ul>
      </section>

      <section>
        <h3>⚠️ Problemas com a entrega?</h3>
        <p>
          Se a tua encomenda estiver atrasada ou chegar danificada, por favor contacta-nos imediatamente através da página de contactos para resolvermos a situação.
        </p>
      </section>
    </div>
  );
}
