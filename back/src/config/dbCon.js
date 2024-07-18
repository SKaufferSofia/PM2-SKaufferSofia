const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://chofiikauffer:W3L1zcLMF6bain0d@pruebamovies.4qvdwlz.mongodb.net/DataBaseMovies?retryWrites=true&w=majority"
  );
};

module.exports = dbCon;
