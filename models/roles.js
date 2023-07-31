const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  roleName: String,
});

const Role = mongoose.model("roles", roleSchema);

module.exports = Role;
