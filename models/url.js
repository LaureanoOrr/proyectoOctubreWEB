const mongoose = require("mongoose"); //Models.
const { Schema } = mongoose;
const urlSchema = new Schema({
  origin: {
    type: String,
    required: true,
    unique: true,
  },
  shortURL: {
    type: String,
    required: true,
    unique: true,
  },
});
const Url = mongoose.model("url", urlSchema);
module.exports = url;
