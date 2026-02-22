import { useState, useContext, useEffect } from "react";
import { CandyContext } from "../context/CandyContext.jsx";

export default function CandyFormPage({ onAddCandy, editingCandy }) {
  const { addCandy } = useContext(CandyContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
    aisle: "",
  });

  useEffect(() => {
    if (editingCandy) {
      setFormData({
        name: editingCandy.name,
        description: editingCandy.description,
        origin: editingCandy.origin,
        price: editingCandy.price,
        aisle: editingCandy.aisle,
      });
    } else {
      setFormData({ name: "", description: "", origin: "", price: "", aisle: "" });
    }
  }, [editingCandy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddCandy) onAddCandy(formData);
    else addCandy(formData);
    setFormData({ name: "", description: "", origin: "", price: "", aisle: "" });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Candy Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        placeholder="Origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
      />
      <input
        placeholder="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        placeholder="Aisle"
        name="aisle"
        value={formData.aisle}
        onChange={handleChange}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "rgb(255, 111, 145)",
          color: "#fff",
          borderRadius: "10px",
          padding: "0.5rem 1rem",
          fontWeight: 600,
        }}
      >
        Add Candy
      </button>
    </form>
  );
}