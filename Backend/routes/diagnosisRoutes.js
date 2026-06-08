const express = require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  storeDiagnosis
} = require(
  "../controllers/diagnosisController"
);

router.post(
  "/store",
  authMiddleware,
  storeDiagnosis
);

module.exports = router;