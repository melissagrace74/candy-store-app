import { useState, useContext } from "react";
import CandyForm from "../components/CandyForm.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { CandyContext } from "../context/CandyContext.jsx";
import { addCandy as apiAddCandy, updateCandy, deleteCandy as apiDeleteCandy } from "../api/candies.js";

export default function AdminPortalPage({ deleteCandyOverride }) {
  const { candies, setCandies } = useContext(CandyContext);
  const [editingCandy, setEditingCandy] = useState(null);

  const handleAddCandy = (newCandy) => {
    if (editingCandy) {
      updateCandy(editingCandy.id, newCandy)
        .then((res) => {
          setCandies(candies.map((c) => (c.id === editingCandy.id ? res.data : c)));
          setEditingCandy(null);
        })
        .catch(console.error);
    } else {
      apiAddCandy(newCandy)
        .then((res) => setCandies([...candies, res.data]))
        .catch(console.error);
    }
  };

  const handleEdit = (candy) => setEditingCandy(candy);
  const handleDelete = deleteCandyOverride
    ? deleteCandyOverride
    : (id) => {
        apiDeleteCandy(id)
          .then(() => setCandies(candies.filter((c) => c.id !== id)))
          .catch(console.error);
      };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Admin Portal</h2>
      <p>{editingCandy ? "Edit candy:" : "Add new candies:"}</p>
      <CandyForm onAddCandy={handleAddCandy} editingCandy={editingCandy} />

      <h3 style={{ marginTop: "2rem" }}>Current Candies:</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {candies.length > 0 ? (
          candies.map((candy) => (
            <ProductCard key={candy.id} candy={candy} onEdit={handleEdit} onDelete={handleDelete} />
          ))
        ) : (
          <p>No candies yet.</p>
        )}
      </div>
    </div>
  );
}