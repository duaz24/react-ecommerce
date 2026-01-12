import React from 'react';
import { Link } from 'react-router-dom';

export default function Returns() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>Trocas e Devoluções</h1>
      
      <section style={{ marginBottom: "2rem" }}>
        <p>
          Na LuxItens, queremos que fiques totalmente satisfeito com a tua compra. Se não estiveres, tens <strong>30 dias</strong> após a receção para efetuar uma troca ou devolução.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>✅ Condições para Devolução</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li>O artigo deve estar novo, sem uso e na embalagem original.</li>
          <li>As etiquetas originais devem estar intactas.</li>
          <li>É necessário apresentar o comprovativo de compra.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>🔄 Como efetuar uma troca?</h3>
        <p>
          Envia-nos um e-mail indicando o número da encomenda e o artigo que desejas trocar. Enviaremos as instruções para a recolha do artigo antigo e o envio do novo. 
          A primeira troca é gratuita!
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>💸 Reembolsos</h3>
        <p>
          Após recebermos e verificarmos o estado do artigo devolvido, processaremos o reembolso no prazo de 5 dias úteis para o mesmo método de pagamento utilizado na compra.
        </p>
      </section>

      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <p>Tens dúvidas? <Link to="/contactos" style={{ color: "#007bff" }}>Fala connosco</Link>.</p>
      </div>
    </div>
  );
}
