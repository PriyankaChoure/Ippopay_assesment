const httpStatus = require("http-status");
const passwordService = require("../services/password.service");

const addPassword = async (req, res) => {
  const details = {
    password: req.body.password,
    count: req.body.count,
  };
  console.log(details);
  try {
    const newItem = await passwordService.createPassword(details);
    if (newItem) {
      console.log(newItem);
      res.status(httpStatus.CREATED).json(newItem);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Error while creating password");
    }
  } catch (err) {
    console.log("error to create new item -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = { addPassword };
