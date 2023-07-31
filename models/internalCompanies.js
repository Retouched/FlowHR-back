const mongoose = require("mongoose");

const internalCompanySchema = mongoose.Schema({
  internalCompanyName: String,
});

const InternalCompany = mongoose.model(
  "internalCompanies",
  internalCompanySchema
);

module.exports = InternalCompany;
