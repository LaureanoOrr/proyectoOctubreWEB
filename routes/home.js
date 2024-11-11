const express = require("express");
const {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrl,
  editarUrlForm,
  redireccionamiento,
} = require("../controllers/homeController");
const { nanoid } = require("nanoid");
const validarUrl = require("../middleware/validarUrl");
const router = express.Router();

router.get("/", leerUrls);
router.post("/", validarUrl, agregarUrl);
router.get("/eliminar/:id", eliminarUrl);
router.post("/editar/:id", validarUrl, editarUrl);
router.get("/editar/:id", editarUrlForm);
router.get("/:shortURL", redireccionamiento);

module.exports = router;