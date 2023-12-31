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
const hireRequestsRouter = require("./routes/hireRequests");
const goalRequestsRouter = require("./routes/goalRequests");
const classificationsRouter = require("./routes/classifications");
const contractTypesRouter = require("./routes/contractTypes");
const contractReasonsRouter = require("./routes/contractReasons");

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
app.use("/hireRequests", hireRequestsRouter);
app.use("/goalRequests", goalRequestsRouter);
app.use("/classifications", classificationsRouter);
app.use("/contractReasons", contractReasonsRouter);
app.use("/contractTypes", contractTypesRouter);

module.exports = app;
