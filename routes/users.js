var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");

// ROUTE ADD USER
router.post("/", (req, res) => {
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

  newUser.save().then(() => {
    res.json({ result: true });
  });
});

module.exports = router;
