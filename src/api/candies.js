import axios from "axios";

const API_URL = "http://localhost:3001/candies";

export const getCandies = () => axios.get(API_URL);
export const addCandy = (candy) => axios.post(API_URL, candy);
export const updateCandy = (id, updatedFields) =>
  axios.patch(`${API_URL}/${id}`, updatedFields);
export const deleteCandy = (id) => axios.delete(`${API_URL}/${id}`);
