const { URL } = require("url");
const validarUrl = (req, res, next) => {
  try {
    const { origin } = req.body;
    const urlFrontend = new URL(origin);
    if (urlFrontend.origin !== "null") {
      return next();
    } else {
      throw new Error("No válida.");
    }
  } catch (error) {
    return res.send("La url no es válida.");
  }
};

module.exports = validarUrl;