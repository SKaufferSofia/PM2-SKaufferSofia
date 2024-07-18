const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
  },
  director: {
    type: String,
    require: true,
  },
  duration: {
    type: String,
  },
  genre: {
    type: Array,
  },
  rate: {
    type: Number,
  },
  poster: {
    type: String,
    require: true,
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InfoModels",
  },
});

const MoviesModel = mongoose.model("Movies", movieSchema);

module.exports = MoviesModel;
