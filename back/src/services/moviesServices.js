const MoviesModels = require("../models/MoviesModels");

async function getMovies() {
  const movies = await MoviesModels.find().populate("details");
  return movies;
}

async function createMovie(movie) {
  const newMovie = MoviesModels.create(movie);
  return newMovie;
}

async function addDetail({ movieId, infoId }) {
  const movie = await MoviesModels.findById(movieId);
  movie.details = infoId;
  await movie.save();
  return movie;
}

module.exports = {
  getMovies,
  createMovie,
  addDetail,
};
