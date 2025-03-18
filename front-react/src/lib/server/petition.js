import axios from "axios";
import { API_URL } from "./env";

export const AllMovies = async function (setMovies) {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    const moviesData = response.data;
    setMovies(moviesData);
    // setFilteredMovies(moviesData);
  } catch (error) {
    console.error("Error index:", error);
  }
};
