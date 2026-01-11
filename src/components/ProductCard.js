import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} €</p>
      <Link to={`/product/${product.id}`}>Ver detalhes</Link>
    </div>
  );
}