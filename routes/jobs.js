var express = require("express");
var router = express.Router();

const Job = require("../models/jobs");

router.get("/", (req, res) => {
  Job.find().then((data) => {
    console.log(data);
    res.json({ allJobs: data });
  });
});

module.exports = router;
