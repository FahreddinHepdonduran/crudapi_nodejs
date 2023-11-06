const express = require("express");
const router = express.Router();
const imageOpController = require("../controllers/imageOpController");

router.post("/removeBg", imageOpController.removeBG);

module.exports = router;
