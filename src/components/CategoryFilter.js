export default function CategoryFilter({ setCategory }) {
  return (
    <select onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px" }}>
      <option value="all">Todas as categorias</option>
      <option value="men's clothing">Roupas de homem</option>
      <option value="women's clothing">Roupas de mulher</option>
      <option value="jewelery">Joalharia</option>
      <option value="electronics">Eletrónica</option>
    </select>
  );
}
