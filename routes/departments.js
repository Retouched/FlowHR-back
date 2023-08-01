var express = require("express");
var router = express.Router();

const Department = require("../models/departments");

router.get("/", (req, res) => {
  Department.find().then((data) => {
    res.json({ allDepartments: data });
  });
});

module.exports = router;
