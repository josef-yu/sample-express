var router = require("express").Router();
var { BadRequestError } = require("../../errors");

const USER1 = {
  id: 1,
  firstName: "Nas",
  lastName: "Gandamato",
};

const USER2 = {
  id: 2,
  firstName: "Lou",
  lastName: "Burias",
};

const USERS = [USER1, USER2];

// Get list of users
router.get("/", function (req, res) {
  throw new BadRequestError("Not found");

  res.status(200).json(USERS);
});

// Get list by id
router.get("/:id", function (req, res) {
  const foundUser = USERS.find((user) => user.id == req.params.id);

  if (foundUser) {
    res.status(200).json(foundUser);
  } else {
    res.status(404).send("Not found");
  }
});

// Create user
router.post("/", function (req, res) {
  const body = req.body;

  const newUser = {
    id: USERS.length + 1,
    firstName: body.firstName,
    lastName: body.lastName,
  };

  USERS.push(newUser);

  res.status(201).json(newUser);
});

// Update user by id
router.patch("/:id", function (req, res) {
  const foundUser = USERS.find((user) => user.id == req.params.id);

  if (!foundUser) {
    return res.status(404).send("User not found");
  }

  foundUser.firstName = req.body.firstName;
  foundUser.lastName = req.body.lastName;

  return res.status(200).json(foundUser);
});

// Delete user by id
router.delete("/:id", function (req, res) {
  const foundUser = USERS.find((user) => user.id === req.params.id);

  if (!foundUser) {
    return res.status(404).send("User not found");
  }
});

module.exports = router;
