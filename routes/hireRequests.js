var express = require("express");
var router = express.Router();

const User = require("../models/users");
const Department = require("../models/departments");
const Job = require("../models/jobs");
const InternalCompany = require("../models/internalCompanies");

const { checkBody } = require("../modules/checkBody");

// ********** GET ALL HIRE REQUESTS ********** !!! EN COURS !!!
router.get(
  ("/",
  (req, res) => {
    HireRequest.find()
      .populate("department")
      .populate("job")
      .populate("internalCompany")
      .populate("role")
      .then((allHireRequests) => {
        if (allHireRequests) {
          res.json({ result: true, allHireRequests: allHireRequests });
        } else {
          res.json({ result: false, error: "No hire request found" });
        }
      });
  })
);

module.exports = router;
