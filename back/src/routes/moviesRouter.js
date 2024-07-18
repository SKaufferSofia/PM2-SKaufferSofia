const { Router } = require("express");
const {
  getAllMovie,
  createMovies,
  addDetails,
} = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", getAllMovie);

moviesRouter.post("/", validateMovie, createMovies);

moviesRouter.put("/addDetails", addDetails);

module.exports = moviesRouter;
