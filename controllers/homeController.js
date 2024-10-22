const Url = require("../models/url");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls: urls });
  } catch (error) {
    console.log(error);
    res.send("algo salio mal");
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
    res.send("algo fallo");
  }
};

module.exports = {
  leerUrls,
  agregarUrl,
};
