export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar produtos..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "8px", width: "250px", margin: "20px" }}
    />
  );
}
