const express = require("express");
const mainRouter = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev")); // quiero que la solicitud pase por aca // es para verificar si esta enviando solicitudes
app.use(cors()); // middleware, bloquear solicitudes de otros servidores y frontents
app.use(express.json()); // pasar de json a javascript

app.use("/", mainRouter);

module.exports = app;
