var express = require("express");
var users = require("./modules/users/route");
var { BadRequestError } = require("./errors");

var app = express();

app.use(express.json());

app.use(function (err, req, res, next) {
  let status = 500;

  if (err instanceof BadRequestError) {
    status = 400;
  }

  res.status(status).send(err.message);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// app.get("/:id", function (req, res) {
//   res.send(req.params.id);
// });

app.get(
  "/protected-route",
  function (req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).send("Not authenticated");
    }

    next();
  },
  function (req, res) {
    return res.send("You are authenticated");
  }
);

app.use("/users", users);

// One CRUD API for one module of your choice

app.listen(3000, function () {
  console.log("app.js is listening to http://localhost:3000/");
});
