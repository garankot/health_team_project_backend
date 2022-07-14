const express = require("express");
const router = express.Router();

const { searchProducts } = require("../../controllers/products");
const { dailyRateNotAllowProducts } = require("../../controllers/dailyRate");

router.get("/search/:query", searchProducts);
router.get("/public/:bloodType", dailyRateNotAllowProducts);

module.exports = router;
