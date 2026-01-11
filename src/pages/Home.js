import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Não foi possível carregar produtos");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [search, category, products]);

  if (loading) return <p style={{ padding: 20 }}>A carregar produtos...</p>;
  if (error) return <p style={{ padding: 20 }}>{error}</p>;

  return (
    <div className="container">
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter setCategory={setCategory} />
      </div>

      <div className="grid scroll-animate">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
