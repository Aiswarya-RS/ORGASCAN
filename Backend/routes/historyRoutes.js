const express = require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getAllDiagnoses
} = require(
  "../controllers/historyController"
);

router.get(
  "/",
  authMiddleware,
  getAllDiagnoses
);

module.exports = router;