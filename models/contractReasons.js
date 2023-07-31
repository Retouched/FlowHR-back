const mongoose = require("mongoose");

const contractReasonSchema = mongoose.Schema({
  contractReasonName: String,
});

const ContractReason = mongoose.model("contractReasons", contractReasonSchema);

module.exports = ContractReason;
