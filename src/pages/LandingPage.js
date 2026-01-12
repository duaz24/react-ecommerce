import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page fade-in">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Bem-vindo à LuxItens</h1>
            <p>Descobre a elegância em cada detalhe. A melhor seleção de produtos premium à tua espera.</p>
            <Link to="/loja">
              <button className="hero-btn">Ver Coleção ➔</button>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTAQUES (Opcional - Features) */}
      <section className="features container">
        <div className="feature-item">
          <span style={{fontSize: "2.5rem"}}>🚀</span>
          <h3>Envio Rápido</h3>
          <p>Recebe a tua encomenda em 24/48h.</p>
        </div>
        <div className="feature-item">
          <span style={{fontSize: "2.5rem"}}>🛡️</span>
          <h3>Compra Segura</h3>
          <p>Pagamentos encriptados e 100% seguros.</p>
        </div>
        <div className="feature-item">
          <span style={{fontSize: "2.5rem"}}>💎</span>
          <h3>Qualidade Premium</h3>
          <p>Produtos selecionados das melhores marcas.</p>
        </div>
      </section>

    </div>
  );
}
