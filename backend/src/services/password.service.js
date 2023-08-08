const Password = require("../models/password");

const createPassword = async (detail) => {
  const addedPassword = Password.create(detail);
  return addedPassword;
};

module.exports = { createPassword };
