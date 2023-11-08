const express = require("express");
const router = express.Router();
const upload = require("../configFiles/multerConfig");
const imageOpController = require("../controllers/imageOpController");

router.post("/removeBg", upload.single("image"), imageOpController.removeBG);

module.exports = router;
