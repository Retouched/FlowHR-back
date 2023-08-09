const mongoose = require("mongoose");

const hireRequestSchema = mongoose.Schema({
  numRequest: Number,
  goalRequest: { type: mongoose.Schema.Types.ObjectId, ref: "goalRequests" },
  nameReplacedPerson: String,
  lastnameReplacedPerson: String,
  job: { type: mongoose.Schema.Types.ObjectId, ref: "jobs" },
  newJob: String,
  classification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classifications",
  },
  firstnameManager: String,
  lastnameManager: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: "departments" },
  contractType: { type: mongoose.Schema.Types.ObjectId, ref: "contractTypes" },
  dateHireRequest: Date,
  dpRequestStatus: Number,
  drhRequestStatus: Number,
  dafRequestStatus: Number,
  pdgRequestStatus: Number,
  globalRequestStatus: Number,
  dpComment: String,
  drhComment: String,
  dafComment: String,
  pdgComment: String,
  pourcentageWorkTime: Number,
  contractReason: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contractReasons",
  },
  startDateContract: Date,
  endDateContract: Date,
  durationContractDay: Number,
  durationContractMonth: Number,
  minimumWage: Number,
  maximumWage: Number,
  monthlyVariableWage: Boolean,
  monthlyVariableWageAmount: Number,
  annualVariableWage: Boolean,
  annualVariableWageAmount: Number,
  moveAssist: Boolean,
  annexDemand: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const HireRequest = mongoose.model("hireRequests", hireRequestSchema);

module.exports = HireRequest;
