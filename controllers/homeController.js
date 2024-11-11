const Url = require("../models/url");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls: urls });
  } catch (error) {
    console.log(error);
    res.send("Error.");
  }
};

const agregarUrl = async (req, res) => {
  try {
    const { origin } = req.body;
    const url = new Url({ origin: origin, shortURL: nanoid(8) });
    await url.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Error.");
  }
};

const eliminarUrl = async (req, res) => {
  try {
    const { id } = req.params;
    await Url.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("algo falló");
  }
};

const editarUrlForm = async (req, res) => {
  const { id } = req.params;
  try {
    const urlDB = await Url.findById(id).lean();
    res.render("home", { urlDB });
  } catch (error) {
    console.log(error);
    res.send("algo falló");
  }
};
module.exports = {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrlForm,
};
