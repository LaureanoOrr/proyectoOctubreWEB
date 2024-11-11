const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI, {})
  .then(() => console.log("Base de datos conectada."))
  .catch((e) => console.log("Error de conexión: " + e + "."));
