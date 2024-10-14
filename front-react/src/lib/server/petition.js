import axios from "axios";

export const AllMovies = async function (setMovies) {
  try {
    const response = await axios.get(
      "https://pm2-skauffersofia-production.up.railway.app/movies"
    );
    const moviesData = response.data;
    setMovies(moviesData);
    // setFilteredMovies(moviesData);
  } catch (error) {
    console.error("Error index:", error);
  }
};
