const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  jobName: String,
});

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;
