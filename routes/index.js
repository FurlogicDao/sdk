const express = require("express");
const router = express.Router();

const logicRoutes = require("./logicRoutes");

router.use("/logic", logicRoutes);

module.exports = router;
