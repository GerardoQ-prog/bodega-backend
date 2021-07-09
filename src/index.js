const express = require("express");
const bodyParser = require("body-parser");
const { conexion } = require("./database/index");
const { routes } = require("./routes");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser.json());
app.use("/bodega_core", routes);

app.listen(8081, async () => {
  try {
    console.log(`Server Start 8081`);
    await conexion.sync({ force: false, alter: false });
    console.log("== BD creada con Exito ==");
  } catch (error) {
    console.log("== ERROR al crear la BD ==");
    console.log(error);
  }
});
