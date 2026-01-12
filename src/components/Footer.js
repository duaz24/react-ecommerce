import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Coluna 1: Marca */}
        <div className="footer-section">
          <h4>LuxItens</h4>
          <p>A tua loja de eleição para produtos incríveis. Qualidade e estilo num só lugar.</p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/">Produtos</Link></li>
            <li><Link to="/cart">Carrinho</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Apoio ao Cliente */}
        <div className="footer-section">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Envios e Entregas</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Contacta-nos</a></li>
          </ul>
        </div>

        {/* Coluna 4: Pagamento Seguro */}
        <div className="footer-section">
          <h4>Pagamento Seguro</h4>
          <p>Aceitamos:</p>
          <div style={{ fontSize: "1.5rem", marginTop: "10px" }}>
            💳 📱 🏦
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxItens. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
