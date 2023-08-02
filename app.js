require("dotenv").config();

require("./models/connection");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const departmentsRouter = require("./routes/departments");
const jobsRouter = require("./routes/jobs");
const rolesRouter = require("./routes/roles");

var app = express();
const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/departments", departmentsRouter);
app.use("/jobs", jobsRouter);
app.use("/roles", rolesRouter);

module.exports = app;
