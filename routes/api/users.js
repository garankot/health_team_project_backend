const express = require("express");

const { userNotAllowedProducts } = require("../../controllers/dailyRatePrivat");
const router = express.Router();
const { auth } = require("../../middlewares");

router.post("/user/:id", auth, userNotAllowedProducts);

module.exports = router;
