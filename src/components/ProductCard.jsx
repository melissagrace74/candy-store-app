export default function ProductCard({ candy, onEdit, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        backgroundColor: "#fff",
      }}
    >
      <h4 style={{ margin: 0 }}>{candy.name}</h4>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>{candy.description}</p>
      <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>
        Origin: {candy.origin} | Aisle: {candy.aisle}
      </p>
      <p style={{ margin: "0.5rem 0", fontWeight: 600 }}>${candy.price.toFixed(2)}</p>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => onEdit && onEdit(candy)}
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "rgb(255, 193, 7)",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete && onDelete(candy.id)}
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "rgb(220, 53, 69)",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}