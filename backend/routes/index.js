const express = require("express");
const userRouter = require("./user");

const router =express.Router();
const cors = require("cors");

app.use(cors());
  

router.use("/user", userRouter);

module.exports = router;