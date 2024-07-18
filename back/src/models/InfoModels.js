const mongoose = require("mongoose");

const infoModels = new mongoose.Schema({
  oscar: {
    type: Number,
  },
  description: {
    type: String,
  },
  streaming: {
    type: String,
  },
  posterInfo: {
    type: String,
  },
  saga: {
    type: String,
  },
});

const InfoModels = mongoose.model("InfoModels", infoModels);

module.exports = InfoModels;
