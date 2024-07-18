const {
  getMovies,
  createMovie,
  addDetail,
} = require("../services/moviesServices");

const getAllMovie = async (req, res) => {
  const movies = await getMovies();
  res.status(200).json(movies);
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

module.exports = {
  getAllMovie,
  createMovies,
  addDetails,
};
