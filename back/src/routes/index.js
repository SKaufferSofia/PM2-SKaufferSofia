const { Router } = require("express");
const moviesRouter = require("./moviesRouter");
const infoRouter = require("./infoRouter");

const mainRouter = Router();

mainRouter.use("/movies", moviesRouter);
mainRouter.use("/info", infoRouter);

module.exports = mainRouter;
