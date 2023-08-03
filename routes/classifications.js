var express = require("express");
var router = express.Router();

const Classification = require("../models/classifications");

router.get("/", (req, res) => {
  Classification.find().then((data) => {
    res.json({ allClassifications: data });
  });
});

module.exports = router;
