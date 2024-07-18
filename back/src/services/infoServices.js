const InfoModels = require("../models/InfoModels");

async function getAllInfo() {
  const info = await InfoModels.find();
  return info;
}

async function createInfo(info) {
  const newInfo = await InfoModels.create(info);
  return newInfo;
}

module.exports = { getAllInfo, createInfo };
