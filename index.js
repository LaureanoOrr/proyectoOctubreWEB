const express = require("express");
const { create } = require("express-handlebars");
require("dotenv").config();
// Conexión.
require("./database/conexion");
const app = express();
const hbs = create({
  extname: ".hbs",
  partialsDir: ["views/components"],
});
// Motor de planillas.
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));
// Leer datos del cuerpo.
app.use(express.urlencoded({ extended: true }));
// - Configuración de rutas.
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("servidor andando " + PORT));
