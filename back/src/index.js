const app = require("./server");
const dbCon = require("./config/dbCon");

const dotenv = require("dotenv");
dotenv.config();

dbCon().then((res) => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en el puerto " + process.env.PORT);
  }); // esto significa que esta adentro de nuestra pc
});
