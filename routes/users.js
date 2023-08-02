var express = require("express");
var router = express.Router();

const User = require("../models/users");
const Department = require("../models/departments");
const Job = require("../models/jobs");
const InternalCompany = require("../models/internalCompanies");

const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

// ********** AJOUTE UN USER **********
router.post("/", (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  //AJOUT DU MODULE CHECKBODY
  if (
    !checkBody(req.body, [
      "firstname",
      "lastname",
      "password",
      "email",
      "department",
      "job",
      "role",
    ])
  ) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  //DEFINITION DE L'OBJET RECU PAR LE FRONT
  const { firstname, lastname, email, department, job, role } = req.body;
  const newUser = new User({
    firstname,
    lastname,
    password: hash,
    token: uid2(32),
    email,
    department,
    job,
    role,
  });

  //CONDITION DE CREATION SUR L'ADRESSE MAIL : si elle existe déjà result : false
  User.findOne({ email: req.body.email }).then((data) => {
    if (data === null) {
      newUser.save().then(() => {
        User.find()
          .populate("department")
          .populate("job")
          .populate("internalCompany")
          .populate("role")
          .then((allUsers) => {
            if (allUsers) {
              res.json({ result: true, allUsers: allUsers });
            } else {
              res.json({ result: false, error: "Users not found" });
            }
          });
      });
    } else {
      res.json({ result: false });
    }
  });
});
// ---------- //

// ********** RECUPERE TOUS LES USERS **********
router.get("/", (req, res) => {
  User.find()
    .populate("department")
    .populate("job")
    .populate("internalCompany")
    .populate("role")
    .then((allUsers) => {
      if (allUsers) {
        res.json({ result: true, allUsers: allUsers });
      } else {
        res.json({ result: false, error: "Users not found" });
      }
    });
});
// ---------- //

// ********** SUPRESSION D'UN SALARIE **********
router.delete("/", (req, res) => {
  User.deleteOne({ email: req.body.email }).then((deletedUser) => {
    if (deletedUser.deletedCount > 0) {
      User.find()
        .populate("department")
        .populate("job")
        .populate("internalCompany")
        .populate("role")
        .then((allUsers) => {
          if (allUsers) {
            res.json({ result: true, allUsers: allUsers });
          } else {
            res.json({ result: false, error: "Users not found" });
          }
        });
    }
  });
});

// ********** ROUTE SIGNIN **********
router.post("/signin", (req, res) => {
  // VERIFICATION DU BODY
  if (!checkBody(req.body, ["lastname", "email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  //INTERROGATION DE LA BDD
  User.findOne({ email: req.body.email })
    .populate("role")
    .then((data) => {
      if (data && bcrypt.compareSync(req.body.password, data.password)) {
        res.json({ result: true, role: data.role, token: data.token });
      } else {
        res.json({
          result: false,
          error: "User not found or wrong password",
        });
      }
    });
});

module.exports = router;
