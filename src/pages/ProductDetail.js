import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch(() => setError("Erro ao carregar produto"));
  }, [id]);

  if (error) return <p style={{ padding: 20 }}>{error}</p>;
  if (!product) return <p style={{ padding: 20 }}>A carregar...</p>;

  return (
    <div className="product-detail scroll-animate">
      <div className="detail-left">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-right">
        <h2>{product.title}</h2>
        <p className="detail-price">{product.price.toFixed(2)} €</p>
        <p className="detail-desc">{product.description}</p>

        <button className="add-btn" onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
