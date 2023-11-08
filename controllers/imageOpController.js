const removeBG = (req, res) => {
  const uploadedFile = req.file;
  // TODO: Remove image background with url and save the output, then return the output image url
  if (!uploadedFile) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const imageUrl = `/uploads/${uploadedFile.originalname}`;

  res.json({ imageUrl });
};

module.exports = {
  removeBG,
};
