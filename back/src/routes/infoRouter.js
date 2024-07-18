const { Router } = require("express");
const { getInfo, createAllInfo } = require("../controllers/infoController");

const infoRouter = Router();

infoRouter.get("/", getInfo);
infoRouter.post("/", createAllInfo);

module.exports = infoRouter;
