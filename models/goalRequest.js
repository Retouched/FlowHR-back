const mongoose = require("mongoose");

const goalRequestSchema = mongoose.Schema({
  goalRequestName: String,
});

const GoalRequest = mongoose.model("goalRequests", goalRequestSchema);

module.exports = GoalRequest;
