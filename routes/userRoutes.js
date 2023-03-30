const express = require("express");
const controller = require("../controller/userController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time:", new Date(Date.now()).toLocaleString());
  next();
});

router.get("/", controller.get);

router.get("/:id", controller.getById);

router.post("/", controller.post);

router.put("/:id", controller.put);

router.delete("/:id", controller.delete);

module.exports = router;
