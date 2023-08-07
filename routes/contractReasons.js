var express = require("express");
var router = express.Router();

const ContractReason = require("../models/contractReasons");

router.get("/", (req, res) => {
  ContractReason.find().then((data) => {
    res.json({ allContractReasons: data });
  });
});

module.exports = router;
