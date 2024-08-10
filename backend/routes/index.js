const express = require("express");
const router =express.Router();
const cors = require("cors");

app.use(cors());
  

router.use("/user", userRouter);

module.exports = router;