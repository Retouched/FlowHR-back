var express = require("express");
var router = express.Router();

const GoalReason = require("../models/goalReasons");

router.get("/", (req, res) => {
  GoalReason.find().then((data) => {
    res.json({ allGoalReasons: data });
  });
});

module.exports = router;
