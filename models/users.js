const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  token: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: "departments" },
  connected: Boolean,
  job: { type: mongoose.Schema.Types.ObjectId, ref: "jobs" },
  role: String,
  password: String,
  token: String,
  internalCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "internalCompanies",
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
