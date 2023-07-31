const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  departmentName: String,
});

const Department = mongoose.model("departments", departmentSchema);

module.exports = Department;
