const { Router } = require("express");
const {
  getAllMovie,
  getMovie,
  createMovies,
  addDetails,
  updateMovieController,
  deleteMovie,
} = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", getAllMovie);

moviesRouter.get("/:movieName", getMovie);

moviesRouter.post("/", validateMovie, createMovies);

moviesRouter.put("/addDetails", addDetails);

moviesRouter.put("/:id", updateMovieController);

moviesRouter.delete("/:id", deleteMovie);

module.exports = moviesRouter;
