var express = require("express");
var router = express.Router();

const ContractType = require("../models/contractTypes");

router.get("/", (req, res) => {
  ContractType.find().then((data) => {
    res.json({ allContractTypes: data });
  });
});

module.exports = router;
