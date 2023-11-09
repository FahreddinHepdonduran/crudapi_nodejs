const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");

const removeBG = (req, res) => {
  const uploadedFile = req.file;
  // TODO: Remove image background with url and save the output, then return the output image url
  if (!uploadedFile) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const inputPath = `./uploads/${uploadedFile.originalname}`;
  const outputPath = `./outputImages/${uploadedFile.originalname}`;

  const formData = new FormData();
  formData.append("size", "auto");
  formData.append(
    "image_file",
    fs.createReadStream(inputPath),
    path.basename(inputPath)
  );

  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    responseType: "arraybuffer",
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": process.env.REMOVE_BG_API_KEY,
    },
    encoding: null,
  })
  .then((response) => {
    if (response.status != 200) {
      res.json({ "error": "invalid statusCode" });
      return console.error("Error:", response.status, response.statusText);
    }
  
    fs.writeFileSync(outputPath, response.data);
    res.json({ "imageUrl": outputPath });
  })
  .catch((error) => {
    res.json({ "error": error });
    return console.error("Request failed:", error);
  });
};

module.exports = {
  removeBG,
};
