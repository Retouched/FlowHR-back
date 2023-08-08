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
router.get("/", (req, res) => {
  HireRequest.find()
    .populate("goalRequest")
    .populate("job")
    .populate("classification")
    .populate("department")
    .populate("contractType")
    .populate("contractReason")
    .populate("user")
    .then((allHireRequests) => {
      if (allHireRequests) {
        res.json({ result: true, allHireRequests: allHireRequests });
      } else {
        res.json({ result: false, error: "No hire request found" });
      }
    });
});

// ********** ADD HIRE REQUEST ********** !!!EN COURS!!!
router.post("/", async (req, res) => {
  // AJOUTER LE CHECKBODY

  //INCREMENTATION DU numRequest
  const lastHireRequest = await HireRequest.findOne(
    {},
    {},
    { sort: { numRequest: -1 } }
  );
  let newNumRequest;
  if (lastHireRequest) {
    newNumRequest = lastHireRequest.numRequest + 1;
  } else {
    newNumRequest = 1;
  }

  const userID = await User.findOne({ token: req.body.user }).then((data) => {
    return data._id;
  });

  // DEFINITION DE L'OBJET RECU PAR LE FRONT
  const {
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
    annexDemand,
  } = req.body;
  const newHireRequest = new HireRequest({
    numRequest: newNumRequest,
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
    dateHireRequest: Date.now(),
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
    annexDemand,
    user: userID,
  });

  // // SAUVEGARDE DE LA DEMANDE

  const savedHireRequest = await newHireRequest.save();
  console.log(savedHireRequest);
  res.json({ result: true, data: savedHireRequest });
});

// RECUPÉRATION DE LA DEMANDE SPÉCIFIQUE
router.get("/:id", (req, res) => {
  const hireRequestId = req.params.id;
  HireRequest.findById(hireRequestId)
    .populate("goalRequest")
    .populate("job")
    .populate("classification")
    .populate("department")
    .populate("contractType")
    .populate("contractReason")
    .populate("user")
    .then((hireRequest) => {
      if (hireRequest) {
        res.json({ result: true, hireRequest: hireRequest });
      } else {
        res.json({ result: false, error: "Hire request not found" });
      }
    });
});

module.exports = router;
