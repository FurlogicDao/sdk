const express = require("express");
const router = express.Router();

const {
  processData
} = require("../controllers/logicController");

router.post("/process", processData);

module.exports = router;
