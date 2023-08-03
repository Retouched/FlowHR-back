var express = require("express");
var router = express.Router();

const User = require("../models/users");
const Department = require("../models/departments");
const Job = require("../models/jobs");
const InternalCompany = require("../models/internalCompanies");
const HireRequest = require("../models/hireRequests");
const Classification = require("../models/classifications");
const ContractReason = require("../models/contractReasons");
const ContractType = require("../models/contractTypes");
const GoalRequest = require("../models/goalRequests");

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

// ********** ADD HIRE REQUEST ********** !!!EN COURS!!!
router.post("/", (req, res) => {
  // AJOUTER LE CHECKBODY

  // DEFINITION DE L'OBJET RECU PAR LE FRONT
  const {
    numRequest,
    goalRequest,
    nameReplacedPerson,
    lastnameReplacedPerson,
    job,
    nexJob,
    classification,
    firstnameManager,
    lastnameManager,
    department,
    contractTypes,
    dateHireRequest,
    dpRequestStatus,
    drhRequestStatus,
    dafRequestStatus,
    pdgRequestStatus,
    globalRequestStatus,
    dpComment,
    drhComment,
    dafComment,
    pdgComment,
    pourcentageWorkTime,
    contractReasons,
    startDateContract,
    endDateContract,
    durationContractDay,
    durationContractMonth,
    minimumWage,
    maximumWage,
    monthlyVariableWage,
    monthlyVariableWageAmount,
    annualVariableWage,
    annualVariableWageAmount,
    moveAssist,
    user_id,
  } = req.body;
  const newHireRequest = new HireRequest({
    numRequest,
    goalRequest,
    nameReplacedPerson,
    lastnameReplacedPerson,
    job,
    nexJob,
    classification,
    firstnameManager,
    lastnameManager,
    department,
    contractTypes,
    dateHireRequest,
    dpRequestStatus,
    drhRequestStatus,
    dafRequestStatus,
    pdgRequestStatus,
    globalRequestStatus,
    dpComment,
    drhComment,
    dafComment,
    pdgComment,
    pourcentageWorkTime,
    contractReasons,
    startDateContract,
    endDateContract,
    durationContractDay,
    durationContractMonth,
    minimumWage,
    maximumWage,
    monthlyVariableWage,
    monthlyVariableWageAmount,
    annualVariableWage,
    annualVariableWageAmount,
    moveAssist,
    user_id,
  });

  // SAUVEGARDE DE LA DEMANDE
  newHireRequest.save().then((data) => {
    if (data) {
      res.json({ result: true, data: data });
    }
  });
});

module.exports = router;
