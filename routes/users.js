var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

// ROUTE ADD USER
router.post("/", (req, res) => {
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
  const { firstname, lastname, password, email, department, job, role } =
    req.body;
  const newUser = new User({
    firstname,
    lastname,
    password,
    email,
    department,
    job,
    role,
  });

  console.log("newUser", newUser);

  //CONDITION DE CREATION SUR L'ADRESSE MAIL : si elle existe déjà result : false
  User.findOne({ email: req.body.email }).then((data) => {
    if (data === null) {
      newUser.save().then(() => {
        res.json({ result: true });
      });
    } else {
      res.json({ result: false });
    }
  });
});

module.exports = router;
