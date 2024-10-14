import { useEffect, useState } from "react";
import { AllMovies } from "../lib/server/petition";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AllMovies(setMovies);
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(searchTerm)
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  return { movies, setMovies, filteredMovies, setSearchTerm };
};

export default useMovies;
