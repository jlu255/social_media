const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 4,
    max: 150,
  },
  body: {
    type: String,
    required: true,
    min: 4,
    max: 2000,
  },
});
module.exports = mongoose.model("Post", postSchema);
