const router = require("express").Router();
const passwordController = require("../controllers/password.controller");
router.post("/", passwordController.addPassword);

module.exports = router;
