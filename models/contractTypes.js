const mongoose = require("mongoose");

const contractTypeSchema = mongoose.Schema({
  contractTypeName: String,
});

const ContractType = mongoose.model("contractTypes", contractTypeSchema);

module.exports = ContractType;
