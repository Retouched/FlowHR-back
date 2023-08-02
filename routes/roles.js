var express = require("express");
var router = express.Router();

const Role = require("../models/roles");

router.get("/", (req, res) => {
  Role.find().then((data) => {
    res.json({ allRoles: data });
  });
});

module.exports = router;
