import { useState, useEffect } from "react";

export default function CandyForm({ onAddCandy, editingCandy }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");
  const [aisle, setAisle] = useState("");

  useEffect(() => {
    if (editingCandy) {
      setName(editingCandy.name);
      setDescription(editingCandy.description);
      setOrigin(editingCandy.origin);
      setPrice(editingCandy.price);
      setAisle(editingCandy.aisle);
    }
  }, [editingCandy]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !origin || !price || !aisle) {
      alert("Please fill in all fields!");
      return;
    }

    const newCandy = {
      name,
      description,
      origin,
      price: parseFloat(price),
      aisle,
    };

    onAddCandy(newCandy);

    setName("");
    setDescription("");
    setOrigin("");
    setPrice("");
    setAisle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "400px",
      }}
    >
      <input placeholder="Candy Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Aisle" value={aisle} onChange={(e) => setAisle(e.target.value)} />
      <button
  type="submit"
  style={{
    backgroundColor: "#ff6f91", // candy pink
    color: "#fff",
    borderRadius: "10px",
    padding: "0.5rem 1rem",
    fontWeight: "600",
  }}
>
  {editingCandy ? "Update Candy" : "Add Candy"}
</button>
    </form>
  );
}
