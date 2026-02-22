import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { CandyContext } from "../context/CandyContext.jsx";

export default function ShopPage() {
  const { candies } = useContext(CandyContext);
  const [search, setSearch] = useState("");

  const filteredCandies = candies.filter((candy) =>
    candy.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Shop Our Candies</h2>
      <input
        type="text"
        placeholder="Search candies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredCandies.length > 0 ? (
          filteredCandies.map((candy) => <ProductCard key={candy.id} candy={candy} />)
        ) : (
          <p>No candies found.</p>
        )}
      </div>
    </div>
  );
}