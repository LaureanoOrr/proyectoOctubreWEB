const express = require("express");
const { leerUrls, agregarUrl } = require("../controllers/homeController");
const { nanoid } = require("nanoid");
const router = express.Router();

router.get("/", leerUrls);
router.post("/", agregarUrl);
module.exports = router;
