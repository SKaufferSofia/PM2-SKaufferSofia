const MoviesModels = require("../models/MoviesModels");

async function getMovies() {
  const movies = await MoviesModels.find().populate("details");
  return movies;
}

async function getMovieName(movieName) {
  const movie = await MoviesModels.findOne({ title: movieName }).populate("details");
  return movie;
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

async function updateMovie(movieId, movie) {
  const updatedMovie = await MoviesModels.findByIdAndUpdate(movieId, movie);
  return updatedMovie;
}

async function deleteMovieService(movieId) {
  const movie = await MoviesModels.findByIdAndDelete(movieId);
  return movie;
}

module.exports = {
  getMovies,
  getMovieName,
  createMovie,
  addDetail,
  updateMovie,
  deleteMovieService,
};
