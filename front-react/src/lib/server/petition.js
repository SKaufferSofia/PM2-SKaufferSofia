import axios from "axios";
import { API_URL } from "./env";

export const AllMovies = async function () {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    const moviesData = response.data;
    return moviesData;
  } catch (error) {
    console.error("Error index:", error);
  }
};
