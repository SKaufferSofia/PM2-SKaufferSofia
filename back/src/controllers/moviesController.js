const {
  getMovies,
  getMovieName,
  createMovie,
  addDetail,
  updateMovie,
  deleteMovieService,
} = require("../services/moviesServices");

const getAllMovie = async (req, res) => {
  const movies = await getMovies();
  res.status(200).json(movies);
};

const getMovie = async (req, res) => {
  const { movieName } = req.params;
  const movie = await getMovieName(movieName);
  res.status(200).json(movie);
};

const createMovies = async (req, res) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  await createMovie({ title, year, director, duration, genre, rate, poster });
  res.status(201).json({
    message: "Pelicula creada correctamente",
  });
};

const addDetails = async (req, res) => {
  const { movieId, infoId } = req.body;
  await addDetail({ movieId, infoId });
  res.status(201).json({
    message: "Información agregada correctamente",
  });
};

const updateMovieController = async (req, res) => {
  const { id } = req.params;
  const { title, year, director, duration, genre, rate, poster } = req.body;
  console.log(id);
  
  await updateMovie(id, { title, year, director, duration, genre, rate, poster });
  res.status(201).json({
    message: "Pelicula actualizada correctamente",
  });
}

const deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  await deleteMovieService(movieId);
  res.status(201).json({
    message: "Pelicula borrada correctamente",
  });
};

module.exports = {
  getAllMovie,
  getMovie,
  createMovies,
  addDetails,
  updateMovieController,
  deleteMovie,
};
