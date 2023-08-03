var express = require("express");
var router = express.Router();

const GoalRequest = require("../models/goalRequests");

router.get("/", (req, res) => {
  GoalRequest.find().then((data) => {
    res.json({ allGoalRequests: data });
  });
});

module.exports = router;
