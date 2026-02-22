import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/candies";

export default function useCandies() {
  const [candies, setCandies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch candies on mount
  useEffect(() => {
    fetchCandies();
  }, []);

  async function fetchCandies() {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setCandies(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function addCandy(newCandy) {
    try {
      const res = await axios.post(API_URL, newCandy);
      setCandies((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err);
    }
  }

  async function updateCandy(id, updatedData) {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, updatedData);
      setCandies((prev) =>
        prev.map((candy) => (candy.id === id ? res.data : candy))
      );
    } catch (err) {
      setError(err);
    }
  }

  async function deleteCandy(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCandies((prev) => prev.filter((candy) => candy.id !== id));
    } catch (err) {
      setError(err);
    }
  }

  return {
    candies,
    loading,
    error,
    fetchCandies,
    addCandy,
    updateCandy,
    deleteCandy,
  };
}