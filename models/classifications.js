const mongoose = require("mongoose");

const classificationSchema = mongoose.Schema({
  classificationName: String,
});

const Classification = mongoose.model("classifications", classificationSchema);

module.exports = Classification;
